import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import CadastroCliente from "./pages/CadastroCliente";
import CalculoFinanceiro from "./pages/CalculoFinanceiro";
import ContaCorrente from "./pages/ContaCorrente";
import SobreNos from "./pages/SobreNos";
import Header from "./components/Header";
function RoutesApp() {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/cadastro" element={<CadastroCliente/>} />
                <Route path="/calculofinanceiro" element={<CalculoFinanceiro/>} />
                <Route path="/contacorrente" element={<ContaCorrente/>} />
                <Route path="/sobrenos" element={<SobreNos/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp;