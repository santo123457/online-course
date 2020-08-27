import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import fakeData from'./fakeData/fake'
import Header from './Components/Header/Header';
import Courses from './Components/Courses/Courses';

function App() {

  
  
    const[cart,addCart]=useState([]);
  const buyCourses =(course)=>{
    const addCourse =[...cart,course];
    
    addCart(addCourse);
  }

  //   const first10 = fakeData.slice(0, 10);
//   const [products, setProducts] = useState(first10);
//   const[cart,addCart]=useState([]);

//   const addProduct = (product) => {
//       const addNewCart = [...cart ,product];
//       addCart(addNewCart);

  return (
    <div className="App">
     <Header></Header>
     

       <Courses Data={fakeData}
        /* handleApp={addProduct}
                        products={product} */
       courses={cart}
       buyCourses={buyCourses}
       ></Courses>

    </div>
  );
}

export default App;
