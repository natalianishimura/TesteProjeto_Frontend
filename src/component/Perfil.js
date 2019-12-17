// import React, { useEffect, useState } from 'react';
// import {withRouter} from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import '../css/Forms.css'
// import Avatar from "../imagens/avatar.png";

// const Perfil = () => {
// 	const handleChange = e => {
//         setUsuario({
//             ...usuario,
//             [e.target.name]: e.target.value
//         });
//     }
// 	const handleSubmit = e =>{
//         try{
//             e.preventDefault();
//             nullKeyValidator(usuario);
//             let userAtualizar = {nome: usuario.nome}
//             saveUser(userAtualizar)
//             .then(({data}) =>{
//                 console.log(data);
//             })
//             .catch(error =>{
//                 console.log(error);
//                 setMensagemErro(error.message);
//             })
//         }catch(e){
//             setMensagemErro(e.message);
//         }        
//     }
	
//     portal(({ onClose }) => (
//         <Modal disableOverlayClick onClose={onClose}>
//         	<Modal.Header>
//         		<Modal.Title>
//         			Perfil do Usuário
//         		</Modal.Title>
//         	</Modal.Header>
//             <Modal.Body>
//             	<FormGroup method="POST" onSubmit={handleSubmit}>
//             		<img src={Avatar} alt="Avatar user" />
//             		<Label>Nome</Label>
//             		<Input type="text" name="nome" placeholder="Seu user..." onChange={handleChange} />
//             		<span className="erro">{mensagemErro}</span>
//                     <input type="submit" name="enviar" value="Atualizar"/>
//             	</FormGroup>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button onClick={onClose}>
//                     Close
//                 </Button>                
//             </Modal.Footer>
//         </Modal>
//     ));
// };

// <Button btnStyle="primary" onClick={Perfil}>
//     Perfil
// </Button>

// export default Perfil;