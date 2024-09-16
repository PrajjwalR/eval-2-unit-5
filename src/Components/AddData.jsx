import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const AddData = ({fetchData}) => {
    const [title,setTitle]=useState("");
            const [author,setAuthor]=useState("");
            const [genre,setGenre]=useState("");
            const [publicationDate,setPublication]=useState("");
            const [synopsis,setSynopsis]=useState("");
            const [coverImage,setCoverImage]=useState("");
            const [isEditable,setIsEditable]=useState(false);

            const handleOnSubmit=(e)=>{
                e.preventDefault()
                let obj={title,author,genre,publicationDate,synopsis,isEditable,coverImage}
                console.log(title,author,genre,publicationDate,isEditable)
                axios.post("https://evlreact1-default-rtdb.firebaseio.com/books.json",obj)
                .then((res)=>{
                    console.log(res)
                    fetchData()
                })
                .catch((err)=>console.log(err))
            }
  return (
    <div>
         <form onSubmit={handleOnSubmit} action="">
                    <input type="text" onChange={(e)=>{
                        setTitle(e.target.value)
                    }} value={title} placeholder='title'/>
                    <input type="text" onChange={(e)=>{
                        setAuthor(e.target.value)
                    }} value={author} placeholder='author'/>
                    <input type="text"  onChange={(e)=>{
                        setGenre(e.target.value)
                    }} value={genre} placeholder='genre'/>
                    <input type="date" 
                    onChange={(e)=>{
                        setPublication(e.target.value)
                    }} value={publicationDate} placeholder='date'/>
                    <input type="text"   onChange={(e)=>{
                        setSynopsis(e.target.value)
                    }}
                    
                     value={synopsis} placeholder='synopis'/>
                       <input type="text"   onChange={(e)=>{
                        setCoverImage(e.target.value)
                    }}
                    
                     value={coverImage} placeholder='coverimage link'/>
                     <label for=""> isEditable</label>
                    <input type="checkbox"  onChange={(e)=>{
                        setIsEditable(!isEditable)
                    }} value={isEditable} name="" id=""/>
                    <button>Add Book</button>
                    
                </form>
    </div>
  )
}

export default AddData