import Modal from 'react-modal';
import { FormEvent, useState } from 'react';

import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { useTransaction } from '../../hooks/useTransaction';

//Assets
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'


interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){

    const {createTransaction} = useTransaction();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');

    function resetModal(){
        setTitle('');
        setAmount(0);
        setCategory('');
        setType('');
    }

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();
        
        await createTransaction({
            title,
            amount,
            category,
            type
        })
        resetModal()
        onRequestClose()
    }

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type='button' onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Botão de Fechar" />
            </button>
            
            <Container
                onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>

                <input
                    placeholder='Título'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    onChange={event => setAmount(Number(event.target.value))}
                    value={amount}
                    type='number'
                    placeholder='Valor'
                />
                <TransactionTypeContainer>
                    <RadioBox
                        activeColor="green"
                        isActive={type === 'deposit'} 
                        type='button'
                        onClick={() => { setType('deposit')}}
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        activeColor="red"
                        isActive={type === 'withdraw'}  
                        type='button'
                        onClick={() => { setType('withdraw')}}
                    >
                        <img src={outcomeImg} alt="Entrada" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input
                    value={category}
                    onChange={event => setCategory(event.target.value)} 
                    placeholder='Categoria'
                />
                <button 
                    type='submit'
                >
                    Cadastrar
                </button>

            </Container>
        </Modal>
    )
}