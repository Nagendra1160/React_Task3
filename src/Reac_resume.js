import React from 'react';
import data from './Data/data.json';
import logo from './profile_pic.svg';
export default function  Reac_resume(props)
{
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(data=>console.log(data))
    let info=data.profile[props.location.data.id];
    console.log(info.carrer);
    return(
     

        <div className="row justify-content-center">
            <div className="col-lg-3 m-2">
                 <div className="card shadow">
                     <div className="card-body text-center">
                        <img src={logo} style={{width:"30%"}}></img>
                        <h2>{info.basics.name}</h2>
                        <h3 className="text-secondary">{info.basics.pin}</h3>
                        <a href={"tel:"+ info.basics.Mobile}>
                        <h3>{info.basics.Mobile}</h3></a>
                        <a href={"mailto:"+ info.basics.email}>
                        <h3>{info.basics.email}</h3></a>
                     </div>
                 
                 </div>
            </div>
    
        <div className="col-lg-8  p-5">
            <div className="card shadow  p-5">
               <h2>carrer Objective</h2>
               <p>{info.carrer}</p>
               <hr></hr>
               
               <h2 className="text-info">Educational assets</h2>
            
               <div class="table-responsive-md">
	                 <table border="1" class="table table-bordered table-striped table-hover">
                        <thead class="thead-dark">
                        <tr>
                            <th>S.no</th>
                            <th>Qaulification</th>
                            <th>Institution</th>
                            <th>Percentage</th>
                            <th>Year</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>B.Tech</td>
                            <td>{info.edu.btech}</td>
                            <td>{info.edu.Bper}</td>
                            <td>{info.edu.Byr}</td>
                            </tr>
                            
                            <tr>
                            <td>2</td>
                            <td>INTER</td>
                            <td>{info.edu.inter}</td>
                            <td>{info.edu.Iper}</td>
                            <td>{info.edu.Iyr}</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>SSC</td>
                            <td>{info.edu.ssc}</td>
                            <td>{info.edu.Sper}</td>
                            <td>{info.edu.Syr}</td>
                            </tr>
                            </tbody>	
                            <tfoot>

                            </tfoot>
                        </table>
                    </div>
               <h2>Hobbies</h2>
               <p>{info.hobby.h}</p>
               <h2>Achievements</h2>
               
                  <ul>
                   <li>{info.achieve.ai[0]}</li>
                   <li>{info.achieve.ai[1]}</li>
                   <li>{info.achieve.ai[2]}</li>
                   <li>{info.achieve.ai[3]}</li>

                   </ul>
               <h2>Declaration</h2>
               <p>{info.achieve.declare}</p>
               <p>Place :</p>
               <p>Date :</p>
            </div>
        </div>
</div>
    )
}
