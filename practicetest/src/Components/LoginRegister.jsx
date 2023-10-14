import React, { useState } from 'react';

const LoginRegister = () => {

    const [userData, setData] = useState({ userKaName: '', userKaEmail: '', userKaPassword: '' })

    const handleChange = (event) => {
        setData({...userData, [event.target.name]: event.target.value })
    }

    const sendData = (event) => {
        event.preventDefault();
        if (userData.userKaName && userData.userKaEmail && userData.userKaPassword) {
            if (userData.userKaPassword.length >= 6) {
                alert('sucessfully registered')
                console.log(userData)
                setData({ userKaName: '', userKaEmail: '', userKaPassword: '' });
            }
            else {
                alert('pass toh bada rakh bachi')
            }
        }
        else {
            alert('fill all details')
        }
    }
    return (
        <>
            <form onSubmit={sendData}>
                <label>Name: </label> <br />
                <input type="text" name='userKaName' onChange={handleChange} value={userData.userKaName} /> <br />

                <label>Email: </label> <br />
                <input type="email" name='userKaEmail' onChange={handleChange} value={userData.userKaEmail} /> <br />

                <label>Password: </label> <br />
                <input type="password" name='userKaPassword' onChange={handleChange} value={userData.userKaPassword} /> <br />

                <input type="submit" value="Register" />
            </form>
        </>
    )
}

export default LoginRegister;