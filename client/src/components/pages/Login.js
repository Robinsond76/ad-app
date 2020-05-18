import React from 'react';

const Login = () => {
  return (
    <>
      <div className='ui text container'>
        <h3 className='ui header'>Log in</h3>
        <div className='ui text container segment'>
          <form className='ui form'>
            <div className='field'>
              <label>Email</label>
              <input type='text' placeholder='email...'></input>
            </div>
            <div className='ui field'>
              <label>Password</label>
              <input type='text' placeholder='password'></input>
            </div>
            <button className='ui submit button'>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
