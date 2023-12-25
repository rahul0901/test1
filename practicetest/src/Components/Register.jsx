import React, { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    // step 2 =>
    const [userData, setData] = useState({ userKaName: '', userKaEmail: '', userKaPassword: '' });

    const route = useNavigate();

    console.log(userData)

    // yaha se data joh impit field mai user type krega woh fetch krenge in change attribute se.....

    const handleOnChange = (event) => {
        // event ki help se apan yaha name attribute use krke woh attribute ka value fetch krlenge.. aur spread operator se userdata ase rahega hamesha..
        setData({ ...userData, [event.target.name]: event.target.value })
    }

    async function sendDataToBackend(event) {
        event.preventDefault();
        try {
            if (userData.userKaName && userData.userKaEmail && userData.userKaPassword) {
                if (userData.userKaPassword.length >= 8) {
                    // const response = await axios.post('http://localhost:3000/register')
                    setData({ userKaName: '', userKaEmail: '', userKaPassword: '' })
                    alert('Register Success')
                    route('/')
                }
                else {
                    alert('password length must be 8')
                }
            }
            else {
                alert('fill all field')
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <>
            {/* step 1 => */}
            <form onSubmit={sendDataToBackend}>
                <label>Name:</label>
                <input type="text" onChange={handleOnChange} name='userKaName' /> <br />
                <label>Email:</label>
                <input type="email" onChange={handleOnChange} name='userKaEmail' /> <br />
                <label>Password:</label>
                <input type="password" onChange={handleOnChange} name='userKaPassword' /> <br />
                <input type="submit" value="Register Here" />
            </form>
        </>
    )
}
export default Register;

// step 1: form tag use kiya aur phele layout banaya register ka full html
// step 2: onsubmit daala jisko ek function se control krenge