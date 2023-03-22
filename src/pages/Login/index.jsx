import { 
    ContainerInput, 
    ContainerButton, 
    FormContainer, 
    Input, 
    Button, 
    Label, 
    TextTitle
} from "./styles";

export function Login() {
    return (
        <FormContainer>
            <TextTitle>Login</TextTitle>
            <ContainerInput>
                <Label>E-mail</Label>
                <Input placeholder="Digite seu email..." type="email" id="email" name="email" />
            </ContainerInput>
            <ContainerInput>
                <Label>Senha</Label>
                <Input placeholder="Digite sua senha..." type="password" id="senha" name="senha" />
            </ContainerInput>
            <ContainerButton>
                <Button type="submit">Login</Button>
            </ContainerButton>
        </FormContainer>
    )
}