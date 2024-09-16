import React, { useContext, useEffect } from 'react'

import axios from 'axios'
import { DataContext } from '../Context/DataStore'

const Home = ({fetchData}) => {
    let {data}=useContext(DataContext)
    // useEffect(()=>{
    //     fetchData()
    // },)

    const handleUpdate=(key,val)=>{
        let updateT=prompt("update Title",val.title);
        let updateA=prompt("update Title",val.author);
        let updateG=prompt("update Title",val.genre);
        let updateP=prompt("update Title",val.publicationDate);
        let updateS=prompt("update Title",val.synopsis);
        let updateI=prompt("update Title",val.isEditable);

        let updateobj={
            ...val,
            title:updateT,
            author:updateA,
            genre:updateG,
            publicationDate:updateP,
            synopsis:updateS,
            isEditable:updateI
        }

        axios.patch(`https://evlreact1-default-rtdb.firebaseio.com/books/${key}.json`,updateobj)
        .then((res)=>{
            alert("books are updated")
            fetchData()
        })

    }
  return (
    <div className='container' style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
        {data.map(([key,val])=>{
            
           return( <div key={key} className="card">
            <img src={val.coverImage} alt=""/>
            <p>{val.title}</p>
            <p>{val.author}</p>
            <p>{val.genre}</p>
            <button onClick={()=>handleShowmore(key)}>Show More</button>
            {val.isEditable ? 
                <button onClick={()=>handleUpdate(key,val)}>Edit</button>:"Not Editable"}
            </div>)
        })}
    </div>
  )
}

export default Home