import logo from "../../images/logo.png"
import "./Navbar.css"

export function Navbar () {
    return (
        <nav>
            <div className="input-search-space">
                <i className="bi bi-search"></i>
                <input type="text" placeholder="Pesquise por uma notícia" />
            </div>

            <img src={logo} alt="Logo Breaking News" />

            <button>Entrar</button>
        </nav>

    )
}