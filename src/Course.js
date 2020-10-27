import React from 'react';
const Course = (props) => (
    <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
        <div className="card-body">
        <h5 className="card-title">Email: {props.course.email}</h5>
        <h5 className="card-title">Status: {props.course.status}</h5>
        <h5 className="card-title">Entity :{props.course.entityId}</h5>
        </div>
    </div>
);
export default Course;
