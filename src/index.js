//NOVO
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function InputForm(props) {  
  return (
    <input type={props.type} name={props.name} id={props.id} class="form-control" pattern={props.pattern} minLength={props.minLength} maxLength={props.maxLength} required
      placeholder={props.placeholder} onChange={props.onChange}/>
  );
}

function FormatCPF(cpf) {
    var accept_chars = /[^0-9]/gi; //Somente nums
    cpf = cpf.replace(accept_chars, "");
    
    if(cpf.length > 3){
      cpf = cpf.substring(0, 3)+"."+cpf.substring(3);
    }
    if(cpf.length > 7){
      cpf = cpf.substring(0, 7)+"."+cpf.substring(7);
    }
    if(cpf.length > 11){
      cpf = cpf.substring(0, 11)+"-"+cpf.substring(11);
    }

    return cpf;
}

function ValidarEmail(email){
  var resp = "";
  email = email.split("@");

  if(email.length === 2){
    if(email[0].length > 0 & email[1].length > 0){
      email = email[1].split(".");

      if(email.length > 1){
        if(email[0].length > 0 & (email[1].length === 2 | email[1].length === 3)){
         return null;
        }else
          resp = "O email deve conter ao menos 1 caractere antes e 2 ou 3 depois do \".\".";
      }else
        resp = "O email deve conter ao menos um \".\" após o \"@\".";
    }else
      resp = "O email deve conter algo antes e depois do \"@\".";
  }else
    resp = "O email deve conter um \"@\".";
  
  return resp;
}

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: null,
      email: null,
      cpf: null,
      senha: null,
      conf_senha: null,
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setInvalidCSS(componenteId, invalido){
    document.getElementById(componenteId).className = "form-control is-"+(invalido?"in":"")+"valid";
  }

  handleChange(event) {
    switch(event.target.name) {
      case "nome":
        event.target.value = event.target.value.trimStart();
        this.setInvalidCSS(event.target.id, event.target.value === "" | event.target.value == null);
        break;
      
      case "cpf":
        event.target.value = FormatCPF(event.target.value);
        this.setInvalidCSS(event.target.id, event.target.value.length !== 14);
        break;
      
      case "email":
        this.setInvalidCSS(event.target.id, ValidarEmail(event.target.value) !== null);  
        break

      case "senha":
      case "conf_senha":
        event.target.value = event.target.value.trim();
        this.setInvalidCSS(event.target.id, event.target.value.length < 8);
        this.setInvalidCSS("conf_senha", event.target.value !== this.state.senha & event.target.value !== this.state.conf_senha);
        break
        
      default:
    }

    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit() {
    //state em JSON
    var json = {};
    for(const [key, value] of Object.entries(this.state)) {
      json["\""+key+"\""] = value.trim();
    }

    console.log(json);
    
    alert("Usuário , "+this.state.nome+", criado com sucesso!")
    alert("Erro ao criar conta!")
  }

  render() {
    return (
      <div class="content-wrapper">
        <div class="register-box" id="form">
          <div class="card card-outline card-primary">
            <div class="card-header text-center">
              <a href="/" class="h1">
                <img id="logo" src="icon.png" alt="LOGO" width="30%"/>
              </a>
              <div>
                <h3>Auditoria FP</h3>
              </div>
            </div>
            <div class="card-body">
              <p class="login-box-msg"><b>Cadastrar novo usuário</b></p>
              <form onSubmit={this.handleSubmit} autoComplete="on" /*method="POST"*/>
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
                  <InputForm type="email" name="email" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="meu@email.com" onChange={(e) => this.handleChange(e)}/>
                  <div class="input-group-append">
                    <div class="input-group-text">
                        <span>
                            <i class="gg-mail"></i>
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
                      <a href="/" class="btn btn-default btn-block">
                        Cancelar
                      </a>
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
root.render(<UserForm />);
