import { Box, Text } from "@chakra-ui/react";

const ConfirmReceipt = () => {
    return (
        <>
            <Text fontSize='20px' fontWeight='semibold'>✅Confirmação de recebimento</Text>
            <Box w='65%' borderWidth='1px' borderRadius='lg' boxShadow='2xl' overflow='hidden'>
                <Text m='1%'>
                    Agradeço pelo envio da sua mensagem/email. Confirmo o recebimento e gostaria de informar que
                    irei analisar cuidadosamente o conteúdo e fornecer uma resposta o mais breve possível.
                    Sua mensagem é importante para mim e farei o possível para fornecer as informações
                    necessárias ou tomar as medidas apropriadas, conforme o caso.
                    Caso seja necessário algum esclarecimento adicional ou se houver alguma informação
                    adicional que eu precise saber, entrarei em contato com você prontamente.
                    Agradeço pela sua paciência e compreensão.
                </Text>
            </Box>

        </>
    )
}

export default ConfirmReceipt;