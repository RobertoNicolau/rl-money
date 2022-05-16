
import incomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { useTransaction } from '../../hooks/useTransaction';
import { Container } from "./styles";

export function Summary(){
    const {transactions} = useTransaction();

    const summary = transactions.reduce((acc, transactions) => {
        if(transactions.type === 'deposit'){
            acc.deposits += transactions.amount;
            acc.total += transactions.amount;
        } else {
            acc.withdraws += transactions.amount;
            acc.total -= transactions.amount;
        }

        return acc;
    },{
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return(
        <Container >
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImage} alt="Entradas" />
                </header>
                <strong>
                   {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImage} alt="Saídas" />
                </header>
                <strong>
                   -{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total" />
                </header>
                <strong>
                   {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}