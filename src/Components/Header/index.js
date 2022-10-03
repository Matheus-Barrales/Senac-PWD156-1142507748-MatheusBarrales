import { Link } from "react-router-dom"
import './style.css';
function Header() {
    return (
        <header>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cadastro">Cadastro</Link></li>
                        <li><Link to="/calculofinanceiro">Calculo Financeiro</Link></li>
                        <li><Link to="/contacorrente">Conta Corrente</Link></li>
                        <li><Link to="/sobrenos">Sobre Nós</Link></li>
                    </ul>
        </header >
    )
}
export default Header;