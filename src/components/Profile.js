import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Profile() {

    const { id } = useParams();
    const [student,setStudent] = useState({});

    useEffect(() => {
        getStudent();

        async function getStudent() {
            let res = await axios.get(`URL LINK HERE/${id}`);
            console.log(res);
            setStudent(res.data);
        }
    }, []);

  return (
    <div>Profile for {student.name} with ID number {student.id}</div>
  )
}

export default Profile