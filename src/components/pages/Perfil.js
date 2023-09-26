import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Perfil.css";
import Footer from "../Footer";
import isAuth from "../isAuth";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Perfil() {
    const history = useHistory();
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        axios
            .get("https://api-porto-v3is6fj6ha-rj.a.run.app/auth/", {
                withCredentials: true
            })
            .then((response) => {
                console.log(response.data);
                if (response.status !== 200) {
                    setAuth(false);
                } else {
                    setAuth(true);
                }

                return auth;
            });

        if (!auth) {
            history.push("/entrar");
        }
    }, []);

    return (
        <div>
            <div className="capa">
                <div className="foto-perfil"></div>
            </div>
            <div className="nome-usuario">
                Bem-vindo,
                <br />
                <strong>Lucas!</strong>
            </div>
            <div className="texto-opcao">O que você deseja fazer?</div>
            <div className="botoes">
                <Link to="/cadastro-bike" className="botao">
                    Cadastrar Bike
                </Link>
                <Link to="/vistoria" className="botao">
                    Verificar Vistoria
                </Link>
                <Link to="/" className="botao">
                    Sair
                </Link>
            </div>
            <Footer />
        </div>
    );
}

export default Perfil;
