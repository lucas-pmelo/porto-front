import React, { useEffect, useState } from "react";
import "./Vistoria.css";
import Footer from "../Footer";
import { useHistory } from "react-router-dom";
import Entrar from "./Entrar";

const Vistoria = () => {
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
            // console.log("Não autenticado");
            setAuth(false);
            return;
        }
        const user = await response.json();
        setUsername(user.name);

        // console.log("Autenticado");
        setAuth(true);
        history.push("/vistoria");
    };

    useEffect(() => {
        response();
    }, []);

    return (
        <>
            {auth ? (
                <div className="container">
                    <div className="content">
                        <h1>Vistoria</h1>
                        <h2>
                            Olá, <strong>{username}!</strong>
                        </h2>
                        <p>
                            Caso alguma vistoria seja recusada, restarão mais 2
                            tentativas! <br /> Se o limite for excedido, será
                            recomendado que entre em contato com um atendente
                            Porto.
                        </p>
                        <div className="card">
                            <img
                                src="/images/bikeusada.jpeg"
                                alt="Bike do usuário"
                                className="bike"
                            />
                            <h3>Bike Caloi</h3>
                            <p>
                                Status:{" "}
                                <strong className="ativo">Seguro Ativo</strong>
                            </p>
                        </div>
                        <div className="card">
                            <img
                                src="/images/bicicletaacabada.jpg"
                                alt="Bike do usuário"
                                className="bike"
                            />
                            <h3>Bike Destruída</h3>
                            <p>
                                Status:{" "}
                                <strong className="recusado">
                                    Recusado <br /> 3/3 tentativas
                                </strong>
                            </p>
                        </div>
                        <div className="card">
                            <img
                                src="/images/bikedopai.jpeg"
                                alt="Bike do usuário"
                                className="bike"
                            />
                            <h3>Bike Do Pai</h3>
                            <p>
                                Status:{" "}
                                <strong className="andamento">
                                    Em Andamento...
                                    <br /> 1/3 tentativas
                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <Entrar />
            )}
            <Footer />
        </>
    );
};

export default Vistoria;
