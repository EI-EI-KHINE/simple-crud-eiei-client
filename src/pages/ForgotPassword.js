import React from 'react';
import {Button} from 'react-bootstrap';

function ForgotPassword(){
    return (
        <div className="information">
            <header>
                <h1>If you forget your password</h1>
            </header>
            <input type ="email" placeholder="Enter Email Address"/>
            <Button class="login" >Send</Button>
        </div>
    );
}
export default ForgotPassword;