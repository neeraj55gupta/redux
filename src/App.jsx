import React, { useEffect, useState } from "react"
import  './App.css';
import {asyncdata} from "../src/action/productaction"
import { useDispatch, useSelector} from 'react-redux'
export default function App(){
const [gap,setgap]=useState(6)
const [Data,setData]=useState([])

 
  const data = useSelector ((state) =>state.productStore.Product)
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(asyncdata())

},[dispatch])
    
function handledelete(i){
  Data.filter(item=>item.id!=i)
}



useEffect(()=>{
  const filterdata = data.filter(item=>item.id<=gap)
  setData(filterdata)
},[data,gap])
  return(
    <div className="container">
      <div className="product-grid">
        {

        }
  {
    Data.map((item,index)=>(
      <div> 
        <div key={index} className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5pgJyS80enMoAmK9McLNhN4hNjy-5qeFtg&s"/>
            <div className="product-info">
              <p className="="product-id>Id: {item.id}</p>
              <h2 className="product-title">{item.title}</h2>
              <p className="product-body">{item.body}</p>
              <button onClick={()=>handledelete(index)}>X</button>
      </div>
      </div>
      </div>
    ))
  }
  </div>
  <div className="pagination">
    <button onClick={()=>setgap(Math.max(0,gap-6))}>
      Back
    </button>
    <button onClick={()=>setgap(gap+6)}
    
    >
Next 
</button>
    </div>
    </div>
     
  )}
  

 