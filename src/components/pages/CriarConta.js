import { useState } from "react";
import { Link } from 'react-router-dom';
import "./CriarConta.css";
import FormInput from "../FormInput";

const CriarConta = () => {
  const [values, setValues] = useState({
    nome: "",
    email: "",
    nascimento: "",
    cpf: "",
    telefone: "",
    endereço: "",
    cep: "",
    estado: "",
    cidade: "",
    senha: "",
    confirmarSenha: "",
  });

  const inputs = [
    {
      id: 1,
      name: "nome",
      type: "text",
      placeholder: "Nome completo",
      errorMessage:
        "Verifique seu nome!",
      label: "Nome",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Insira um endereço de email válido!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "nascimento",
      type: "date",
      placeholder: "Data de nascimento",
      label: "Data de nascimento",
    },
    {
      id: 4,
      name: "cpf",
      type: "number",
      placeholder: "CPF",
      errorMessage: "O CPF utilizado não existe!",
      label: "CPF",
      required: true,
    },
    {
      id: 5,
      name: "telefone",
      type: "tel",
      placeholder: "Telefone",
      errorMessage: "Este número de telefone já está em uso ou não existe!",
      label: "Telefone",
      required: true,
    },
    {
      id: 6,
      name: "cep",
      type: "number",
      placeholder: "CEP",
      errorMessage: "O CEP não existe!",
      label: "CEP",
      required: true,
    },
    {
      id: 7,
      name: "endereço",
      type: "text",
      placeholder: "Endereço",
      errorMessage: "O endereço está incorreto!",
      label: "Endereço",
      required: true,
    },
    {
      id: 8,
      name: "estado",
      type: "text",
      placeholder: "Estado",
      errorMessage: "Verique se seu estado está correto!",
      label: "Estado",
      required: true,
    },
    {
      id: 9,
      name: "cidade",
      type: "text",
      placeholder: "Cidade",
      errorMessage: "Verifique se sua cidade está correta!",
      label: "Cidade",
      required: true,
    },
    {
      id: 10,
      name: "senha",
      type: "password",
      placeholder: "Senha",
      errorMessage:
        "Sua senha deve conter entre 8-20 caracteres e incluir pelo menos 1 letra, 1 número e 1 caractere especial!",
      label: "Senha",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 11,
      name: "confirmarSenha",
      type: "password",
      placeholder: "Confirme sua senha",
      errorMessage: "Suas senhas não coincidem!",
      label: "Confirmar senha",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="criar-conta">
      <form onSubmit={handleSubmit}>
        <h1>Crie sua conta</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>
          <Link to="/perfil" className="enviar">Cadastrar</Link>
        </button>
      </form>
    </div>
  );
};

export default CriarConta;