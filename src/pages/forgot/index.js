import React from "react";
import Logo from '../../img/logo.png';

import InputForm from "../../components/inputform";

class ForgotForm extends React.Component {
    render(){
        return(
            <div class="wrapper">
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
                        <p class="login-box-msg"><b>Recuperar senha</b></p>
                        <form action="/login" autoComplete="on" /*method="POST"*/>
                        <div class="input-group mb-3">
                            <InputForm type="text" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email" onChange={(e) => this.handleChange(e)}/>
                            <div class="input-group-append">
                            <div class="input-group-text">
                                <span>
                                    <i class="gg-user"></i>
                                </span>
                            </div>
                            </div>
                        </div>
                        <div class="row justify-content-end">
                            <div class="col-5">
                                <button type="submit" id="submit-btt" class="btn btn-primary btn-block">
                                Enviar
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

export default ForgotForm;