import { Button, Flex, FormLabel, Input, Text, useColorMode } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const { colorMode } = useColorMode()

    const navigate = useNavigate()

    return (
        <Flex mt='8%' flexDirection='column' alignItems='center'>
            <Text fontWeight='semibold' fontSize='25px'>Cadastre-se</Text>
            <Flex flexDirection='column' w='30%'>
                <FormLabel>Usuário</FormLabel>
                <Input
                    variant='flushed'
                    padding='5px'
                    bg={colorMode === 'light' ? 'whitesmoke' : 'blackAlpha.100'}
                    placeholder="digite o seu nome de usário" />
            </Flex>
            <Flex mt='1%' flexDirection='column' w='30%'>
                <FormLabel>Email</FormLabel>
                <Input
                    variant='flushed'
                    padding='5px'
                    bg={colorMode === 'light' ? 'whitesmoke' : 'blackAlpha.100'}
                    placeholder="digite o seu email" />
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
            <Flex mt='1%' flexDirection='column' w='30%'>
                <FormLabel>Repetir senha</FormLabel>
                <Input
                    variant='flushed'
                    padding='5px'
                    bg={colorMode === 'light' ? 'whitesmoke' : 'blackAlpha.100'}
                    onKeyPress={event => { if (event.key === 'Enter') console.log('entrar') }}
                    placeholder="digite a sua senha novamente" />
            </Flex>
            <Button mt='1%' variant='link' cursor='pointer' onClick={() => navigate('/')}>
                Tem uma conta? Conecte-se
            </Button>
            <Button mt='1%' w='20%' colorScheme='yellow' onClick={() => navigate('/home')}>
                Cadastre-se
            </Button>
        </Flex >

    )
}

export default Register;