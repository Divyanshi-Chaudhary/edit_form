import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";

function Form2() {
    const[userdata, setUserdata] = useState({});
    const[prevdata, setPrevdata]= useState([]);
    const history= useHistory();
    

    useEffect(()=>{
        getData();
       
    }, []);


    const getData=()=>{        // to retain prevValues // 
      let val =  JSON.parse(localStorage.getItem('array'))
       if(val){
           setPrevdata([...val])
           
       }
      
    }
              
    const SaveData=(e)=>{
        window.alert('Your Data Has Been Successfully Saved')
        e.preventDefault();
        console.log(userdata);
        let getdata= JSON.parse(localStorage.getItem('data'));   //get prev form data
        let obj = {...getdata, ...userdata};  //concat previous formdata with existing form
        Math.floor(Math.random);
        prevdata.push(obj); 
        localStorage.setItem('array',JSON.stringify(prevdata)); 
           
        history.push('Listing');  // route

    }

    return (
        <div>
            <form >
             <label style={{marginRight: 20}}>Education</label>
            <input type="text" placeholder="Education" value={userdata.Education} onChange={(e) => setUserdata({...userdata, Education: e.target.value})}></input>
            <br></br>
            <br></br>
            <label style={{marginRight: 20}}>Profession</label>
            <input type="text" placeholder="Profession" value={userdata.Profession} onChange={(e) => setUserdata({...userdata, Profession: e.target.value})}></input>
            <label style={{marginRight: 20}}>City</label>
            <input type="text" placeholder="City" value={userdata.City} onChange={(e) => setUserdata({...userdata, City: e.target.value})}></input>
            <br></br>
            <br></br>
            <button onClick={SaveData} >Save</button>
            </form>
        </div>
    )
}

export default Form2;
