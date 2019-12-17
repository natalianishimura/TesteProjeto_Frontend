// import React, { useEffect, useState, PureComponent } from 'react';
// import {withRouter} from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import '../css/Forms.css'
// import {
//   Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
// } from 'recharts';

// const Estatistica = () => {
// 	const data = [
// 	  {
// 	    subject: 'Experiência', A: 120, B: 110, fullMark: 150,
// 	  },
// 	  {
// 	    subject: 'Vida', A: 98, B: 130, fullMark: 150,
// 	  },
// 	  {
// 	    subject: 'Dinheiro', A: 86, B: 130, fullMark: 150,
// 	  },
// 	];
// }

// export default class Example extends PureComponent {
//   portal = (({ onClose }) => (
// 		  <Modal disableOverlayClick onClose={onClose}>
// 		  	<Modal.Header>
// 		  		<Modal.Title>
// 		  			Estatística do Usuário
// 		  		</Modal.Title>
// 		  	</Modal.Header>
// 		  	<Modal.Body>
// 				    return (
// 				      <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
// 				        <PolarGrid />
// 				        <PolarAngleAxis dataKey="estatisticas" />
// 				        <PolarRadiusAxis />
// 				        <Radar name="user" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
// 				      </RadarChart>
// 				    );
// 			 </Modal.Body>
// 			 <Modal.Footer>
//              	<Button onClick={onClose}>
//                  	Close
//                 </Button>                
//               </Modal.Footer>
// 			</Modal>
//   ));
// }