import React, { useState } from 'react'
import './contact.css'
import { useAuth0 } from "@auth0/auth0-react";
const Contact = () => {
    const { loginWithRedirect, user, isAuthenticated} = useAuth0();
    const [users, setUsers] = useState(
        {
            Name: '', Email: '', Subject: '', Message: ''
        }
    )
    let name, value
    const data = (e) =>
    {
        name = e.target.name;
        value = e.target.value;
        setUsers({...user, [name]: value})
    }
    const senddata = async (e) =>
    {
        const{Name, Email, Subject, Message} = users
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type' : 'aplication/json'
            },
            body: JSON.stringify({
                Name, Email, Subject, Message
            })
        }
        const res = await fetch('https://e-commerce-contact-89087-default-rtdb.firebaseio.com/Massage.json', options)
        console.log(res)
        if(res){
            alert("Your Massage Sent")
        }
        else{
            alert("An Error Occured")
        }
    }
  return (
    <>
    <div className='contact_container'>
        <div className='contant'>
            <h2># CONTACT US</h2>
            <div className='form'>
                <form method='POST'>
            <input type='text' name='Name' value={users.Name} placeholder='Enter Your Full Name' required autoComplete='off' onChange={data}></input>
            <input type='email' name='Email' value={users.Email} placeholder='Enter Your E-mail' autoComplete='off' onChange={data}></input>
            <input type='text' name='Subject' value={users.Subject} placeholder='Enter Your Subject' autoComplete='off' onChange={data}></input>
            <textarea name='Message' value={users.Message} placeholder='Your Message' autoComplete='off' onChange={data}></textarea>
            {
                isAuthenticated ?
                <button type='submit' onClick={senddata}>Send</button>
                :  <button type='submit' onClick={() => loginWithRedirect()}>Login To Send</button>
            }
           
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact