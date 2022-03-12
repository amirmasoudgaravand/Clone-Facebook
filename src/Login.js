
import React, { useState } from 'react'
import './style.css';
import Header from './component/header/Header';
import Sidebar from './component/sidebar/Sidebar';
import Feed from './component/feed/Feed';
import Widgets from './component/Widgets/Widgets';
import GoogleLogin from 'react-google-login';
function Login() {
    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
            ? JSON.parse(localStorage.getItem('loginData'))
            : null
    );

    const handleFailure = (result) => {
        alert(result);
    };

    const handleLogin = async (googleData) => {
        const res = await fetch('/api/google-login', {
            method: 'POST',
            body: JSON.stringify({
                token: googleData.tokenId,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await res.json();
        setLoginData(data);
        localStorage.setItem('loginData', JSON.stringify(data));
    };
    const handleLogout = () => {
        localStorage.removeItem('loginData');
        setLoginData(null);
    };
    return (
        <>
            {loginData ? (
                <>
                    <Header photo={loginData.picture} name={loginData.name} logout={handleLogout} />
                    <div className="appbody">
                        <Sidebar photo={loginData.picture} name={loginData.name} />
                        <Feed photo={loginData.picture} name={loginData.name} />
                        <Widgets />
                    </div>
                </>
            ) : (
                <div className="login">
                    <div className="loginlogo">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" />
                        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" />
                    </div>
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        buttonText="Log in with Google"
                        onSuccess={handleLogin}
                        onFailure={handleFailure}
                        cookiePolicy={'single_host_origin'}
                    ></GoogleLogin>
                </div>
            )}

        </>
    );
};

export default Login;
