import NavMenu from "../../components/navmenu";
import SideBar from "../../components/sidebar";

function ListUsers(){
    return(
        <div class="wrapper">
            <NavMenu/>
            <SideBar/>
            <div class="content-wrapper">
                <h1>Lista de Usuários</h1>
            </div>
        </div>
    );
}

export default ListUsers;