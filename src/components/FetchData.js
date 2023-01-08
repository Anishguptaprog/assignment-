import React,{useState,useEffect}from 'react'
import axios from 'axios'

function FetchData() {
    const [photo,setPhoto] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(res => {
                console.log(res)
                setPhoto(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    },[])

  return (
    <div>
        <ul>
            {
                photo.map(pic => <li key={pic.id}>{pic.thumbnailUrl}</li>)
            }
        </ul>
    </div>
  )
}

export default FetchData