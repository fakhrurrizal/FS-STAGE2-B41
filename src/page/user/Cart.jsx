import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import produk1 from '../../assets/image/Produk1.png'
import hapus from '../../assets/image/trash.svg'
import invoice from '../../assets/image/invoice.svg'

export const Cart = () => {
  return (
    <>
        <div className="Cart d-flex">
            <div className="detailCart">
                <h2>My Cart</h2>
                <p>Review Your Order</p>
                <div className="lineCart"></div>
                <div className='mt-3 d-flex'>
                    <img 
                        src={produk1}
                        className='cartProduk'
                    />
                    <div className='ms-4 mt-2'>
                        <h4 className='fw-bold mb-4'>Ice Coffee Palm</h4>
                        <p><strong>Toping </strong>: Bill berry, Bubble Tea Gelatin</p>
                    </div>
                    <div className='mt-2' style={{marginLeft:"30%"}}>
                        <p>Rp. 33.000</p>
                        <img 
                            src={hapus}
                            className="mt-3 ms-5"
                        />
                    </div>
                </div>
                <div className='mt-4 d-flex'>
                    <img 
                        src={produk1}
                        className='cartProduk'
                    />
                    <div className='ms-4 mt-2'>
                        <h4 className='fw-bold mb-4'>Ice Coffee Palm</h4>
                        <p><strong>Toping </strong>: Bill berry, Bubble Tea Gelatin</p>
                    </div>
                    <div className='mt-2' style={{marginLeft:"30%"}}>
                        <p>Rp. 33.000</p>
                        <img 
                            src={hapus}
                            className="mt-3 ms-5"
                        />
                    </div>
                </div>
                <div className="lineCart mt-3"></div>
                <div>
                    <div className='totalCart'>
                        <div className="lineSubtotal mt-5"></div>
                        <div className='d-flex mt-2' style={{fontSize:"18px"}}>
                            <p>Subtotal</p>
                            <p style={{marginLeft:"40%"}}>69.000</p>
                        </div>
                        <div className='d-flex mt-2' style={{fontSize:"18px"}}>
                            <strong>Qty</strong>
                            <p style={{marginLeft:"50%"}}>2</p>
                        </div>
                        <div className="lineSubtotal mt-1"></div>
                        <div className='d-flex mt-2' style={{fontSize:"18px"}}>
                            <strong>Total</strong>
                            <p style={{marginLeft:"48%"}}>2</p>
                        </div>
                    </div>
                    <div className='attachTransaction'>
                        <img 
                            src={invoice}
                        />
                        <p>Attache of Transaction</p>
                    </div>
                </div>
            </div>
            <div className='formCart'>
                <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control 
                        type="text" 
                        placeholder="Name" 
                        className='inputCart' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control 
                        type="email" 
                        placeholder="Email" 
                        className='inputCart1' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control 
                        type="number" 
                        placeholder="Phone" 
                        className='inputCart2' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control 
                        type="number" 
                        placeholder="Post Code" 
                        className='inputCart3' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" placeholder="Address" style={{resize:"none"}} rows={5} className="inputCart4" />
                </Form.Group>
                <Button
                    type="submit"
                    className="paySubmit"
                >
                    Pay
                </Button>
                </Form>
            </div>
        </div>
    </>
  )
}

export default Cart;