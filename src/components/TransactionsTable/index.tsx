import { Container } from "./styles";

export function TransactionsTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Web Site</td>
                        <td className="deposit">R$12.000</td>
                        <td>Dev</td>
                        <td>12/05/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$1.000</td>
                        <td>Aluguel</td>
                        <td>15/05/2022</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de Web Site</td>
                        <td>R$12.000</td>
                        <td>Dev</td>
                        <td>12/05/2022</td>
                    </tr>
                </tbody>  
            </table>
        </Container>
    )
}