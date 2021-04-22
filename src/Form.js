import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
  
function Form() {
    const[user, setUser] =useState({});
    const history = useHistory();

    

    const SaveData=(value) =>{
        // e.preventDefault();
        console.log(user);
        // let array=[];
        // let var = localStorage.getItem('data');
        // if(var == undefined){
        //     let obj={};
        //     obj['name']=value;

        // }


        localStorage.setItem('data', JSON.stringify(user));
        
        history.push('Form2');

    }

    return (
        <div>
            <h2>Enter Your Details Below..</h2>
            <label style={{marginRight: 20}}><b>Name</b></label>
            <input type="text" value={user.Name} placeholder="Enter Name" onChange={(e) => setUser({...user, Name: e.target.value})}></input>
            <br></br>
            <br></br>
            <label style={{marginRight: 20}}><b>Age</b></label>
            <input type="number" value={user.Age} placeholder="Enter Age" onChange={(e) => setUser({...user, Age: e.target.value})}></input>
            <br/><br/>
            <label style={{marginRight: 20}}><b>Gender</b></label>
            <input type="text" value={user.Gender} placeholder="Enter your Gender" onChange={(e) => setUser({...user, Gender: e.target.value})}></input>
            
            <br></br>
            <br></br>
            <button onClick={SaveData}>Next</button>
            
        </div>
    )
}

export default Form;
