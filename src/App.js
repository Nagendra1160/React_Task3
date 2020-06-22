import React ,{profiler}from 'react';
import logo from './profile_pic.svg';
import data from './Data/data.json';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import './CSS/bootstrap.min.css';
import './App.css';
import Reac_resume from './Reac_resume';

function App() {
  return (
    <BrowserRouter>
<Route exact path="/" component={Home}></Route>
<Route exact path="/resume" component={Reac_resume}></Route>
</BrowserRouter>
    
  )}
 //Home another component
 let Home=()=>
 {
   let  profiles=data.profile;
   console.log(profiles);
   return( 
   <div>
         <div className="row justify-content-center">
             {profiles.map((values,index)=>(
             <div className="col-lg-4 col-md-4 col-sm-10 mt-1" key={index}>
                <div className="card ">
                   <div className="card-body text-center">
                     <img src={logo} style={{width:"30%"}}></img>
                     <h2>{values.basics.name}</h2>
                     <h3 className="text-secondary">{values.basics.pin}</h3>
                     <a href={"tel:"+ values.basics.Mobile}>
                     <h3>{values.basics.Mobile}</h3></a>
                     <a href={"mailto:"+ values.basics.email}>
                     <h3>{values.basics.email}</h3></a>
                     <Link to={{ pathname:"/resume",data:{id:index}}} className="btn btn-primary">View Profile</Link>
                   </div>
                 </div>
              </div>
         ))}
         </div>
   </div>
  );
}

export default App;





