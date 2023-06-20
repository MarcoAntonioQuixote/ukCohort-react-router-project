import React, {useState, useEffect} from 'react';
import { Button } from 'reactstrap';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profile() {

    let url = process.env.REACT_APP_API_URL;
    
    const { id } = useParams();
    const [student,setStudent] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        getStudent();

        async function getStudent() {
            let res = await axios.get(url + `/students/${id}`);
            console.log(res);
            setStudent(res.data);
        }
    }, []);

  const handleDelete = () => {
    axios.delete(url + `/students/${id}`);
    navigate("/");
  }

  return (
    <div>Profile for {student.name} with ID number {student.id}
      <Button color="danger" onClick={handleDelete}>Delete Student</Button>
    </div>
  )
}

export default Profile