import React from "react";
import Logo from "img/logo.png"
import "./index.css";

import NavMenu from "components/navmenu";
import SideBar from "components/sidebar";
import InputForm from "components/inputform";

function FormatCPF(cpf) {
  cpf = cpf.substring(0, 14).replace(/[^0-9]/gi, "")
  
  if(cpf.length > 3)
    cpf = cpf.substring(0, 3)+"."+cpf.substring(3);
  if(cpf.length > 7)
    cpf = cpf.substring(0, 7)+"."+cpf.substring(7);
  if(cpf.length > 11)
    cpf = cpf.substring(0, 11)+"-"+cpf.substring(11);

  return cpf;
}

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: null,
      email: null,
      cpf: null,
      senha: "",
      conf_senha: "",
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setInvalidCSS(componenteId, invalido){
    document.getElementById(componenteId).className = "form-control "+(invalido?"invalid_border":"valid_border");
    return;
    //AdminLTE 3
    //document.getElementById(componenteId).className = "form-control "+(invalido?"is-invalid":"is-valid");
  }

  cleanForm(){
    Object.keys(this.state).forEach(key => {
      document.getElementById(key).value = "";
      document.getElementById(key).className = "form-control";
    });
  }

  handleChange(event) {
    switch(event.target.name) {
      case "nome": 
        event.target.value = event.target.value.trimStart();               
        this.setInvalidCSS(event.target.id, /^$|[^a-zA-Z\s]+/.test(event.target.value));
        break;

      case "email":
        this.setInvalidCSS(event.target.id, !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(event.target.value));  
        break
      
      case "cpf":
        event.target.value = FormatCPF(event.target.value);
        this.setInvalidCSS(event.target.id, !/\d{3}.\d{3}.\d{3}-\d{2}/.test(event.target.value));
        break;

      case "senha":
      case "conf_senha":
        event.target.value = event.target.value.trim();
        var senhas = {senha: this.state.senha, conf_senha: this.state.conf_senha};
        senhas[event.target.name] = event.target.value;
        
        this.setInvalidCSS("senha", senhas["senha"].length < 8);
        this.setInvalidCSS("conf_senha", senhas["conf_senha"].length < 8 | senhas["senha"] !== senhas["conf_senha"]);
        break
        
      default:
    }

    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    if(this.state.senha !== this.state.conf_senha){
      event.preventDefault();
      alert("Senhas digitadas s??o diferentes!");
    }
  }

  render() {
    return (
      <div class="wrapper">
        <NavMenu/>
        <SideBar/>
        <div class="content-wrapper">
          <div class="register-box" id="form">
            <div class="card card-outline card-primary">
              <div class="card-header text-center">
                <a href="/" class="h1">
                  <img id="logo" src={Logo} alt="LOGO" width="30%"/>
                </a>
                <div>
                  <h3>Auditoria FP</h3>
                </div>
              </div>
              <div class="card-body">
                <p class="login-box-msg"><b>Cadastrar novo usu??rio</b></p>
                <form action="#senha" onSubmit={(e) => this.handleSubmit(e)} autoComplete="on" /*method="POST"*/>
                  <div class="input-group mb-3">
                    <InputForm type="text" name="nome" id="nome" pattern="[a-zA-Z\s]+" placeholder="Nome completo" onChange={(e) => this.handleChange(e)}/>
                    <div class="input-group-append">
                      <div class="input-group-text">
                          <span>
                              <i class="gg-user"></i>
                          </span>
                      </div>
                    </div>
                  </div>
                  <div class="input-group mb-3">
                    <InputForm type="text" name="cpf" id="cpf" placeholder="Informe CPF" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" minLength="14" maxLength="14" onChange={(e) => this.handleChange(e)}/>
                    <div class="input-group-append">
                      <div class="input-group-text">
                          <span>
                              <i class="gg-info"></i>
                          </span>
                      </div>
                    </div>
                  </div>
                  <div class="input-group mb-3">
                    <InputForm type="email" name="email" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="exemplo@email.com" onChange={(e) => this.handleChange(e)}/>
                    <div class="input-group-append">
                      <div class="input-group-text">
                          <span>
                              <i class="gg-mail"></i>
                          </span>
                      </div>
                    </div>
                  </div>
                  <div class="input-group mb-3">
                    <InputForm type="password" name="senha" id="senha" minLength="8" pattern=".{8,}" placeholder="Senha" onChange={(e) => this.handleChange(e)}/>
                    <div class="input-group-append">
                      <div class="input-group-text">
                          <span>
                              <i class="gg-lock"></i>
                          </span>
                      </div>
                    </div>
                  </div>
                  <div class="input-group mb-3">
                    <InputForm type="password" name="conf_senha" id="conf_senha" minLength="8" pattern=".{8,}" placeholder="Confirme senha" onChange={(e) => this.handleChange(e)}/>
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
                      <div class="col-10">
                        <button type="submit" id="submit-btt" class="btn btn-primary btn-block">
                          Cadastrar
                        </button>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="col-10 float-right">
                        <a href="#nome" class="btn btn-default btn-block" onClick={() => this.cleanForm()}>
                          Limpar
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserForm;