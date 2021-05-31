/**
 * 공통 fetch
 */
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url:string) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const get = async () =>{
            setLoading(true);
            const result = await axios.get(url);
            const { status, data } = result; 
            if(status === 200){
                setData(data);
                setLoading(false);
            } else {
                console.error(`[Fail] Api Call ... URL : ${url}`);
                setLoading(false);
            }
        }
        get();
        return () => {
            setLoading(false);
            setData([]);
        }
    }, [url])

    return [data, loading];

}

export default useFetch;
