import { useState, useEffect } from 'react';
import axios from 'axios';


function UseFetch(path) {

  const[data, setData] = useState([]);
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  
  const fetchData = () => {
    setIsLoading(true)
    axios.get(`https://node-app-27yl.onrender.com/api/${path}`)
      .then(response => {
        if (response.status === 200) {
          setData(response.data); 
        } else {
          setError(`Unexpected status code: ${response.status}`);
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setError("Sorry, something went wrong");
        setIsLoading(false);
      });

  }

  useEffect(() => {
    fetchData()
  }, [path])
  return { data, error, isLoading }
}

export default UseFetch