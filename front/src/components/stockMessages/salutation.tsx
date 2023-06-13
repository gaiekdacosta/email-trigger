import { Box, Text } from "@chakra-ui/react";

const Salutation = () => {
    return (
        <>
            <Text fontSize='20px' fontWeight='semibold'>👋Saudação</Text>
            <Box w='65%' borderWidth='1px' borderRadius='lg' boxShadow='2xl' overflow='hidden'>
                <Text m='1%'>
                    Espero que esta mensagem o encontre bem.
                    Gostaria de aproveitar este momento para enviar meus cumprimentos e
                    expressar minha gratidão pela oportunidade de estar em contato com você.
                    Desejo que seu dia seja repleto de realizações e que você tenha sucesso em todas as suas empreitadas.
                    Se houver algo em que eu possa ajudar ou se você tiver alguma dúvida, por favor,
                    não hesite em entrar em contato comigo. Estou à disposição para colaborar da melhor forma possível.
                    Agradeço sua atenção e espero ter a oportunidade de manter uma comunicação positiva e
                    produtiva no futuro.
                </Text>
            </Box>

        </>
    )
}

export default Salutation;