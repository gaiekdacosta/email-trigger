import { Button, Flex, FormLabel, Img, Input, Text, useColorMode } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { colorMode } = useColorMode()

    const navigate = useNavigate()

    return (
        <Flex mt='15%' flexDirection='column' alignItems='center'>
            <Flex>
                <Text fontWeight='semibold' fontSize='25px'>DISPARADOR DE EMAILS</Text>
                <Img src='/o-email.png' h='33px' />
            </Flex>
            <Flex flexDirection='column' w='30%'>
                <FormLabel>Usuário</FormLabel>
                <Input
                    variant='flushed'
                    padding='5px'
                    bg={colorMode === 'light' ? 'whitesmoke' : 'blackAlpha.100'}
                    placeholder="digite o seu nome de usário" />
            </Flex>
            <Flex mt='1%' flexDirection='column' w='30%'>
                <FormLabel>Senha</FormLabel>
                <Input
                    variant='flushed'
                    padding='5px'
                    bg={colorMode === 'light' ? 'whitesmoke' : 'blackAlpha.100'}
                    onKeyPress={event => { if (event.key === 'Enter') console.log('entrar') }}
                    placeholder="digite a sua senha" />
            </Flex>
            <Button mt='1%' variant='link' cursor='pointer' onClick={() => navigate('/register')}>
                Não tem uma conta? Cadastre
            </Button>
            <Button mt='1%' w='20%' colorScheme='yellow' onClick={() => navigate('/home')}
                _hover={{ transform: 'scale(1.1)', transition: '0.5s' }}>
                Entrar
            </Button>
        </Flex>

    )
}

export default Login;