import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Entrar.css";
import FormInput from "../FormInput";
import Home from "./Home";

const Entrar = () => {
    const history = useHistory();

    const [values, setValues] = useState({
        email: "",
        senha: ""
    });

    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "Insira um endereço de email válido!",
            label: "Email",
            required: true
        },
        {
            id: 2,
            name: "senha",
            type: "password",
            placeholder: "Senha",
            errorMessage:
                "Sua senha deve conter entre 8-20 caracteres e incluir pelo menos 1 letra, 1 número e 1 caractere especial!",
            label: "Senha",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true
        }
    ];

    const login = async () => {
        await fetch("https://api-porto-v3is6fj6ha-rj.a.run.app/auth/login", {
            method: "POST",
            credentials: "include",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: values.email,
                password: values.senha
            })
        });
        if (auth()) {
            // console.log("Autenticado");
            return history.push("/");
        }
    };

    const auth = async () => {
        await fetch("https://api-porto-v3is6fj6ha-rj.a.run.app/auth/", {
            method: "GET",
            credentials: "include"
        }).then((response) => {
            // console.log(response.data);
        });

        return auth;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className="entrar">
            <form onSubmit={handleSubmit}>
                <h1>Entrar</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <p>
                    Não tem uma conta? Crie <Link to="/criar-conta">aqui!</Link>
                </p>
                <button className="button-entrar" onClick={login}>
                    Entrar
                </button>
            </form>
        </div>
    );
};

export default Entrar;
