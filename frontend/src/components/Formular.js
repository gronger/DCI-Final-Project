import React,{Fragment, useState} from 'react' 
import axios from 'axios'

const Formular =() => {

    const [data, setData] = useState({
   
    })

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setData({
            ...data,
            [event.target.name] :event.target.value
        })
    }
    
const sendData =(e)=>{
    e.preventDefault()

    axios.post ('http://localhost:4000/register', data)
    .then(response => console.log(response.data)) 
    .catch(error => console.log(error))

    console.log(data.name + ' ' + data.lastname + ' '+ data.Age)

}
// avoid autmatic processing
    return(
        
        <div class=' p-5 '>
        <h1 className='mt-5 mb-5'>Using AI to help find answers to common skin conditions</h1>
        
        <form className='border  p-5 row p-6' onSubmit={sendData} >
            <div className='col-md-3'>
                <input
                    required
                    placeholder="Name"
                    className="form-control"
                    type='text'
                    name="name"
                    onChange={handleInputChange}

                ></input>
                </div>

                <div className='col-md-3'>
                <input
                     required
                     placeholder="lastname"
                     className="form-control"
                     type='text'
                     name="lastname"
                     onChange={handleInputChange}
                ></input>
                </div>
    

 
            <div className='col-md-3' class='mt-2' >
                <input
                    required
                    placeholder="Email"
                    className="form-control"
                    type='email'
                    name="Email"
                    onChange={handleInputChange}

                ></input>
                </div>

                <div className='col-md-3' class='mt-2'>
                <input
                     required
                     placeholder="Age"
                     className="form-control"
                     type='text'
                     name="Age"
                     onChange={handleInputChange}
                ></input>
                </div>
 

      
            <div className='col-md-3'class='mt-2' >
                <input
                    required
                    placeholder="please write down in Cm"
                    className="form-control"
                    type='text'
                    name="Height"
                    onChange={handleInputChange}

                ></input>
                </div>

                <div className='col-md-3 ' class='mt-2'>
                <input
                     required
                     placeholder="Kg"
                     className="form-control"
                     type='text'
                     name="Weight"
                     onChange={handleInputChange}
                ></input>


                <input  className='btn btn-danger mb-5 mt-5 ' onChange={handleInputChange} type="file" id="myFile" name="filename"/>
             
                </div>
        <button className='btn btn-primary'  type='submit'>Send</button>
        </form>



         <h3  className='ml-5  mb-5 mt-5 '>{data.name} - {data.lastname} -{data.Age} - {data.Height} -{data.Weight} </h3>
        


 
            
    </div>


)

}

export default Formular  