import "global.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Login from "pages/login"
import ForgotForm from "pages/forgot"
import Home from "pages/home"
import ListUsers from "pages/user/list"
import CreateUser from "pages/user/create"

function App(){
    return(
        //Rotas
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/forgot" element={<ForgotForm/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/usuarios" element={<ListUsers/>}/>
                <Route path="/criarconta" element={<CreateUser/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;