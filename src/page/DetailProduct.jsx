import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Button } from 'react-bootstrap';
import Produk1 from '../assets/image/Produk1.png';

import variant1 from '../assets/image/variant1.png'
import variant2 from '../assets/image/variant2.png'
import variant3 from '../assets/image/variant3.png'
import variant4 from '../assets/image/variant4.png'
import variant5 from '../assets/image/variant5.png'
import variant6 from '../assets/image/variant6.png'
import variant7 from '../assets/image/variant7.png'
import variant8 from '../assets/image/variant8.png'

export default function detailProduk(){
    return(
        <Container className='detailProduct'>
           <Col>
           <img 
                src={ Produk1 }
                width="436px"
              
            />
           </Col>
           <Col className='descriptProduct'>
                <h2 className='titleDetail'>Ice Coffee Palm Sugar</h2>
                <p className="priceDetail">Rp. 27.000</p>
                <div className="variantDetail">
                    <p className="variantTitle">Toping</p>
                    <div className="listVariant">
                        <div className="variant">
                            <img src={variant1} width="50" />
                            <p>Bubble Tea Gelatin</p>
                        </div>
                        <div className="variant">
                            <img src={variant2} width="50" />
                            <p>Manggo</p>
                        </div>
                        <div className="variant">
                            <img src={variant3} width="50" />
                            <p>Green Coconut</p>
                        </div>
                        <div className="variant">
                            <img src={variant4} width="50" />
                            <p>Boba Manggo</p>
                        </div>
                        <div className="variant">
                            <img src={variant5} width="50" />
                            <p>Bill Berry Boba</p>
                        </div>
                        <div className="variant">
                            <img src={variant6} width="50" />
                            <p>Kiwi Popping Pearl</p>
                        </div>
                         <div className="variant">
                            <img src={variant7} width="50" />
                            <p>Matcha Cantaloupe</p>
                        </div>
                        <div className="variant ">
                            <img src={variant8} width="50" />
                            <p>Strawberry Popping</p>
                        </div>
                    </div>
                    <div className="quantity">
                        <div>
                            <p>Total</p>
                        </div>
                        <div className="quantityPrice">
                            <p>Rp. 27.000</p>
                        </div>
                    </div>
                    <div>
                        <Button className="addCart">Add Cart</Button>
                    </div>
                </div>
           </Col>
        </Container>
    )
}