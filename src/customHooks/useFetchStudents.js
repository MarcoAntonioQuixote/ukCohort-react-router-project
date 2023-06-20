import {useState,useEffect} from 'react';
import axios from 'axios';


const useFetchStudents = () => {

    const [students,setStudents] = useState([]);

    const instance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {"content-type": "application/json"}
    })

    useEffect(() => {

        fetchData();

        async function fetchData() {
            let res = await instance.get(`/students`);
            setStudents(res.data);
        }

    }, []);
    return students;
}

export default useFetchStudents;