import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./CadastroBike.css";
import FormInput from "../FormInput";
import axios from "axios";

const CadastroBike = () => {
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
        } else {
            history.push("/cadastro-bike");
        }
    }, []);

    const [values, setValues] = useState({
        numeroDeSerie: "",
        marca: "",
        modelo: "",
        valor: "",
        ano: "",
        cor: ""
    });

    const inputs = [
        {
            id: 1,
            name: "numeroDeSerie",
            type: "text",
            placeholder: "Número de série",
            errorMessage: "Este campo não pode estar em branco!",
            label: "Número de série",
            required: true
        },
        {
            id: 2,
            name: "marca",
            type: "text",
            placeholder: "Marca",
            errorMessage: "Este campo não pode estar em branco!",
            label: "Marca",
            required: true
        },
        {
            id: 3,
            name: "modelo",
            type: "text",
            placeholder: "Modelo",
            errorMessage: "Este campo não pode estar em branco!",
            label: "Modelo",
            required: true
        },
        {
            id: 4,
            name: "valor",
            type: "number",
            placeholder: "R$",
            errorMessage: "Este campo não pode estar em branco!",
            label: "Valor",
            required: true
        },
        {
            id: 5,
            name: "ano",
            type: "number",
            placeholder: "Ano",
            errorMessage: "Este campo não pode estar em branco!",
            label: "Ano",
            required: true
        },
        {
            id: 6,
            name: "cor",
            type: "text",
            placeholder: "Cor",
            errorMessage: "Este campo não pode estar em branco!",
            label: "Cor",
            required: true
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/cadastro-bike2");
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className="cadastro-bike">
            <form onSubmit={handleSubmit}>
                <h1>Cadastrar Bike</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button>Continuar</button>
            </form>
        </div>
    );
};

export default CadastroBike;
