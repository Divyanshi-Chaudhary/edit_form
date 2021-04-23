import React, {useState, useEffect} from 'react';
import './Listing.css';
import Modal from 'react-modal';
import {useHistory} from 'react-router-dom';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };


function Listing() {
    const [listdata, setListdata]= useState([]);
    const [formdata, setFormdata] = useState({})
    const [modalIsOpen, setIsOpen]= useState(false);
    const [idx, setIdx] =useState(null);
    const [arr] = useState([]);

    const history = useHistory();
    

useEffect(()=>{
    datalist();
    //setPrepopulate(JSON.parse(localStorage.getItem('array')))
},[listdata])

        //get data from localstorage
    const datalist =()=>{
        let value = JSON.parse(localStorage.getItem("array"));
        setListdata(value);
    }
        //delete a list from table
    const Deletelist=(index)=>{
        window.alert('Are you sure, you want to delete?')
        let listrow = JSON.parse(localStorage.getItem('array'));
        listrow.splice(index,1);
        localStorage.setItem('array', JSON.stringify(listrow));

    }

    //to open modal
    const handleEdit = (value,index) => {
        setFormdata({...value})
        console.log(formdata)
        setIsOpen(true);
        setIdx(index);
        arr.splice(0,1,value);
        // console.log(arr)
        // console.log(index)
       

    }
// to update
    const handleUpdate = (value,index) => {
        let data = JSON.parse(localStorage.getItem('array'))
        data.splice(idx,1,formdata)
        localStorage.setItem('array', JSON.stringify(data))
        window.alert('Your Data Is Successfully Updated')
        setIsOpen(false)


    }    ///to be continued....

    //to close modal
    const closeModal=()=>{
        setIsOpen(false);

    }

    const Homepage= () => {
        history.push('/')
    }

    // const edit= () => {

    // }
    



    
    return (
        <div >
            
            <table border='1'>
                <tr>
                <th>
                    Index
                </th>
                <th>
                    Name
                </th>
                <th>
                    Age
                </th>
                <th>
                    Gender
                </th>
                <th>
                    Education
                </th>
                <th>
                    Profession
                </th>
                <th>
                    City
                </th>
                
                </tr>
                

                {
                    listdata.map((value,index)=>{
                        return(
                            
                                
                                <tr key={index}>
                                <td>{index}</td>
                                <td>{value.Name}</td>
                                <td>{value.Age}</td>
                                <td>{value.Gender}</td>
                                <td>{value.Education}</td>
                                <td>{value.Profession}</td>
                                <td>{value.City}</td>
                                <td>
                                    <button type='button' onClick={()=>Deletelist(index)}>Delete</button>
                                </td>

                                

                                <td>
                                    <button onClick={() => handleEdit(value,index)}>Edit</button>
                                    {/* () => openModal() */} 
                                    <Modal
                                    
                                    isOpen = {modalIsOpen}
                                    onRequestClose = {closeModal}
                                    style= {customStyles}
                                    contentLabel = "Example Modal"
                                    >
                                        {arr.map((value,index)=>{
                                            return(
                                                <div>
                                        <label >Name: </label>
                                        <input type="text" defaultValue={value.Name} onChange={(e) =>setFormdata({...formdata, Name:e.target.value})} /><br/><br/>

                                        <label >Age: </label>
                                        <input type="text" defaultValue={value.Age} onChange={(e) => setFormdata({...formdata, Age: e.target.value})}/><br/><br/>

                                        <label >Gender: </label>
                                        <input type="text"defaultValue={value.Gender} onChange= {(e) => setFormdata({...formdata, Gender: e.target.value})} /><br/><br/>

                                        <label >Education: </label>
                                        <input type="text"defaultValue={value.Education} onChange={(e)=> setFormdata({...formdata, Education: e.target.value})} /><br/><br/>

                                        <label >Profession: </label>
                                        <input type="text" defaultValue={value.Profession} onChange={(e)=> setFormdata({...formdata, Profession: e.target.value})} /><br/><br/>

                                        <label >City: </label>
                                        <input type="text" defaultValue={value.City} onChange={(e)=> setFormdata({...formdata, City:e.target.value})}/><br/><br/>

                                        <button type='button' onClick={()=>handleUpdate(value,index)}>Update</button>


                                                </div>
                                            )
                                        })}
                                        
                                     </Modal>


                                </td>
                                </tr>  
                        )
                    })
                }
            </table><br/>

            <button onClick={Homepage} type='button'>Back to Homepage</button>
            
        </div>
    )
}

export default Listing;
