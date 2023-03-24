import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Button, Card, ContainerCards, CardCriateUser, Input } from "./styles"
import { api } from "../../utils/api"
import { formatDate } from "../../utils/date"
import { toast } from "react-toastify"

export function Home() {
    const navigate = useNavigate()
    const [informacoes, setInformacoes] = useState([])
    const [popUpForm, setPopUpForm] = useState(false)
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [idUsuario, setIdUsuario] = useState('')


    useEffect(() => {
        api.get('/clientes').then(({ data }) => {
            setInformacoes(data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        toast.success("Bem vindo a Home", {
            position: "bottom-center",
        })
    }, [])

    function handleCreateClient(event) {
        event.preventDefault()
        api.post('/clientes', {
            email: email,
            name: nome,
            vendedorId: idUsuario
        }).then(response => {
            console.log(response)
            toast.success("Usuário criado com sucesso")
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <Container>
            <h1>Home</h1>
            <ContainerCards>
                {informacoes.map(info => (
                    <Card key={info.id}>
                        <h2>{ info.name }</h2>
                        <p>Email: { info.email }</p>
                        <div>
                            <p>Criado em: { formatDate(info.createdAt) }</p>
                            <p>Ultima atualização: { formatDate(info.updatedAt) }</p>
                        </div>
                    </Card>
                ))}
            </ContainerCards>
            {popUpForm && (
                <CardCriateUser>
                    <div>
                        <h2>Criar Usuário</h2>
                    </div>
                    <div>
                        <Input 
                            placeholder="Digite o nome..."
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <Input 
                            placeholder="Digite o email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <Input 
                            placeholder="Digite seu id..." 
                            value={idUsuario}
                            onChange={(e) => setIdUsuario(e.target.value)}
                        />
                    </div>
                    <div>
                        <Button
                            onClick={(event) => handleCreateClient(event)}
                        >
                            Criar
                        </Button>
                    </div>
                </CardCriateUser>
            )}
            {!popUpForm && (
                <Button
                onClick={() => setPopUpForm(true)}
                >
                    Criar Usuário
                </Button>
            )}
            <Button
                onClick={() => navigate("/")}
            >
                Voltar
            </Button>
        </Container>
    )
}