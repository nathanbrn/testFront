import { useState, useEffect } from "react";
import { api } from "../../utils/api";
import { 
    ContainerInput, 
    ContainerButton, 
    FormContainer, 
    Input, 
    Button, 
    Label, 
    TextTitle,
    TextError
} from "./styles";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function Form() {
    const [Email, setEmail] = useState("")
    const [Senha, setSenha] = useState("")
    const [isLogged, setIsLogged] = useState(false)
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    async function handleLogin(event) {
        event.preventDefault()
        api.get("/usuarios").then(({ data }) => {
            const emails = data.map(usuario => usuario.email)
            const senhas = data.map(usuario => usuario.password)
            
            if(!emails.includes(Email) || !senhas.includes(Senha)){
                console.log("Credenciais inválidas")
                setError(true)
            } else {
                setIsLogged(true)
            }
            
        }).catch((error) => {
            console.log("Erro ao carregar usuários", error)
        })
    }

    if(isLogged) {
        navigate("/home")
    }

    useEffect(() => {
        toast.warning("Digite as informações corretas")
    }, [])

    return (
        <FormContainer>
            <TextTitle>Login</TextTitle>
            <ContainerInput>
                <Label>E-mail</Label>
                <Input 
                    placeholder="Digite seu email..." 
                    type="email" id="email" 
                    name="email" 
                    value={Email}
                    onChange={(event) => {
                        const value = event.target.value;
                        setEmail(value);
                    }}
                />
            </ContainerInput>
            <ContainerInput>
                <Label>Senha</Label>
                <Input 
                    placeholder="Digite sua senha..." 
                    type="password" 
                    id="senha" 
                    name="senha" 
                    value={Senha}
                    onChange={(event) => {
                        const value = event.target.value;
                        setSenha(value);
                    }}
                />
            </ContainerInput>
            {error && <TextError>Credenciais inválidas</TextError>}
            <ContainerButton>
                <Button 
                    onClick={(event) => handleLogin(event)}
                >
                    Login
                </Button>
            </ContainerButton>
        </FormContainer>
    )
}