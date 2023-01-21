import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//

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

//

function InputForm(props) {  
  return (
    <input type={props.type} id={props.id} class="form-control" pattern={props.pattern} minLength={props.minLength} maxLength={props.maxLength} required
      placeholder={props.placeholder} onChange={props.onChange}/>
  );
}

//

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

  validarSenhas(novoValor, campo) {
    var validConfSenha= "valid";
    var disabled = false;
    
    document.getElementById(campo).className = "form-control is-"+(novoValor.length >= 8?"":"in")+"valid";
 
    if(novoValor !== this.state.senha & novoValor !== this.state.conf_senha)
      validConfSenha = "invalid";
      
    document.getElementById("conf_senha").className = "form-control is-"+validConfSenha;
    document.getElementById("submit-btt").disabled = disabled;
  }

  handleChange(event, campo) {
    if(campo === "cpf")
    event.target.value = FormatCPF(event.target.value);
    
    this.setState({[campo]: event.target.value});
  
    if(campo === "senha" | campo === "conf_senha")
      this.validarSenhas(event.target.value, campo);
  }

  handleSubmit(event) {
    alert(
        this.state.nome + "\n" + 
        this.state.email + "\n" + 
        this.state.cpf + "\n" + 
        this.state.senha + "\n" + 
        this.state.conf_senha 
      );

      //state é o JSON!
      //Email existente?
      //CPF existente? OU deixa pro back?

  }

  render() {
    return (
      <div class="content-wrapper">
        <div class="register-box" id="form">
          <div class="card card-outline card-primary">
            <div class="card-header text-center">
              <a href="/" class="h1">
                <img id="logo" src="img/icon.png" alt="LOGO" width="30%"/>
              </a>
              <div>
                <h3>Auditoria FP</h3>
              </div>
            </div>
            <div class="card-body">
              <p class="login-box-msg"><b>Cadastrar novo usuário</b></p>
              <form onSubmit={this.handleSubmit}>
                <div class="input-group mb-3">
                  <InputForm type="text" placeholder="Nome completo" onChange={(e) => this.handleChange(e, "nome")}/>
                  <div class="input-group-append">
                    <div class="input-group-text">
                        <span>
                            <i class="gg-user"></i>
                        </span>
                    </div>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <InputForm type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="exemplo@mail.com" onChange={(e) => this.handleChange(e, "email")}/>
                  <div class="input-group-append">
                    <div class="input-group-text">
                        <span>
                            <i class="gg-mail"></i>
                        </span>
                    </div>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <InputForm type="text" placeholder="Informe CPF" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" minLength="14" maxLength="14" onChange={(e) => this.handleChange(e, "cpf")}/>
                  <div class="input-group-append">
                    <div class="input-group-text">
                        <span>
                            <i class="gg-info"></i>
                        </span>
                    </div>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <InputForm type="password" id="senha" placeholder="Senha" minLength="8" onChange={(e) => this.handleChange(e, "senha")}/>
                </div>
                <div class="input-group mb-3">
                <InputForm type="password" id="conf_senha" placeholder="Confirme senha" minLength="8" onChange={(e) => this.handleChange(e, "conf_senha")}/>
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

//

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<UserForm />);
