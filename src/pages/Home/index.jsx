import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Button, Card, ContainerCards } from "./styles"
import { api } from "../../utils/api"
import { formatDate } from "../../utils/date"

export function Home() {
    const navigate = useNavigate()
    const [informações, setInformações] = useState([])

    useEffect(() => {
        api.get("/usuarios").then(({ data }) => {
            setInformações(data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <Container>
            <h1>Home</h1>
            <ContainerCards>
                {informações.map(info => (
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
            <Button
                onClick={() => navigate("/")}
            >
                Voltar
            </Button>
        </Container>
    )
}