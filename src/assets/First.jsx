import React, { useState } from 'react'
import pic1 from '../assets/bookkid.jpg'
import kids from '../assets/kids.webp'
import Card from './Card'
import axios from 'axios'

const First = () => {
    const [search,setSearch]=useState("")
  const [bookData,setData]=useState([])
   const searchBook=()=>{
if(search!==""){
axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBuijZvxMNwjLN4oE7O-VMQjgvULS5JHMo'+'&maxResults=40')
.then(res=>setData(res.data.items))
.catch(err=>console.log(err))
} 
   }
  return (
    <>
  
    <div className='header'>
       <h1>Reading will makes you a <br/> better person</h1>
    </div>
    <div className="row2">
        <h2>Find your book here!</h2>
        <div className="search">
            <input type="text" placeholder='Enter your book name' value={search} onChange={e=>setSearch(e.target.value)}
      />
            <button onClick={searchBook} ><i className="fa fa-search"></i></button>
            <img src={kids} alt="" />
        </div>
    </div>
    <div className="container">
      {
        <Card book={bookData}/>
      }
        
        
        
    </div>
    </>
  )
}

export default First;