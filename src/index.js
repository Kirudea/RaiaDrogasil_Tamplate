import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <form action="" method="POST">
                    <input name="nome" type="text"/><br/>
                    <input name="email" type="email"/><br/>
                    <input name="senha" type="password"/><br/>
                    <input name="conf_senha" type="password"/><br/>
                    <input name="cpf" type="number"/><br/><br/>

                    <input type="submit" value="Cadastrar"/>
                </form>

                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Cadastro de usuário</h3>
                    </div>
                    <form>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputFile">File input</label>
                                <div class="input-group">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="exampleInputFile"/>
                                        <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                                    </div>
                                    <div class="input-group-append">
                                        <span class="input-group-text">Upload</span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

//

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
