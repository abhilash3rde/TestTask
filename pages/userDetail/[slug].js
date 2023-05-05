import React, { useState,useEffect } from 'react'
import { useRouter } from 'next/router';
import axios from "axios";
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import { useLocalStorage } from '@/components/Storage';
const slug = () => {
  const [data,setData]=useState(null)
  const [icon,setIcon]=useState(false)


  const [favorites, setFavorites, pushFavorites, popFavorites] = useLocalStorage('favorites', []);

  const router = useRouter();
  const { slug } = router.query;
 
      const getAPIData=async(slug)=>{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${slug}`);
      setData(res.data)
  }
  useEffect(() => {
    if (slug){
      getAPIData(slug);
    }
  
  }, [slug]);



  return (
    <div className={styles.maindiv}>
      <h1 className={styles.list_heading}>User Detail</h1>
      <div className={styles.btn_div}>
      <div className={styles.button_div}>
      <button onClick={()=> router.back()} className={styles.button}>Go Back</button>
      {favorites.findIndex(e => e.id === data?.id)!== -1?
        <AiFillHeart className={styles.icon} onClick={()=>popFavorites(data)}/>:<AiOutlineHeart className={styles.icon} onClick={()=>pushFavorites(data)}/>
        
      }
      </div>
   
      </div>
      <table className={styles.table}>
        <tbody>
        <tr>
          <th>Name</th>
         <td>{data?.name }</td>
        </tr>
        <tr>
          <th>User Name</th>
         <td>{data?.username }</td>
        </tr>
        <tr>
          <th>Email Address</th>
         <td>{data?.email }</td>
        </tr>
        <tr>
          <th>Contact No.</th>
         <td>{data?.phone }</td>
        </tr>
        <tr>
          <th>Address</th>
         <td>{data?<div>{data.address.street}, {data.address.suite}, {data.address.city}, {data.address.zipcode}</div> :""}</td>
        </tr>
        <tr>
          <th>Website</th>
         <td>{data?.website  }</td>
        </tr>
        <tr>
          <th>Company</th>
         <td>{data?.company?.name }</td>
        </tr>
        </tbody>
      </table>
     

    </div>
  )
}

export default slug
