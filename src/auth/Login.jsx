import React, { useState } from 'react';

import { Button, Modal, Form } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import google from '../assets/image/google.svg';
import fb from '../assets/image/fb.svg';
import github from '../assets/image/github.svg';

export default function Login(props, { show, showLogin, showRegister }) {
  
  const handleClose = () => showLogin(false)
  const changeModal = () => {
    handleClose()
    showRegister(true)
  }

  //login
  const [user, setUser] = useState({
    isLogin: false,
    name: "",
    email: "",
    password: "",
  })

  const userData = JSON.parse(localStorage.getItem("DB_USER"))
  console.log(userData)
  const dataSession = []

  if (userData !== null){
    for (let i = 0; i < userData.length; i++){
      dataSession.push(userData[i]);
    }
  }
  function handleSubmit(){
    if (userData == null){
      return alert('Akun tidak ditemukan')
    }
    const dataUser = dataSession.filter(
      (data) => data.email === user.email
    )
    if (dataUser[0].password !== user.password){
      return alert("Password kamu salah!")
    }

    let parsed = JSON.stringify(dataUser);
    localStorage.setItem("SESSION_SET", parsed);
    handleClose();
  }


  return(
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body style={{height: "27rem",  paddingLeft: "50px", paddingRight: "50px"}}>
      <h1 className= 'text-danger fw-bold mt-3' style={{fontSize:"36px"}}>Login</h1>
      <Form onSubmit={handleSubmit}>
      
        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 mt-4" >
          <Form.Control 
            type="email" 
            placeholder="name@example.com" 
            name='email'

            onChange={e => setUser({ ...user, email: e.target.value })}
            value={user.email}
            />
        </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control 
              type="password" 
              placeholder="Password" 
              name='password'
              onChange={e => setUser({ ...user, password: e.target.value })}
              value={user.password}
              />
          </FloatingLabel>
        <div className="d-grid gap-2">
        <Button className= 'btnLoginApp mt-4' type="submit" size="lg">
          Login
        </Button>
        </div>
        <div className="lineOr">
          <div className="line"><hr/></div>
          <p className="ms-2 me-2">or</p>
          <div className="line"><hr/></div>
        </div>
        <div className="logoAuth d-flex justify-content-center ms-4 mb-4">
          <div>
            <img 
              src={google}
              width="30"
              className="mt-2"
              alt="Google"
             />
          </div>
          <div>
            <img 
              src={fb}
              width="70"
              className="btnFb ms-3"
              alt="Facebook"
             />
          </div>
          <div>
            <img 
              src={github}
              className="btnGithub"
              width="70"
              alt="Github"
             />
          </div>
        </div>
 
      </Form>
      </Modal.Body>
    </Modal>
  )
}