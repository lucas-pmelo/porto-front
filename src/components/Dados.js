import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home";

const Dados = () => {
    const [data, setData] = useState([]);

    const URL = "https://api-porto-v3is6fj6ha-rj.a.run.app/auth/login";

    const makeLogin = async () => {
        axios
            .post(
                URL,
                {
                    email: "email@email.com",
                    password: "123"
                },
                { withCredentials: true }
            )
            .then((response) => console.log(response.data));
    };

    const auth = async () => {
        axios
            .get("https://api-porto-v3is6fj6ha-rj.a.run.app/auth/", {
                withCredentials: true
            })
            .then((response) => console.log(response.data));
    };

    const logoff = async () => {
        const response = await fetch(
            `https://api-porto-v3is6fj6ha-rj.a.run.app/auth/logout`,
            {
                method: "POST",
                credentials: "include"
            }
        );
        console.log(response.data);
    };

    useEffect(() => {
        logoff();
        // auth();
    }, []);

    return (
        <div>
            <Home />
        </div>
    );
};

export default Dados;
