import NavMenu from "components/navmenu";
import SideBar from "components/sidebar";

function ListUsers(){
    return(
        <div class="wrapper">
            <NavMenu/>
            <SideBar/>
            <div class="content-wrapper">
            <div class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1 class="m-0">Lista de Usuários</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListUsers;