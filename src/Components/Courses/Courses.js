import React from 'react';
import "./Courses.css"
import Sidebar from '../Sidebar/Sidebar';
const Courses = (props) => {
    return (
        <div className="container ">
            <div className="row">
                <div className="col-md-10 row">{props.Data.map((data) => 

                    <div className="structure col-md-4 shadow-lg p-3 mb-5 bg-white rounded ">
                        <img src={data.image} alt="" />
                        <h2 className="text-primary">{data.name}</h2>
                        <h3 className="align-items-middle">Price: <small><b>${data.price}</b></small></h3>
                        <button onClick={() => props.buyCourses(data)} className="btn btn-primary mt-auto p-2">Enroll Now</button>
                    </div>

                )}
                </div>
                <div className="col-md-2">
                    <Sidebar courses={props.courses}>

                    </Sidebar>

                </div>

            </div>
        </div>
    );
};

export default Courses;
