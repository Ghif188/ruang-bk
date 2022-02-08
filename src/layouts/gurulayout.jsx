import React from "react";
import Bg from "../assets/bg-dashguru.png"
import Bgm from "../assets/bglogin2.png"
import Profile from "../pages/guru/dashboard";
import { useNavigate } from "react-router-dom";

export default function GuruLayout({ children }) {
    const navigate = useNavigate();
    const [show, setShow] = React.useState(true);
    const [show1, setShow1] = React.useState(false);
    const handleShow = () => {
        setShow(true);
        setShow1(false);
    };
    const handleShow2 = () => {
        setShow(false);
        setShow1(true);
    };
    return (
        <React.Fragment>
            <div className="h-screen w-screen">
                <div className=" bg-gradient-to-r h-16 flex from-sky-500 to-sky-700 w-full">
                    <div className="w-full absolute h-16 m-0 flex justify-center">
                        <div className={show === true ? "p-3 bg-sky-500 border-b-4 border-hijau" : "p-3"}
                            onClick={() => {
                                handleShow();
                                navigate("/dash-guru/murid");
                            }}
                        >Murid</div>
                        <div
                            className={show1 === true ? "p-3 bg-sky-500 border-b-4 border-hijau" : "p-3"}
                            onClick={() => {
                                handleShow2();
                                navigate("/dash-guru/angket");
                            }}>
                            Buat Angket
                        </div>
                    </div>
                </div>
                <div className="w-screen h-screen flex">
                    <div className="flex absolute w-screen h-screen justify-center">
                        <div className="bg-white w-8/10 shadow-lg">
                            a
                            {children}
                        </div>
                    </div>
                    <img src={Bgm} alt=""  className="w-screen h-screen"/>
                </div>
            </div>
        </React.Fragment>
    );
}
