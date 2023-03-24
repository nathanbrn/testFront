import styled from "styled-components"

export const Container = styled.div`
    width: 80%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    background-color: #F8F8FF;
    text-align: center;

    h1 {
        font-size: 3rem;
        /* margin-bottom: 350px; */
    }
`

export const Button = styled.button`
    width: 70px;
    height: 40px;
    padding: 12px;
    border: transparent;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 12px;
    transition: .4s ease-in-out;

    &:hover {
        background-color: #000;
        color: #f8f8f8;
    }
`

export const ContainerCards = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 24px;
`

export const Card = styled.div`
    width: 200px;
    height: 200px;
    background-color: #cacaca;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 8px;

    h2 {
        font-size: 1.5rem;
        margin-bottom: 12px;
    }

    p {
        font-size: .85rem;
    }

    div p {
        font-size: .7rem;
        max-width: 15rem;
    }

    `
export const CardCriateUser = styled.form`
    width: 400px;
    height: 500px;
    background-color: #cacaca;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 8px;
    position: absolute;
    top: 10%;
    left: 50;
    transition: .4 ease-in-out;
    div:nth-child(1) {
        margin-top: 12px;
    }
    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        width: 100%;
        margin-top: 7rem;
    }
    div:nth-child(3) {
        margin-top: 50px;
    }
`

export const Input = styled.input`
    width: 90%;
    padding: 12px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    margin-bottom: 12px;
`

export const TextError = styled.p`
    color: red;
    font-size: 12px;
`