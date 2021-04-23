import React,{useState, useEffect} from 'react';
import Modal from 'react-modal';

export default function ShowListing(props) {

    const [submitteddata,setSubmittedata] = useState([])
    let [formdata,setFormdata] = useState({})
    const [isopen,setIsopen]= useState(false)
    let [arr,setArr] = useState([]);
    let [idx,setIdx]  = useState(null)

    useEffect(()=>{
        getAllData();
    },[submitteddata])

    const getAllData = () => {
        let data = JSON.parse(localStorage.getItem('array'));
        setSubmittedata(data)
    }

    const handleDelete = index => {
        setSubmittedata(submitteddata.splice(index,1));
        localStorage.setItem('array',JSON.stringify(submitteddata))
    }


    const handleUpdate = (id) => {
          let data = JSON.parse(localStorage.getItem('array'))
          data.splice(idx,1,formdata)
          localStorage.setItem('array',JSON.stringify(data))
          alert('Data updated successfully')
          setIsopen(false)
    }

    const handleEdit = (value,index) => {
       setFormdata({...value})
       console.log(formdata)
        setIsopen(true)
        setIdx(index)
        arr.splice(0,1,value)
     
    }


    return (
        <>
        <div>
            <table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Education</th>
              <th>Profession</th>
              <th>City</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
                submitteddata.map((value,index)=>{
                    return( 
                          <tr key={index}>
                          <td>{value.name}</td>
                          <td>{value.age}</td>
                          <td>{value.gender}</td>
                          <td>{value.edu}</td>
                          <td>{value.prof}</td>
                          <td>{value.city}</td>
                          <td><button onClick={()=>handleDelete(index)}>Delete</button></td>
                          <td><button onClick={()=>handleEdit(value,index)}>Edit</button></td>
                          </tr>
                    )
                })
            }
            </tbody>  
            </table>

           {/* <button onClick={()=>setIsopen(true)}>Open Modal</button> */}

            <Modal isOpen={isopen}>
                {arr.map((value,index)=>{
                    return(
                        <div>
                        <label>Name: </label>
                        <input type="text" defaultValue={value.name} onChange={(e)=>setFormdata({...formdata, name : e.target.value})} /><br />
                        <label>Age: </label>
                        <input type="text" defaultValue={value.age} onChange={(e)=>setFormdata({...formdata, age : e.target.value})} /><br />
                        <label>Gender: </label>
                        <input type="text" defaultValue={value.gender} onChange={(e)=>setFormdata({...formdata, gender : e.target.value})} /><br />
                        <label>Education: </label>  
                        
                        <input type="text" defaultValue={value.edu} onChange={(e)=>setFormdata({...formdata, edu : e.target.value})} /> <br />
                        <label>Profession: </label>
                        <input type="text" defaultValue={value.prof} onChange={(e)=>setFormdata({...formdata, prof : e.target.value})} /><br />
                        <label>City: </label>
                        <input type="text" defaultValue={value.city} onChange={(e)=>setFormdata({...formdata, city :  e.target.value})} /><br />
                        <button onClick={()=>setIsopen(false)}>Close</button><br />
                        <button onClick={()=>handleUpdate()}>Update</button>
                        </div>
                    )
                })}
            
            </Modal>

        </div>
        </>
    )
}