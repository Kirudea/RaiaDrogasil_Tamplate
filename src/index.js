import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//

class App extends React.Component {
    render() {
        return (
            <form action="/" method="POST">
                <input name="nome" type="text"/><br/>
                <input name="email" type="email"/><br/>
                <input name="senha" type="password"/><br/>
                <input name="conf_senha" type="password"/><br/>
                <input name="cpf" type="number"/><br/><br/>

                <input type="submit" value="Cadastrar"/>
            </form>
        );
    }
}

//

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
