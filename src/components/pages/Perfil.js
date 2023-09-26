import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Perfil.css";
import Footer from "../Footer";
import isAuth from "../isAuth";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Entrar from "./Entrar";

function Perfil() {
    const history = useHistory();
    const [auth, setAuth] = useState(false);
    const [username, setUsername] = useState("");

    const response = async () => {
        const response = await fetch(
            "https://api-porto-v3is6fj6ha-rj.a.run.app/auth/",
            {
                method: "GET",
                credentials: "include"
            }
        );

        if (response.status !== 200) {
            console.log("HEADER Não autenticado");
            setAuth(false);
            return;
        }

        const user = await response.json();

        // console.log("HEADER Autenticado");
        setAuth(true);
        setUsername(user.name);
        history.push("/perfil");
        // console.log("HEADER USERNAME:", username);
    };

    useEffect(() => {
        response();
        // console.log("HEADER", response());
    }, []);

    const perfilPage = (
        <div>
            <div className="capa">
                <div className="foto-perfil"></div>
            </div>
            <div className="nome-usuario">
                Bem-vindo,
                <br />
                <strong>{username}!</strong>
            </div>
            <div className="texto-opcao">O que você deseja fazer?</div>
            <div className="botoes">
                <Link to="/cadastro-bike" className="botao">
                    Cadastrar Bike
                </Link>
                <Link to="/vistoria" className="botao">
                    Verificar Vistoria
                </Link>
                <Link to="/dados" className="botao">
                    Sair
                </Link>
            </div>
        </div>
    );

    return (
        <>
            {auth ? perfilPage : <Entrar />}
            <Footer />
        </>
    );
}

export default Perfil;
