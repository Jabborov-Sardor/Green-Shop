"use client"
import { useState, useEffect } from "react"


const useDebounce = (value:number | string, delay:number) => {
    const [debouncedValue, setDebouncedValue] = useState<number | string>(value);


    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
};

export default useDebounce;