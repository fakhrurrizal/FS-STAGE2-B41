import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack';
import product1 from '../assets/image/Produk1.png'
import product2 from '../assets/image/Produk2.png'
import product3 from '../assets/image/Produk3.png'
import product4 from '../assets/image/Produk4.png'

export default function Produk(){
    return(
        <>  
            <p className='fw-bold' style={{color:"#BD0707", fontSize:"36px", marginLeft:"10%", marginTop:"39%"}}>Let's Order</p>    
             <Stack direction="horizontal"  style={{marginLeft:"10%", height:"100vh", marginTop:'-150px',}}>
                <Card className="" style={{width:'17rem',borderRadius:'14px',marginRight:'45px',  backgroundColor:"#F3CFC6"}}>
                <Card.Img variant="top" src={ product1 } />
                <Card.Body>
                    <Card.Title>Ice Coffee Palm Sugar</Card.Title>
                    <Card.Text>
                    Rp. 27.000
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card className="" style={{width:'17rem',borderRadius:'14px',marginRight:'45px',  backgroundColor:"#F3CFC6"}}>
                <Card.Img variant="top" src={ product2 } />
                <Card.Body>
                    <Card.Title>Ice Coffee Green Tea</Card.Title>
                    <Card.Text>
                    Rp. 31.000
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card className="" style={{width:'17rem',borderRadius:'14px',marginRight:'45px',  backgroundColor:"#F3CFC6"}}>
                <Card.Img variant="top" src={ product3 } />
                <Card.Body>
                    <Card.Title>Hanami Latte</Card.Title>
                    <Card.Text>
                    Rp. 29.000
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card className="" style={{width:'17rem',borderRadius:'14px',marginRight:'45px',  backgroundColor:"#F3CFC6"}}>
                <Card.Img variant="top" src={ product4 } />
                <Card.Body>
                    <Card.Title>Clepon Coffee</Card.Title>
                    <Card.Text>
                    Rp. 28.000
                    </Card.Text>
                </Card.Body>
                </Card>
             </Stack>
        </>
    )
}