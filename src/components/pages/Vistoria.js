import React, { useEffect, useState } from "react";
import "./Vistoria.css";
import Footer from "../Footer";
import { useHistory } from "react-router-dom";
import Entrar from "./Entrar";

const Vistoria = () => {
    const history = useHistory();

    const [auth, setAuth] = useState(false);

    const response = async () => {
        const response = await fetch("https://api-porto-v3is6fj6ha-rj.a.run.app/auth/", {
            method: "GET",
            credentials: "include"
        });

        if (response.status !== 200) {
            // console.log("Não autenticado");
            setAuth(false);
            return;
        }

        // console.log("Autenticado");
        setAuth(true);
        history.push("/vistoria");
    };

    useEffect(() => {
        response();
    }, []);


    return (
        <>
            {auth ?  <div className="container">
            <div className="content">
                <h1>Vistoria</h1>
                <h2>
                    Olá, <strong>Lucas!</strong>
                </h2>
                <p>
                    Ainda não concluímos o resultado de sua vistoria. <br />
                    Caso recusado, restarão mais 2 tentativas e após o limite
                    excedido <br /> será necessário entrar em contato a Porto.
                    Por favor, aguarde por breves atualizações.
                </p>
            </div>
        </div>: <Entrar />}
            <Footer />
        </>
    );
};

export default Vistoria;
