"use client"
import { Context } from '@/context/Context'
import { useAxios } from '@/hook/useAxios'
import useDebounce from '@/hook/useDebounce'
import { useQuery } from '@tanstack/react-query'
import React, { useContext, useEffect, useState,} from 'react'
import InputRange from 'react-input-range'
import "react-input-range/lib/css/index.css"


interface CategoryType {
    category_id:string
    category_name:string
}
const Categories = () => {
    const [rangeValue, setRangeValue] = useState({min:22, max:500})


    const {setCategory, setMinPrice, setMaxPrice} = useContext(Context)
    const {data:categories = []}:any = useQuery({
        queryKey:['categories'],
        queryFn:() => useAxios().get("/categories", {
            params:{page:1, limit:100}
        }).then(res => res.data.categories)
    })


    function handleChangeRange(value:{min:number, max:number} | any){
        setRangeValue(value)
        setMinPrice(value.min)
        setMaxPrice(value.max)
    }


  return (
    <div className='space-y-5'>
        {
            categories.map((item:CategoryType) => <p onClick={() => setCategory(item.category_name)} className='text-[22px]  font-semibold cursor-pointer'  key={item.category_id}>{
                item.category_name}
                </p>)
        }
        <InputRange 
        step={1}
        value={rangeValue}
        maxValue={1000}
        minValue={1}
        onChange={handleChangeRange}/>
    </div>
  )
}

export default Categories