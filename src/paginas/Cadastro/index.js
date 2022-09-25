import { Link } from 'react-router-dom';
//import "../../estilo.css";
import React, { Component } from 'react';
import firebase from '../../Firebase';

class Cadastro extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            senha: "",
            nome:"",
            sobrenome: "",
            data_nascimento: ""
        }

        this.gravar = this.gravar.bind(this);
    }

    gravar(){
        firebase.firestore().collection("usuario").add({
            email: this.state.email,
            senha: this.state.senha,
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            data_nascimento: this.state.data_nascimento
        });
    }

    /*async gravar(){
        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha, this.state.nome, this.state.sobrenome, this.state.data_nascimento).then( async (retorno) =>{
            await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
                email: this.state.email,
                senha: this.state.senha,
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                data_nascimento: this.state.data_nascimento
            });
        });
    }*/

    render(){
        return(
            <div>
                <h1>Página de Cadastro</h1>
                    <input type="text" placeholder="Email" onChange={(e) => this.setState({email: e.target.value})} />
                    <br/>
                    <input type="password" placeholder="Senha" id="showPassword" value="show" onChange={(e) => this.setState({senha: e.target.value})} />
                    <br/>
                    <input type="text" placeholder="Nome" onChange={(e) => this.setState({nome: e.target.value})} />
                    <br/>
                    <input type="text" placeholder="Sobrenome" onChange={(e) => this.setState({sobrenome: e.target.value})} />
                    <br/>
                    <input type="text" placeholder="Data_Nascimento" onChange={(e) => this.setState({data_nascimento: e.target.value})} />
                    <br/>
                 <Link to="/Principal"><button onClick={this.gravar}>Gravar</button></Link>
                
            </div>
        )    
    }
}

export default Cadastro;