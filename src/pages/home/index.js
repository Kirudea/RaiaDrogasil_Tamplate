import NavMenu from "../../components/navmenu";
import SideBar from "../../components/sidebar";
function Home(){
    return(
        <div class="wrapper">
            <NavMenu/>
            <SideBar/>
            <div class="content-wrapper">
                <h1>HOME - GRÁFICOS</h1>
            </div>
        </div>
    );
}

export default Home;