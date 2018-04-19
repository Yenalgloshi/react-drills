import React, {Component} from 'react';

class Login extends Component{
    constructor(){
        super()

        this.state = {
            username: "",
            password: ""
        }

        this.handleLogin = this.handleLogin.bind( this );
    }

    handleUsernameChange(name){
        this.setState({ username: name })
    }

    handlePasswordChange(pw){
        this.setState({ password: pw })
    }

    handleLogin(){
        alert(`Username: ${ this.state.username } Password: ${ this.state.password }`)
    }

    render(){
        return(
            <div>
                <input onChange={ (e) => this.handleUsernameChange( e.target.value)} type="text"/>
                <input onChange={ (e) => this.handlePasswordChange( e.target.value)} type="text"/>
                <button onClick={ this.handleLogin }>Login You Turd!</button>

            </div>
        )
    }

}

export default Login;