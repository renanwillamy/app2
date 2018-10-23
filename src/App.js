import React, { Component } from 'react'
import Button from './components/Button';
import TextField from './components/TextField';
import './style/app.css'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hide: false,
            login: '',
            password: '',
            logged: false
        }
        this.toggleText = this.toggleText.bind(this)
        this.onChangeLogin = this.onChangeLogin.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.makeLogin = this.makeLogin.bind(this)
    }

    onChangeLogin(e) {
        this.setState({
            login: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    toggleText() {
        this.setState({
            hide: !this.state.hide
        })
    }

    makeLogin() {
        if (this.state.password === 'root') {
            this.setState({                
                logged: true
            })
            alert('Logged!')
        }else{
            alert('Wrong password or login')
        }
    }

    render() {
        const {login, password, logged} = this.state
        return (
            <div className={'content'} >
                <div className={'login-block'} hidden={logged}>
                    <h2>Login</h2>
                    <TextField value={login} onChange={this.onChangeLogin} type={'text'} />
                    <br />
                    <TextField value={password} onChange={this.onChangePassword} type={'password'} />
                    <br />
                    <Button title={'Enter'} handleClick={this.makeLogin} />
                </div>
                <div className={'content'} hidden={!logged}>
                    <h1>Welcome {login}!</h1>
                </div>
            </div>
        );
    }
}

export default App;