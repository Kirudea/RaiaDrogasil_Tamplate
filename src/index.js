import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function InputForm(props) {  
    return (
      <input type={props.type} name={props.name} id={props.id} class="form-control" pattern={props.pattern} minLength={props.minLength} maxLength={props.maxLength} required
        placeholder={props.placeholder} onChange={props.onChange}/>
    );
  }

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            login: null,
            senha: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();

        if(this.state.login === "kildere@gmail.com" & this.state.senha === "kildere123  ")
            alert("LOGOU!");
        else{
            alert("Informe login e senha corretos!");
        }
    }

    render(){
        return(
            <div class="wrapper">
                <div class="register-box" id="form">
                    <div class="card card-outline card-primary">
                    <div class="card-header text-center">
                        <a href="/" class="h1">
                            <img id="logo" src="img/logo.png" alt="LOGO" width="30%"/>
                        </a>
                        <div>
                            <h3>Auditoria FP</h3>
                        </div>
                    </div>
                    <div class="card-body">
                        <form action="/" onSubmit={(e) => this.handleSubmit(e)} autoComplete="on" /*method="POST"*/>
                        <div class="input-group mb-3">
                            <InputForm type="text" name="login" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Login" onChange={(e) => this.handleChange(e)}/>
                            <div class="input-group-append">
                            <div class="input-group-text">
                                <span>
                                    <i class="gg-user"></i>
                                </span>
                            </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <InputForm type="password" name="senha" minLength="8" pattern=".{8,}" placeholder="Senha" onChange={(e) => this.handleChange(e)}/>
                            <div class="input-group-append">
                            <div class="input-group-text">
                                <span>
                                    <i class="gg-lock"></i>
                                </span>
                            </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="col-12"  id="forgot">
                                    <a href="#forgot">
                                        Esqueceu a senha?
                                    </a>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="col-10 float-right">
                                    <button type="submit" id="submit-btt" class="btn btn-primary btn-block">
                                    Entrar
                                    </button>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LoginForm/>);