import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

function AddStudent() {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({});

    const toggle = () => setOpen(!open);

    const onChange = (e) => {
        let prop = e.target.name;
        let value = e.target.value;
        setFormData(prev => ({...prev, [prop]: value}))
    }

    const addStudent = async (e) => {
        e.preventDefault();
        let res = await axios.post(`URL LINK HERE`,formData);
        console.log(res);
    }

  return (
    <div>

        <Button color="danger" onClick={toggle}>
        Add a student
      </Button>

        <Modal isOpen={open} toggle={toggle}>
        <form>
            <input onChange={onChange} type="text" name="name" /> name
            <input onChange={onChange} type="text" name="avatar" /> image url
            <input onChange={onChange} type="number" name="level"/> level
            <button onClick={addStudent}>Add Student</button>
        </form>
      </Modal>
    </div>
  )
}

export default AddStudent

//

