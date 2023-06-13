import { Box, Text } from "@chakra-ui/react"

const VacationRequest = () => {
    return (
        <>
            <Text fontSize='20px' fontWeight='semibold'>🌊Pedido de férias</Text>
            <Box w='65%' borderWidth='1px' borderRadius='lg' boxShadow='2xl' overflow='hidden'>
                <Text m='1%'>
                    Espero que esta mensagem o encontre bem. Gostaria de formalizar o meu pedido de férias
                    referente ao meu período de descanso anual.
                    Após considerar minhas responsabilidades e necessidades pessoais, planejei tirar 30 dias de férias.
                    Durante esse período,
                    gostaria de desconectar-me completamente das atividades profissionais e recarregar minhas energias.
                    Tenho plena consciência da importância de manter a continuidade dos projetos e do trabalho em equipe.
                    Para garantir uma transição tranquila, estou disposto(a) a ajudar na organização e planejamento
                    prévio das atividades, bem como a documentar qualquer informação relevante que
                    possa ser útil durante minha ausência.
                    Peço que, por gentileza, analise minha solicitação de férias e forneça as orientações
                    necessárias para formalizar o processo, incluindo os procedimentos internos para aprovação
                    e o preenchimento dos formulários correspondentes.
                    Acredito que esse período de descanso será fundamental para meu bem-estar pessoal e para
                    retornar ao trabalho revigorado(a) e ainda mais motivado(a) para contribuir com o sucesso da
                    equipe e da empresa.
                    Agradeço antecipadamente pela sua atenção e consideração.
                    Fico à disposição para discutir qualquer detalhe adicional que seja necessário.
                </Text>
            </Box>
        </>
    )
}

export default VacationRequest;