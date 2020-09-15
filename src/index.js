import React from 'react';
import ReactDOM from 'react-dom';

var email;
var passwort;

function handleClick() {
    fetch("http://localhost:3001",
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {Email: email, passwort: passwort}
            )
        }
    )
}

function handleEmailChange(event) {
    email = event.target.value;
}

function handlePasswordChange(event) {
    passwort = event.target.value;

}

ReactDOM.render(
    <React.StrictMode>
        <div>
            Register
            <div>
                <input placeholder={"Email"} onChange={handleEmailChange}></input>
                <input type={"password"} onChange={handlePasswordChange} placeholder={"passwort"}></input>
                <div>
                    <button onClick={handleClick}>Registers</button>
                </div>
            </div>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
