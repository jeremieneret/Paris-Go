import { useState, useEffect } from 'react'
import axios from 'axios';

const useFetch = url => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                url
            )
            setData(result);
        }
        fetchData();
    }, [url])

    return { data }
}

export default useFetch;
