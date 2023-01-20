import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//

class UserForm extends React.Component {
  render() {
    return (
      <div className="app">
        <section _ngcontent-c1="" id="login_content">
		<h1 _ngcontent-c1="" class="login-title">
			Auditoria FP
		</h1>
		<div _ngcontent-c1="" class="login-body">
			<form _ngcontent-c1="" action="" class="form-horizontal ng-untouched ng-pristine ng-valid" novalidate="">
				<a _ngcontent-c1="" class="forgot-pass float-right" href="javascript:void(0)">Esqueceu a senha ?</a>
				<button _ngcontent-c1="" class="btn btn-info btn-block m-t-40" type="submit">Entrar</button>
			</form>
		</div>
	</section>
      </div>
    );
  }
}

//

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<UserForm />);
