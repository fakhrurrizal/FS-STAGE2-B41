import { Button, Modal, Form } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import google from '../assets/image/google.svg';
import fb from '../assets/image/fb.svg';
import github from '../assets/image/github.svg';

export default function Register(props) {
  
  return(
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body style={{height: "32rem",  paddingLeft: "50px", paddingRight: "50px"}}>
      <h1 className= 'text-danger fw-bold mt-2' style={{fontSize:"36px"}}>Register</h1>
      <Form>
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3 mt-4" >
          <Form.Control type="text" placeholder="Your Name" />
        </FloatingLabel>
      
        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 mt-4" >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
        <div className="d-grid gap-2">
        <Button className= 'btnRegisterApp mt-4' size="lg" >
          Register
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