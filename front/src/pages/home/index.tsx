import { useEffect, useState } from 'react'
import { Box, Button, Flex, FormLabel, Input, Text, useColorMode, useToast } from "@chakra-ui/react";
import { MdMessage } from 'react-icons/md';
import api from '../../services';
import Header from '../../components/header';
import Messages from '../../components/messages';
import ChangeMessage from '../../components/changeMessage/changeMessage';

const Home = () => {
    const [messages, setMessages] = useState<string[]>([])
    const [id, setId] = useState<number>(0)
    const [addressee, setAddressee] = useState<string>('')

    const toast = useToast()

    const { colorMode } = useColorMode()
    
    const handleAdressees = (e: any) => setAddressee(e)

    const getMessages = async () => {
        await api.get(`/showMessages/${id}`).then((res) => {
            console.log(res.data)
            setMessages(res.data)
        })
    }

    const sendMessage = () => {
        api.post(`/sendMail/${id}/${addressee}`)
            .then(res => {
                console.log(res)
                toast({
                    title: 'Mensagem enviada com sucesso',
                    description: res.data.message,
                    status: 'success',
                    isClosable: true,
                    position: 'bottom-right',
                    variant: 'top-accent',
                })
                setAddressee('');
                setId(0);
            })
        .catch(res => {
            toast({
                title: 'Ocorreu erro ao enviar mensagem.',
                description: res.data.message,
                status: 'error',
                isClosable: true,
                position: 'bottom-right',
                variant: 'top-accent'
            })
        });
    };

    useEffect(() => {
        getMessages()
    }, [id])

    return (
        <>
            <Header />
            <Flex justifyContent='center' alignItems='center' fontSize='2xl' mt='0.5%' >
                <Text fontWeight='bold'>SELECIONE UMA MENSAGEM</Text>
                <MdMessage />
            </Flex>
            <Flex alignItems='center' mt='0.5%' flexDirection='column'>
                <Messages messages={messages} />
                <Box position="fixed" top='69%' right='30%' textAlign='center'>
                    <Flex flexDirection='column'>
                        <ChangeMessage
                            messages={messages}
                            id={id}
                            setId={setId} />
                            <FormLabel>email do destinatário</FormLabel>
                            <Input
                                bg={colorMode === "light" ? "whitesmoke" : "blackAlpha.100"}
                                onChange={(e: any) => handleAdressees(e.target.value)}
                                placeholder="exemplo@gmail.com"
                                padding="5px"
                                value={addressee}
                                variant="flushed"
                                w="500px" />
                    </Flex>
                    <Button borderRadius='3xl' mt='1%' colorScheme='yellow'
                        _hover={{ transform: 'scale(1.1)', transition: '0.5s' }}
                        onClick={sendMessage}>
                        enviar mensagem
                    </Button>
                </Box>
            </Flex >
        </>
    )
}

export default Home;
