import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Entrar from "./pages/Entrar";

function Navbar() {
    
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [auth, setAuth] = useState(false);
    const [username, setUsername] = useState("");


    const response = async () => {
        const response = await fetch("https://api-porto-v3is6fj6ha-rj.a.run.app/auth/", {
            method: "GET",
            credentials: "include"
        });
    
        if (response.status !== 200) {
            console.log("HEADER Não autenticado");
            setAuth(false);
            return;
        }

        const user = await response.json();
    
        console.log("HEADER Autenticado");
        setAuth(true);
        console.log("HEADER", user.name);
        setUsername(user.name);
        console.log("HEADER", username);
    };
    

    useEffect(() => {
        response();
        console.log("HEADER", response());
    }, []);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link
                        to="/"
                        className="navbar-logo"
                        onClick={closeMobileMenu}
                    >
                        <img src="/images/logo.png" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link
                                to="/cadastro-bike"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Cadastro Bike
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/vistoria"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Minhas Vistorias
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="/dados"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Dados
                            </Link>
                        </li>

                        <li className="nav-bttn">
                            <Link
                                to="/entrar"
                                className="nav-links-mobile"
                                onClick={closeMobileMenu}
                            >
                                Entrar
                            </Link>
                        </li>
                    </ul>
                    {button && (
                        <Button buttonStyle="btn--outline">
                        {auth ? "Olá, " + <strong>{username}!</strong> : "Entrar"}
                        </Button>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
