import styled from "styled-components";
import { darken, transparentize } from 'polished'

export const Container = styled.form `
    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: var(--input-border);
        background: var(--input-bg);

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }
        & + input {
            margin-top: 1rem;
        }

    }
    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #FFF;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: filter 0.5s;

        &:hover{
            filter: brightness(0.9);
        }
        &:focus{
            outline-color: var(--green);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#33cc95',
    red: '#e52e4d'
}
export const RadioBox = styled.button<RadioBoxProps>`


    
        height: 4rem;
        border: 1px solid var(--input-border);
        border-radius: 0.25rem;

        background: ${(props) => props.isActive
            ? transparentize(0.9, colors[props.activeColor])
            : 'transparent'
         };

        display: flex;
        align-items: center;
        justify-content: center;

        transition: color;

        &:hover{
            border-color: ${darken(0.1, '#d7d7d7')};
        }

        img{
            height: 20px;
            width: 20px;
        }

        span{
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
            color: var(--text-title);

        }
`;