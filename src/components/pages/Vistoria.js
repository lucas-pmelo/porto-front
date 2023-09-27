import React, { useEffect, useState } from "react";
import "./Vistoria.css";
import Footer from "../Footer";
import { useHistory } from "react-router-dom";
import Entrar from "./Entrar";

const Vistoria = () => {
    const history = useHistory();

    const [auth, setAuth] = useState(false);
    const [username, setUsername] = useState("");
    const [bikes, setBikes] = useState([]);

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

    const pegarBikes = async () => {
        const response = await fetch(
            "https://api-porto-v3is6fj6ha-rj.a.run.app/bike/",
            {
                method: "GET",
                credentials: "include"
            }
        );

        if (response.status !== 200) {
            console.log("Erro");
            return;
        }

        const bikes = await response.json();
        console.log(bikes);

        setBikes(bikes);
    };

    useEffect(() => {
        response();
    }, []);

    useEffect(() => {
        pegarBikes();
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
                                src="/images/bikedopai.jpeg"
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
                        {bikes.map((bike) => (
                            <div className="card">
                                <img
                                    src="/images/bike-teste4.png"
                                    alt="Bike do usuário"
                                    className="bike"
                                />
                                <h3>{bike.model}</h3>
                                <p>
                                    Status:{" "}
                                    <strong className="ativo">
                                        Seguro Ativo
                                    </strong>
                                </p>
                            </div>
                        ))}
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
