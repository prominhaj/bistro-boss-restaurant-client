import React from 'react';
import errorImg from '../../assets/404.gif';

const Error = () => {
    return (
        <div className='container mx-auto flex items-center justify-center'>
           <img src={errorImg} alt="" />
        </div>
    );
};

export default Error;