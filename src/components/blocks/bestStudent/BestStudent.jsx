import React from "react"
import classes from './student.module.css'

const BestStudent = ({student}) => {
    return (
        <div>
            <img src={student.img} alt={student.studentName}  className={classes.img} />
            <h3>{student.studentName}</h3>
            <p>{student.occupation}</p>
            <a href={student.link} target="blank" >Написать в соц.сети</a>
            <p><strong>Телефон:</strong> {student.phone}</p>
            <p>{student.description}</p>
        </div>
    )
};

export default BestStudent;
