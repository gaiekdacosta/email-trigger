import { Box, Text } from "@chakra-ui/react";

const Sorry = () => {
    return (
        <>
            <Text fontSize='20px' fontWeight='semibold'>😞Desculpas</Text>
            <Box w='65%' borderWidth='1px' borderRadius='lg' boxShadow='2xl' overflow='hidden'>
                <Text m='1%'>
                    Gostaria de aproveitar esta oportunidade para expressar meus sinceros pedidos de
                    desculpas pelo ocorrido.
                    Reconheço que cometi um erro e entendo plenamente a importância de assumir a
                    responsabilidade por minhas ações.
                    Peço desculpas pelo inconveniente ou qualquer transtorno que tenha causado a você ou à equipe.
                    Minha intenção nunca foi causar problemas ou dificuldades, e estou profundamente arrependido(a)
                    pelo impacto negativo que isso possa ter causado.
                    Comprometo-me a aprender com essa situação e fazer todos os esforços necessários para garantir
                    que não se repita no futuro. Estou disposto(a) a corrigir qualquer dano causado e trabalhar para
                    reconstruir a confiança que possa ter sido abalada.
                    Agradeço sua compreensão e paciência nesta questão. Valorizo muito nosso relacionamento e
                    espero que possamos superar esse episódio e seguir em frente de forma positiva.
                    Mais uma vez, peço desculpas por qualquer inconveniente causado e agradeço por sua consideração.
                </Text>
            </Box>

        </>
    )
}

export default Sorry;
