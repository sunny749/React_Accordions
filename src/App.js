import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import DataComp from './DataComp';

function App() {
  const [showData,setData]=useState([]);
  const url='http://jsonplaceholder.typicode.com/posts'
  const loadData=()=>{
    fetch(url,{'methode':'GET'}).then(response=>response.json())
    .then(result=>setData(result))
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    loadData()
  },[])
  return (
    <div className="container">
      <div className="row justify-content-center">
      <h1 className='row bold justify-content-center'>React Accordion</h1>
        {
          showData.map((data,index)=>{
            return(
              <div className='col-md-6 col-sm-12' key={data.id}>
                <DataComp {...data}></DataComp>
              </div>
            )})
           }
      </div>
    </div>
  );
}

export default App;
