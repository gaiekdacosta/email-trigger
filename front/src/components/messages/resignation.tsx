import { Box, Text } from "@chakra-ui/react";

const Resignation = () => {
    return (
        <>
            <Text fontSize='20px' fontWeight='semibold'>💼Pedido de demissão</Text>
            <Box w='65%' borderWidth='1px' borderRadius='lg' boxShadow='2xl' overflow='hidden'>
                <Text m='1%'>
                    Escrevo esta carta para formalizar meu pedido de demissão do cargo que ocupo nesta Empresa.
                    Após cuidadosa reflexão e considerando minha trajetória profissional e pessoal, tomei a
                    decisão de buscar novos desafios e oportunidades em minha carreira.
                    Gostaria de expressar minha gratidão pela oportunidade de fazer parte da equipe;
                    Durante meu tempo aqui, aprendi muito e cresci profissionalmente,
                    além de ter tido a chance de trabalhar com pessoas incríveis.
                    Agradeço pelo suporte, orientação e confiança que recebi ao longo dessa jornada.
                    Valorizo a experiência adquirida e os relacionamentos construídos durante minha permanência na empresa.
                    Comprometo-me a fazer uma transição suave e completa de minhas responsabilidades,
                    colaborando com a equipe para garantir que todos os projetos estejam devidamente encaminhados.
                    Estou à disposição para discutir a melhor data para minha saída e auxiliar no processo de
                    seleção e treinamento do meu substituto, se necessário.
                    Agradeço novamente pela oportunidade de fazer parte dessa história e desejo a todos sucesso contínuo.
                    Levo comigo aprendizados valiosos e memórias positivas desta experiência profissional.
                </Text>
            </Box>
        </>
    )
}

export default Resignation;