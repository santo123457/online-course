import React from 'react';

const Sidebar = (props) => {
    let course =props.courses
    const totalPrice= course.reduce((total,pd)=>total+pd.price,0);     
    return (
        <div>
            <h6><span className="text-primary font-weight-bold">Purchased courses :</span><span className="font-weight-bold"> {course.length}</span></h6>
            <h6><span className="text-primary font-weight-bold">Total Price :</span><span className="font-weight-bold"> $ {totalPrice}</span></h6>
        </div>
    );
};

export default Sidebar;