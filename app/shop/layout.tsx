"use client"
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'

const layout:React.FC<{children:ReactNode}> = ({children}) => {
    const path = usePathname()
  return (
    <div className='container'>
    <h2>Home / Shop{path.includes("shopping-card") ? "/ Shopping Card" : ""}</h2>
    {children}
    </div>
  )
}

export default layout