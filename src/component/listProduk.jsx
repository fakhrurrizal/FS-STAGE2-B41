import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack, Card, Col } from 'react-bootstrap'
import LoginForm from "../auth/Login";
import RegisterForm from "../auth/Register";


export default function Produk({ getLogin }){
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false)

    const Products = [];
    const getProducts = () => {
        if (typeof Storage === "undefined"){
            alert("Tidak dapat menambahkan Product")
        }

        const localData = localStorage.getItem("DATA_PRODUCT");
        let data = JSON.parse(localData);

        let formater = new Intl.NumberFormat(undefined, {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
        });

        if(data !== null) {
            for (let i = 0; i < data.length; i++){
                data[i].itemprice = formater.format(data[i].itemprice)
                Products.push(data[i]);
            }
        }
    };
    getProducts();

    return(
        <>  
            <p className='fw-bold' style={{color:"#BD0707", fontSize:"36px", marginLeft:"10%", marginTop:"43%"}}>Let's Order</p>    
             <Stack direction="horizontal"  style={{marginLeft:"10%", height:"100vh", marginTop:'-110px',wrapText:"wrap"}}>
                {Products.map((item, index) => (
                    <Col key={index} >
                    <Card 
                        onClick={() => 
                        !!getLogin === false ?
                        setShowLogin(true)
                        : navigate(`/product/${item.itemid}`)    
                        } 
                        style={{cursor:"pointer",width:'17rem',borderRadius:'14px',marginRight:'45px',  backgroundColor:"#F3CFC6"}}>
                        <Card.Img variant="top" src={item.itemimage} style={{height:"23rem"}} />
                        <Card.Body className="text-danger">
                            <div
                                style={{fontWeight:"Bold", fontSize:"20px"}}
                            >{item.itemname}</div>
                            <Card.Text>
                            {item.itemprice}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
             </Stack>
             <LoginForm 
                show={showLogin}
                setShow={setShowLogin}
                setShowRegister={setShowRegister}
             />
            <RegisterForm 
                show={showRegister}
                setShow={setShowRegister}
                setShowRegister={setShowLogin}
            />
        </>
    )
}