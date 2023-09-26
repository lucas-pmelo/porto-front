// função que vai verificar se o usuario esta logado, ou não, fazendo a requisição pela API, se estiver logado, deixar seguir, se não, voltar para pagina de login
import React, { useEffect, useState } from "react";
import axios from "axios";

const isAuth = () => {
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
    }, []);
};

export default isAuth;
