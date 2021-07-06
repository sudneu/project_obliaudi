import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import Modal from '../../../UIComponents/Modal/Modal';
import Button from '../../../UIComponents/Buttons/Button';
import Form from '../../User/Form';
import { signup, login } from '../../../Apis/apiAdmin';


const ModalContent = props => {

    const [open, setOpen] = useState(false);
    const initialState = {
      name:'',
      email:'',
      password:'',
      retype:'',
      error:'',
      success:false,
      isLogIn: false 
    } 

    const [values, setValues] = React.useState({
      name:'',
      email:'',
      password:'',
      retype:'',
      error:'',
      success:false,
      isLogIn: false 
    })  
    
    const handleChange = name => event => {
      setValues({...values, error:false, [name]: event.target.value});
    }     
    
    const handleSubmit = fn => e => {
      e.preventDefault();
      fn(values)
      .then(data => {
        if(!data){
          setValues({...values, error: "No server connection", success:false})
        }else if(data.error){
          setValues({...values, error: data.error || "No server connection", success:false})
        }else{
          setValues({
            ...values,
            name:'',
            email:'',
            password:'',
            retype:'',
            error:'',
            success:true
          })
        }
      })
    }

    const handleClick = event => {
        setOpen(true);
    }

    const modalSelect = () => {
        const content = (
          <div className="modal">
            <div className="modal-body">
              <header className="modal-header">
                <h2>{(values.isLogIn ? 'Login' : 'Signup') || 'FormName'}</h2>
              </header>
              <body>
                <Form 
                  Formid={props.id} 
                  HandleChange={handleChange} 
                  HandleSubmit={handleSubmit} 
                  values={values}
                  SetValues={setValues}  
                />                
              </body>
              <footer className="modal-footer">
                {props.id === "myform" ?
                  <button form={props.id} type="submit" onClick={values.isLogIN 
                            ? handleSubmit(login) : handleSubmit(signup)}>Submit!</button>
                :
                null
              }
                <button onClick={()=> {setOpen(false); setValues({...values, ...initialState})}}> Close </button>
              </footer>
            </div>
          </div>
        );
        return ReactDOM.createPortal(content, document.getElementById('modal-pop'));
    }
 
    return (
        <>
          <Button clickHandle={handleClick} type="success" name="signup" />
          <Modal
            in={open}
            Timeout="200"  
            classes="modal"  
          >
            <>
              {modalSelect()}
            </>
          </Modal>
        </>
    )
  }

  export default ModalContent;