import React from 'react';
import {Card, CardHeader, CardBody, CardTitle, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';
import useFetchStudents from '../customHooks/useFetchStudents';

const StudentCard = ({student}) => {
    return (

    <Card
    className="my-2"
    color="primary"
    inverse
    style={{
      width: '18rem'
    }}
  >
    <CardHeader>
      {student.name}
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
        Student Level is {student.level}
      </CardTitle>
      <Link to={`/profile/${student.id}`}>
          <img className='studentPic' src={student.avatar}/>
      </Link>
      <CardText>
        {student.avatar}
      </CardText>
    </CardBody>
  </Card>
    )
}

function Home() {

    const students = useFetchStudents();

    const showStudents = students.map(s => <StudentCard key={s.id} student={s}/>)

  return (
    <div>
        {showStudents}
    </div>
  )
}

export default Home