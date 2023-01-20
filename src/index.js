/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//

function InputForm(props) {  
  return (
    <input type={props.type} class="form-control" pattern={props.pattern} minLength={props.minLength} maxLength={props.maxLength} required
      placeholder={props.placeholder} onChange={props.onChange}/>
  );
}

//

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      email: null,
      cpf: null,
      senha: null,
      conf_senha: null,
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, campo) {
    this.setState({[campo]: event.target.value});
  }

  handleSubmit(event) {
    alert(
        this.state.nome + "\n" + 
        this.state.email + "\n" + 
        this.state.cpf + "\n" + 
        this.state.senha + "\n" + 
        this.state.conf_senha 
      );
      
    
  }

  validConfSenha(){

  }

  render() {
    return (
      <div className="app">
        <div class="register-box" id="form">
          <div class="card card-outline card-primary">
            <div class="card-header text-center">
              <a href="###" class="h1">
                <img id="logo" src="icon.png" alt="LOGO" width="30%"/>
              </a>
              <div>
                <h3>Auditoria FP</h3>
              </div>
            </div>
            <div class="card-body">
              <p class="login-box-msg"><b>Cadastrar novo usuário</b></p>
              <form action="" method="" onSubmit={this.handleSubmit}>
                <div class="input-group mb-3">
                  <InputForm type="text" placeholder="Nome completo" onChange={(e) => this.handleChange(e, "name")}/>
                  <div class="input-group-append">
                    <div class="input-group-text">
                        <span>
                            <i class="gg-user"></i>
                        </span>
                    </div>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <InputForm type="email" placeholder="exemplo@mail.com" onChange={(e) => this.handleChange(e, "email")}/>
                  <div class="input-group-append">
                    <div class="input-group-text">
                        <span>
                            <i class="gg-mail"></i>
                        </span>
                    </div>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <InputForm type="text" placeholder="xxx.xxx.xxx-xx" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" minLength="14" maxLength="14" onChange={(e) => this.handleChange(e, "name")}/>
                  <div class="input-group-append">
                    <div class="input-group-text">
                        <span>
                            <i class="gg-info"></i>
                        </span>
                    </div>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <InputForm type="password" placeholder="Senha" onChange={(e) => this.handleChange(e, "password")}/>
                  <input type="password" class="form-control" name="senha" minLength="8" required placeholder="Senha"/>
                  <div class="input-group-append">
                    <div class="input-group-text">
                        <span>
                            <i class="gg-lock"></i>
                        </span>
                    </div>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <input type="password" class="form-control" name="confSenha" minLength="8" required placeholder="Confirme senha" onChange={this.validConfSenha}/>
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
                      <button type="submit" class="btn btn-primary btn-block">
                        Register
                      </button>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="col-10 float-right">
                      <a href="###" class="btn btn-default btn-block">
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
