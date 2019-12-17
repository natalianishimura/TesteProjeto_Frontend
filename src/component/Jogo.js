import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {usuario} from '../util/usuario';
import {getHistoriaByNivelAndSequencia} from '../util/fases';
import defaultAvatar from '../images/default-avatar.png';
import '../css/Jogo.css'
import UserStatus from './UserStatus';
import axios from 'axios';

const Jogo = () =>{
    const [flagNivel, setFlag] = useState(1);
    const [nivel, setNivel] = useState(1);
    const [sequencia, setSequencia] = useState(1);
    const [usuarioGame, setUsuario] = useState(usuario);
    const {nome, status: {energia, amizade, dinheiro}} = usuarioGame;
    const [NIVEL_MAX, MAX_SITUACOES_NIVEL] = [3,6];
    const isSequenciaExcedida = () => sequencia + 1 === MAX_SITUACOES_NIVEL + 1;

    let historia = getHistoriaByNivelAndSequencia(nivel, sequencia);
    let {historia:situacao} = historia;
    let opcoesMap = historia.opcoes.map(opcao => <div className="game-opt" key={opcao.sequencia} onClick={()=>atualizaHistoria(opcao.sequencia)}>{opcao.resposta}</div>);

    const atualizaHistoria = id => {
        updUsuario(id);
        console.log(sequencia);
        if(nivel === NIVEL_MAX && isSequenciaExcedida()) {
            alert('Você venceu');
            return;
        }
        if(flagNivel === MAX_SITUACOES_NIVEL ) {
            setSequencia(1)
            setNivel(nivel + 1);
            setFlag(1);
            return;
        }

        setSequencia(sequencia + 1);
        setFlag(flagNivel + 1);

          
    }

    const updUsuario = id => {
        let {energia: energiaUpd, amizade: amizadeUpd, dinheiro: dinheiroUpd } = historia.opcoes.find(opcao => opcao.sequencia === id);
        setUsuario({
            ...usuarioGame,
            status: {
                energia: energia + energiaUpd,
                amizade: amizade + amizadeUpd,
                dinheiro: dinheiro + dinheiroUpd
            }
        });
        console.log(usuarioGame);
    }
    return(
        <div className="game-container">
            <h3> Jogo Demo </h3>
            <div className="game-area">
                <div className="user-info">
                    <div style={{backgroundImage:`url(${defaultAvatar})`}} className="avatar-img"></div>
                    <p className="user-name">{nome}</p>
                </div>
                <div className="head-game">
                    <h3>Nível: {nivel}</h3>
                </div>
                <div className="btn-sair">
                    <Link to="/logout">Sair</Link>
                </div>
                <div className="game-content">
                    <div><h3>{situacao}</h3></div>
                    <div className="game-options">
                        {opcoesMap}
                    </div>
                </div>
                <UserStatus energia={energia} amizade={amizade} dinheiro={dinheiro} />
            </div>
        </div>
    )
}

export default Jogo;