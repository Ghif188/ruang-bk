import React from 'react';
import Bg from '../assets/bg.png';

const Register = () =>{
    return(
        <React.Fragment>
            <div className="flex h-screen w-screen">
                <div className="w-6/10 h-full">
                    <img src={Bg} alt="Background" className="h-full w-full"/>
                </div>
                <div className="w-4/10 h-full">

                </div>
            </div>
        </React.Fragment>
    )
}

export default Register;