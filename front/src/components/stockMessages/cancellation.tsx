import { Box, Text } from "@chakra-ui/react"

const Cancellation = () => {
    return (
        <>
            <Text fontSize='20px' fontWeight='semibold'>😢Cancelamento de prensença em evento</Text>
            <Box w='65%' borderWidth='1px' borderRadius='lg' boxShadow='2xl' overflow='hidden'>
                <Text m='1%'>
                    Espero que esta mensagem o encontre bem. Agradeço imensamente o convite
                    para o evento que ocorrerá amanhã,
                    No entanto, devido a fatore externos, infelizmente não poderei participar do evento.
                    Lamento muito por não poder comparecer, pois reconheço o valor e a
                    importância do evento para a troca de conhecimentos e networking.
                    Espero que o evento seja um grande sucesso e que todos os participantes
                    aproveitem ao máximo essa oportunidade única.
                    Agradeço novamente pelo convite e peço desculpas por qualquer
                    inconveniente causado pela minha ausência.
                    Espero poder participar de futuros eventos e colaborar de forma positiva em outra ocasião.
                    Desejo a vocês um evento produtivo e inspirador
                </Text>
            </Box>
        </>
    )
}

export default Cancellation;