import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import Joi from 'joi-browser';

function AddStudent() {
    let url = process.env.REACT_APP_API_URL;
    const [open, setOpen] = useState(false);
    let [formData, setFormData] = useState({});
    const [address, setAddress] = useState({});


    const schema = {
      name: Joi.string().max(18).required(),
      method: Joi.string().required().valid('Email','Telephone'),
      email: Joi.string().email().when('method', { is: 'Email', then: Joi.required() }),
      password: Joi.string().min(6).max(10).required(),
      confirmP: Joi.ref('password'),
      address: {
        state: Joi.string().length(2).required(),
        zip: Joi.number().min(5).max(5).required(),
      },
      dob: Joi.date().greater(new Date("2000-01-01")).required(),
    }

    const toggle = () => setOpen(!open);

    const onChange = (e) => {
        let prop = e.target.name;
        let value = e.target.value;
        if (prop === "state" || prop === "zip") {
          setAddress(prev => ({...prev, [prop]: value}));
          return;
        }
        setFormData(prev => ({...prev, [prop]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const res = Joi.validate(formData, schema);
          console.log(res);
          if (res.error !== null) {
            throw new Error("That's not funny. 🥲");
          } 
        } catch (error) {
          console.log(error);
        }
        // console.log(res);

        // for (let error of res.error.details) {
        //   console.log(error.message);
        // }
    }

  return (
    <div>

        <Button color="danger" onClick={toggle}>
        Add a student
      </Button>

        <Modal isOpen={open} toggle={toggle}>
        <form>
            <input onChange={onChange} type="text" name="name" /> name
            {/* <input onChange={onChange} type="text" name="avatar" /> image url */}
            <input onChange={onChange} type="text" name="email" /> email
            {/* <input onChange={onChange} type="number" name="level"/> level */}
            <input onChange={onChange} type="password" name="password" /> PW
            <input onChange={onChange} type="password" name="confirmP"/> Confirm PW
            <input onChange={onChange} type="radio" name="method" value="Email"/>E
            <input onChange={onChange} type="radio" name="method" value="Telephone"/>T
            <input onChange={onChange} type="radio" name="method" value="N/A"/>Neither
            <input onChange={onChange} type="text" name="state" /> state
            <input onChange={onChange} type="number" name="zip"/> level
            <input onChange={onChange} type="date" name="dob" /> Date of Birth
            <button onClick={handleSubmit}>Add Student</button>
        </form>
      </Modal>
    </div>
  )
}

export default AddStudent

//

