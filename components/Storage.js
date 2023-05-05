import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    }, [key, value]);

    const pushValue = (newValue) => {
        setValue((prevState) => [...prevState, newValue]);
    };

    const popValue = (newValue) => {
        setValue((prevState) => {
            let data = prevState.filter(e => e.id !== newValue.id)
            return data;
        });
    };

    return [value, setValue, pushValue, popValue];
};
