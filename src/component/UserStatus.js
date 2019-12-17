import React from 'react';
import amizadeImg from '../images/Laughing-512.png';
import energiaImg from '../images/heart-512.png';
import dinheiroImg from '../images/cash-512.png';

const UserStatus = ({energia, amizade, dinheiro}) => {
    return (
        <div className="user-status">
            <div>
                <img src={energiaImg} alt="energia" />
                <span>Energia: {energia}</span>
            </div>
            <div>
                <img src={amizadeImg} alt="energia" />
                <span>Amizade: {amizade}</span>
            </div>
            <div>
                <img src={dinheiroImg} alt="energia" />
                <span>Dinheiro: {dinheiro}</span>
            </div>
        </div>
    );
}

export default UserStatus;