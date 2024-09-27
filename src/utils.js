import {data} from "./data.js";

export const AllCategories=()=>{
    const categories=Array.from(new Set(data.map(obj=>obj.category)))
    return [...categories, "all"].sort((a,b)=>a.localeCompare(b))
}