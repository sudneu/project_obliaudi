import React from 'react';
import {Link} from 'react-router-dom';

import './Form.css';

const Signup = props =>{    
    
      const loginForm = () => (
          <form id={props.Formid}>
            <div>
              <label for="email">Email:</label>
              <input
                name="email"
                type="email"
                placeholder= "enter your email"
                value={props.values.email}
                onChange={props.HandleChange('email')}
              />
            </div>
            <div>
              <label for="password">Password:</label>
              <input
                name="password"
                type="password"
                placeholder= "enter your password"
                value={props.values.password}
                onChange={props.HandleChange('password')}
              />
            </div>
          </form>
      );

      const signupForm = () => (
        <form id={props.Formid}>
          <div>
              <label for="name">Name:</label>
              <input 
                  name='name'
                  type="text"
                  placeholder="write your name"
                  value={props.values.name}
                  onChange={props.HandleChange('name')}
              /> 
          </div>
          <div>
              <label htmlfor="email">Email:</label>
              <input 
                  name="email"
                  type="email"
                  placeholder="write your email"
                  value={props.values.email}
                  onChange={props.HandleChange('email')}
              /> 
          </div>
          <div>
              <label htmlfor="password">Password:</label>
              <input 
                  name="password"
                  type="password"
                  placeholder="write your password"
                  value={props.values.password}
                  onChange={props.HandleChange('password')}
              /> 
          </div>
          <div>
              <label htmlfor="Retype">Retype Password:</label>
              <input 
                  name="retype"
                  type="password"
                  placeholder="write your password again"
                  onChange={props.HandleChange('retype')}
              /> 
          </div>          
        </form>
      );
      
      const error = () => (
        <div style={{display: props.values.error ? "" : 'none'}}>
          {props.values.error}
        </div>
      );
    
      const success = () => (
        <div style={{display: props.values.success ? "" : 'none'}}>
          Successfully {props.values.success && props.values.isLogIn ? 'login' : 'signup. Now login'}
        </div>
      );

      const bottomField = () => (
          <h2>
            {
              !props.values.isLogIN ? 
                (
                  <p>
                  Already Signed?
                  <Link onClick={() => props.SetValues({...props.values, isLogIn : true, success:false})} >
                    Login
                  </Link>
                </p>                 
              )
              :
              (
                <p>
                Need an account?
                <Link onClick={() => props.SetValues({...props.values, isLogIn : false, success: false})} >
                  Signup
                </Link>
              </p> 
              )
            }
          </h2>
      );
    
      return (
        <>
          {error()}
          {success()}          
          {props.values.isLogIn ? loginForm() : signupForm()}
          {bottomField()}
        </>
      );
}

export default Signup;