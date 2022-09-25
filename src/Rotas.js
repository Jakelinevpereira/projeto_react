import Login from './paginas/Login';
import Cadastro from './paginas/Cadastro';
import Principal from './paginas/Principal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/login" element={<Login/>} />
                <Route exact={true} path="/cadastro" element={<Cadastro/>} />
                <Route exact={true} path="/principal" element={<Principal/>} />

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
