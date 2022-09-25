import React, { useState, Component } from "react";
import {Link} from 'react-router-dom';
import firebase from '../../Firebase';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      senha: ""
    }

    this.acessar = this.acessar.bind(this);

  }

  async acessar(){
      await (await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)).then(() =>{
            window.location.href = "./principal";
      })
      .catch((erro) =>{

      });

  }

    render(){
        return(
          <div>
              <h1>Login</h1>
              <input type="text" placeholder="Email" Onchange={(e) => this.setState({email: e.target.value})} />
              <br/>
              <input type="password" placeholder="Senha" Onchange={(e) => this.setState({senha: e.target.value})} />
              <br/>
              <Link to="/Cadastro"><button onClick={this.listar}>Ir para cadastro</button></Link>
          </div>
        )
    }
}
export default Login;