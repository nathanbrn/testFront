import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../utils/api";
import { 
    ContainerInput, 
    ContainerButton, 
    FormContainer, 
    Input, 
    Button, 
    Label, 
    TextTitle
} from "./styles";

export function Form() {
    const [Email, setEmail] = useState("");
    const [Senha, setSenha] = useState("");
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        api.get('/usuarios')
          .then(({ data }) => {
            const { email, password } = data
            console.log(email, password)
            if(Email === email && Senha === password)
                setIsLogged(true)
          })
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
            <ContainerButton>
                <Button 
                    onClick={() => {
                        
                        if(isLogged)
                            console.log("Logado com sucesso")
                        else
                            console.log("Dados inválidos")
                    }}

                >
                    Login
                </Button>
            </ContainerButton>
        </FormContainer>
    )
}