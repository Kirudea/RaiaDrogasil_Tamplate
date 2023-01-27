function NavMenu(){
    return (
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="#sidebar" id="sidebar-btt" class="nav-link" role="button">
                        <i class="gg-menu"/>
                    </a>
                </li>
                <li>
                    <a class="nav-link" href="/">
                        Home
                    </a>
                </li>
                <li>
                    <a class="nav-link" href="/usuarios">
                        Usuários
                    </a>
                </li>
                <li>
                    <a class="nav-link" href="/criarconta">
                        Novo Usuário
                    </a>
                </li>
                <li>
                    <a class="nav-link" href="/login">
                        <b>Sair</b>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavMenu;