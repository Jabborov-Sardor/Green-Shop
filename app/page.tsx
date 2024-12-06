"use client"
import App from "@/components/App";
import { Context } from "@/context/Context";
import Categories from "@/service/Categories";
import Products from "@/service/Products";
import BlogSection from "@/components/BlogSection";
import { useContext,} from "react";

interface TagTypes {
  tagName:string
  path:null | string
}


export default function Home() {
  const {setTags} = useContext(Context)
const tags:TagTypes[] = [
  {
    tagName: "All Plants",
    path: null,
  },
  {
    tagName: "New arrivals",
    path: "new-arrivals",
  },
  {
    tagName: "Sale",
    path: "sale",
  }
];


  return (
    <div>
    <App/>
    <div className="flex justify-between w-[1200px] mx-auto">
      <div className="w-[25%]">
        <Categories/>
      </div>
      <div className="w-[75%]">
        <div className="flex items-center justify-between">
        <ul className="flex items-center space-x-10">{tags.map((item:TagTypes, index:number) => <li onClick={() => setTags(item.path)} className={`cursor-pointer text-[22px] text-[#46A358] border-y-4 border-t-0 border-[#46A358]`} key={index}>{item.tagName}
        </li>)}
        </ul>
        <p>Short by:Default sorting</p>
        </div>
        <Products/>
      </div>
    </div>
        <BlogSection/>
    </div>
  );
}
