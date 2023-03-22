import styled from "styled-components"

export const TextTitle = styled.h1`
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 48px;
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 8px;
    gap: 4px;
`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 8px;
    margin-top: 24px;
`

export const FormContainer = styled.form`
    width: 500px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 12px;
    background-color: #F8F8FF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 12px;
`

export const Label = styled.label``

export const Input = styled.input`
    width: 90%;
    padding: 12px;
    border: transparent;
`

export const Button = styled.button`
    width: 70px;
    height: 40px;
    padding: 12px;
    border: transparent;
    border-radius: 12px;
    cursor: pointer;
    transition: .4s ease-in-out;

    &:hover {
        background-color: #ADD8E6;
    }
`