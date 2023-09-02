import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './cart.css'
// import Product from './product';

const Cart = ({ cart, setCart}) => {
    //Increace qty
    const incqty = (product) =>
    {
        const exsit = cart.find((x) =>
        {
            return x.id === product.id
        })
        setCart(cart.map((CurElm) =>
        {
            return CurElm.id === product.id ? {...exsit, qty: exsit.qty + 1} : CurElm
        }))
    }
    // Dec qty
    const decqty = (product) =>
    {
        const exsit = cart.find((x) =>
        {
            return x.id === product.id
        })
        setCart(cart.map((CurElm) =>
        {
            return CurElm.id === product.id ? {...exsit, qty: exsit.qty - 1} : CurElm
        }))
    }
    //Remove cart product
    const removeproduct = (product) =>
    {
        const exsit = cart.find((x) =>
        {
            return x.id === product.id
        })
        if(exsit.qty > 0)
        {
            setCart(cart.filter((x) => 
            {
                return x.id !== product.id
            }))
        }
    }
    // Total price
    const Totalprice = cart.reduce((price, item) => price + item.qty * item.Price, 0)
  return (
    <>
    <div className='cartcontainer'>
        {cart.length === 0 && 
        <div className='emptycart'>
            <h2 className='empty'>Cart Is Empty</h2>
            <Link to='/product' className='emptycartbtn'>Shop Now</Link>
            </div>}
        <div className='contant'>
            {
                cart.map((CurElm) =>
                {
                    return(
                        <div className='cart_item' key={CurElm.id}>
                            <div className='img_box'>
                                <img src={CurElm.Img} alt={CurElm.Title}></img>
                            </div>
                            <div className='detail'>
                                <div className='info'>
                                <h4>{CurElm.Cat}</h4>
                                <h3>{CurElm.Title}</h3>
                                <p>Price: ${CurElm.Price}</p>
                                <div className='qty'>
                                    <button className='incqty' onClick={() => incqty(CurElm)}>+</button>
                                    <input type='text' value={CurElm.qty}></input>
                                    <button className='decqty' onClick={() => decqty(CurElm)}>-</button>
                                </div>
                                <h4 className='subtotal'>Sub Total: ${CurElm.Price * CurElm.qty}</h4>
                                </div>
                                <div className='close'>
                                <button onClick={() => removeproduct(CurElm)}><AiOutlineClose /></button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        {
            cart.length > 0 &&
            <>
            <h2 className='totalprice'>total: $ {Totalprice}</h2>
            <button className='checkout'>Check Out</button>
            </>
        }
    </div>
    </>
  )
}

export default Cart