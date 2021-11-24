import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {Link, Route} from "react-router-dom";
import Menu from './Menu';
export default class Logowanie extends React.Component{

    state={
        login: null,
        haslo: null,
    }

    login=(e)=>{
        this.setState({
            login: e.target.value
        })
    }

    haslo=(e)=>{
        this.setState({
            haslo: e.target.value
        })
    }

    zaloguj=(e)=>{
        if((this.state.login === null)&&(this.state.haslo === null)) {
            alert('zle dane logowania');
        } else {
            localStorage.setItem('login-haslo', this.state.login + '-' + this.state.haslo);
            if (localStorage.getItem('login-haslo') === 'admin-admin') {
                <Link to={'/Menu'}/>
                window.location.reload();
            } else {
                alert('zle dane logowania');
            }
        }
    }

    wcisnietyklawisz = (e: any) => {
        if (e.key === 'Enter') {
            this.zaloguj(e);
        }
    };

    render() {
        return(
            <div class={'tlologowanie'}>
                <div class={'okienkologowanie'}>
                    <p id={"przywitanie"}>Witamy w Top Foods!</p>
                    <div class={'login'}>
                        <label>Login:</label><br/>
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <input type={'text'} placeholder={"Podaj login"} onChange={this.login} onKeyPress={this.wcisnietyklawisz}/>
                    </div>
                    <div class={'haslo'}>
                        <label>Haslo:</label><br/>
                        <i className="fa fa-lock" aria-hidden="true"></i>
                        <input type={'password'} placeholder={"Podaj hasło"} onChange={this.haslo} onKeyPress={this.wcisnietyklawisz}/>
                    </div>
                    <a onClick={this.zaloguj}><div class={'zaloguj'}>Zaloguj się</div></a>
                </div>
            </div>
        );
    }
}
