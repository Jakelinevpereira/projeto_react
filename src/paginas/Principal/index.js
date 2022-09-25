import React, { Component } from "react";
import firebase from "firebase";

class Principal extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome:"",
            sobrenome: "",
            data_nascimento: ""
        }
    }

    async componentDidMount(){
        await firebase.auth().onAuthStateChanged(async (usuario)=>{
            if(usuario){
                var uid = usuario.uid;

                    await firebase.firestore().collection("usuario").doc(uid).get().then((retorno)=>{
                        this.setState({   
                            nome: retorno.data().nome,
                            sobrenome: retorno.data().sobrenome,
                            data_nascimento: retorno.data().data_nascimento
                        
                        });
                    });
            }
        });

    }

    render(){
        return(
            <div>
                <h1>Página Principal</h1>
                Nome: { this.state.nome } <br/>
                Sobrenome: { this.state.sobrenome } <br/>
                Data_nascimento: { this.state.data_nascimento } 
            </div>
        )
    }
}

export default Principal;