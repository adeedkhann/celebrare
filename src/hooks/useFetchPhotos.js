import { useEffect, useState } from "react";
import axios from "axios";

function useFetchPhotos() {

const [photos , setPhotos]= useState([]);
const [loading , setLoading]= useState(false)
const [error , setError]= useState("")


useEffect(()=>{
    
    const fetchData  = async()=>{
        try {
            setLoading(true);
            const response = await axios.get("https://picsum.photos/v2/list?limit=30")
            setPhotos(response.data)
            setError("")
        } catch (error) {
            setLoading(false)
            setError(error.message||"something went wrong while fetching")
        }finally{
            setLoading(false)
        }

    
    }

    fetchData()

},[])

return{photos , loading , error}

  
}

export default useFetchPhotos