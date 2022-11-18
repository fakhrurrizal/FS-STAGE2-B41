import { useState } from 'react';
import { FloatingLabel, Form, Container, Modal, Alert } from 'react-bootstrap';
import GlobalButton from '../component/atoms/GlobalButton'

import google from '../assets/image/google.svg';
import fb from '../assets/image/fb.svg';
import github from '../assets/image/github.svg';

const Register = (props, { show, showLogin, showRegister}) => {
  const handleClose = () => showRegister(false);
  const changeModal = () => {
    handleClose()
    showLogin(true)
  }

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  })
  const isUser = []
  let localDatas = localStorage.getItem('DB_USER')

  

  const [isLoading, setIsLoading] = useState(false);
  function handleRegis(){
    let dataUser = JSON.parse(localDatas)

    if (dataUser == null) {
      isUser.push(user)
      localStorage.setItem('DB_USER', JSON.stringify(isUser))
      console.log(" Registration Succes")
      changeModal()
    }else{
      isUser.push(dataUser)
      dataUser.forEach(element => {
        if (element.email === user.email){
          alert("Email sudah ada!")
        }else{
          isUser.push(user)
          localStorage.setItem('DB_USER', JSON.stringify(isUser))
          console.log("Berhasil Daftar")
          changeModal()
        }
      });
    }
  }

  return (
    <Modal
    {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
  >
        <Modal.Body style={{height: "40rem", paddingLeft: "50px", paddingRight: "50px"}} coseButton>
          <h1 className= 'text-danger fw-bold mt-2' style={{fontSize:"36px"}}>Register</h1>
          
          <Form onSubmit={handleRegis}>
            <FloatingLabel controlId="floatingInput" label="Name" className="mb-3 mt-4" >
              <Form.Control
                label='name'
                type='text'
                placeholder='Name'
                name='name'
                onChange={e => setUser({ ...user, name: e.target.value })}
                value={user.name}
                required
              />
            </FloatingLabel>
          
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 mt-4" >
              <Form.Control 
                label='Email'
                type='email'
                placeholder='Email Address'
                name='email'
                onChange={e => setUser({ ...user, email: e.target.value })}
                value={user.email}
                required
              />
            </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control 
                  type="password" 
                  placeholder="Password" 
                  name='password'
                  onChange={e => setUser({ ...user, password: e.target.value })}
                  value={user.password}
                  required
                />
              </FloatingLabel>
              <Form.Select
                    aria-label='Default select example'
                    name='role'
                    style={{marginTop:'20px'}}
                    onChange={e => setUser({ ...user, role: e.target.value })}
                    value={user.role}
                    required
                  >
                    <option>Role</option>
                    <option value='user'>User</option>
                    <option value='admin'>Admin</option>
                  </Form.Select>
            <div className="d-grid gap-2">
            <GlobalButton 
              className= 'btnRegisterApp mt-4' 
              size="lg"
              type="submit"
              name='Register'
              onClick={handleRegis}
              isLoading={isLoading}
            >Register</GlobalButton>
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
          <p className='text-muted'>
              Already have an account ? Click{' '}
              <strong 
                style={{ cursor: "pointer" }}
                className='cursor-pointer text-primary'
                onClick={changeModal}
                
              >
                Here
              </strong>
          </p>
          </Modal.Body>

      </Modal>
  )

 
}

export default Register;

