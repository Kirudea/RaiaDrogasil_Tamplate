import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//

class UserForm extends React.Component {
  render() {
    return (
      <div className="app">
        <div class="register-box" id="form">
          <div class="card card-outline card-primary">
            <div class="card-header text-center">
              <a href="" class="h1">
                <b>LOGO</b>
              </a>
            </div>
            <div class="card-body">
              <p class="login-box-msg">Cadastrar novo usuário</p>
              <form action="" method="">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" required placeholder="Nome completo"/>
                  <div class="input-group-append">
                    <div class="input-group-text">
                        <span>
                            <i class="gg-user"></i>
                        </span>
                    </div>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <input type="email" class="form-control" required placeholder="exemplo@mail.com"/>
                  <div class="input-group-append">
                    <div class="input-group-text">
                        <span>
                            <i class="gg-mail"></i>
                        </span>
                    </div>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" minLength="14" maxLength="14" pro required placeholder="xxx.xxx.xxx-xx"/>
                  <div class="input-group-append">
                    <div class="input-group-text">
                        <span>
                            <i class="gg-info"></i>
                        </span>
                    </div>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <input type="password" class="form-control" minLength="8" required placeholder="Senha"/>
                  <div class="input-group-append">
                    <div class="input-group-text">
                        <span>
                            <i class="gg-lock"></i>
                        </span>
                    </div>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <input type="password" class="form-control" minLength="8" required placeholder="Confirme senha"/>
                  <div class="input-group-append">
                    <div class="input-group-text">
                        <span>
                            <i class="gg-lock"></i>
                        </span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-4">
                    <button type="submit" class="btn btn-primary btn-block">
                      Register
                    </button>
                  </div>
                  <div class="col-8">
                    <button type="submit" class="btn btn-default float-right">
                      Cancelar
                    </button>
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
