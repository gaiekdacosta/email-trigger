import { Box, Text } from "@chakra-ui/react"

const Confirmation = () => {
    return (
        <>
            <Text fontSize='20px' fontWeight='semibold'>😀Confirmação de prensença em evento</Text>
            <Box w='65%' borderWidth='1px' borderRadius='lg' boxShadow='2xl' overflow='hidden'>
                <Text m='1%'>
                    É com grande satisfação que confirmo minha participação no evento, que ocorrerá amanhã.
                    Agradeço pelo convite e estou ansioso(a) para contribuir e desfrutar das atividades e
                    discussões enriquecedoras que serão realizadas durante o evento.
                    Caso haja alguma informação adicional que eu precise saber ou qualquer
                    preparação prévia necessária, por favor, não hesite em me informar.
                    Estou comprometido(a) em contribuir de forma positiva para o sucesso do evento e aproveitar
                    ao máximo essa oportunidade de aprendizado e networking.
                    Agradeço novamente pelo convite e aguardo com expectativa o dia do evento.
                </Text>
            </Box>
        </>
    )
}

export default Confirmation;