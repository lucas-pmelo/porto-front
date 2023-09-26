import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CadastroBike from "./components/pages/CadastroBike";
import CadastroBike2 from "./components/pages/CadastroBike2";
import Vistoria from "./components/pages/Vistoria";
import Entrar from "./components/pages/Entrar";
import CriarConta from "./components/pages/CriarConta";
import Perfil from "./components/pages/Perfil";
import Dados from "./components/Dados";
import isAuth from "./components/isAuth";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Route>
                    <Route path="/" exact component={Home} />
                    <Route path="/cadastro-bike" component={CadastroBike} />
                    <Route path="/cadastro-bike2" component={CadastroBike2} />
                    <Route path="/vistoria" component={Vistoria} />
                    <Route path="/entrar" component={Entrar} />
                    <Route path="/criar-conta" component={CriarConta} />
                    <Route path="/perfil" component={Perfil} />
                    <Route path="/dados" component={Dados} />
                </Route>
            </Router>
        </>
    );
}

export default App;
