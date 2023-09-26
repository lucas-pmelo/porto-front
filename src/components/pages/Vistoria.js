import React from "react";
import "./Vistoria.css";
import Footer from "../Footer";

const Vistoria = () => {
    return (
        <div className="container">
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
        </div>
    );
};

const App = () => {
    return (
        <>
            <Vistoria />
            <Footer />
        </>
    );
};

export default App;
