import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ElementosDeAcesso.css';
const ElementosDeAcesso = () => {
    return(
        <div className="access-content">
            <Link to="/login">Login</Link>
            <Link to="/cadastro">Cadastro</Link>
            {/* <Link to="/perfil">Perfil</Link>
            <Link to="/estatistica">Estatistica</Link> */}
        </div>
    );  
};

export default ElementosDeAcesso;
