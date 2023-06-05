import { useState } from 'react'
import { Box, Button, Flex, FormLabel, Input, Text, useColorMode } from "@chakra-ui/react";
import { MdMessage } from 'react-icons/md';
import { HiUserAdd, HiUserRemove } from 'react-icons/hi';

// messages 
import Birthday from '../../components/messages/birthday';
import DeadLine from '../../components/messages/deadline';
import FeedBack from '../../components/messages/feedback';
import Confirmation from '../../components/messages/confirmation';
import Resignation from '../../components/messages/resignation';
import VacationRequest from '../../components/messages/vacationRequest';
import ChangeMessage from '../../components/changeMessage/changeMessage';
import Header from '../../components/header';
import Cancellation from '../../components/messages/cancellation';
import ConfirmReceipt from '../../components/messages/ConfirmReceipt';
import Salutation from '../../components/messages/salutation';
import Sorry from '../../components/messages/sorry';

const Home = () => {
    const [messageIndex, setMessageIndex] = useState<number>(0)
    const [addressee, setAddressee] = useState<string>('')
    const [dinamicAdresses, setDinamicAdresses] = useState<string[]>([]);

    const { colorMode } = useColorMode()

    const components = [
        <Birthday />,
        <DeadLine />,
        <FeedBack />,
        <Resignation />,
        <VacationRequest />,
        <Confirmation />,
        <Cancellation />,
        <ConfirmReceipt />,
        <Salutation />,
        <Sorry />
    ]

    const addInput = (index: any) => {
        setDinamicAdresses((prevInputs) => {
            const newInputs = [...prevInputs];
            newInputs.splice(index, 0, '');
            return newInputs;
        })
    }

    const removeInput = (index: any) => {
        setDinamicAdresses((prevInputs) => {
            const newInputs = [...prevInputs];
            newInputs.splice(index, 1);
            return newInputs;
        })
    }

    const handleAdressees = (e: any) => setAddressee(e)

    const handleDinamicAdresses = (index: any, value: any) => {
        setDinamicAdresses((prevInputs) => {
            const newInputs = [...prevInputs];
            newInputs[index] = value;
            return newInputs;
        })
    }

    console.log(messageIndex)

    return (
        <>
            <Header />
            <Flex justifyContent='center' alignItems='center' fontSize='2xl' mt='0.5%' >
                <Text fontWeight='bold'>SELECIONE UMA MENSAGEM</Text>
                <MdMessage />
            </Flex>
            <Flex alignItems='center' mt='3%' flexDirection='column'>
                {components[messageIndex]}
                <Box position="fixed" top='61%' right='30%' textAlign='center'>
                    <Flex flexDirection='column'>
                        <ChangeMessage
                            components={components}
                            messageIndex={messageIndex}
                            setMessageIndex={setMessageIndex} />
                        <Flex flexDirection="column" overflowY="auto" maxHeight="160px">
                            <FormLabel>email do destinatário</FormLabel>
                            <Flex>
                                <Input
                                    bg={colorMode === "light" ? "whitesmoke" : "blackAlpha.100"}
                                    onChange={(e: any) => handleAdressees(e.target.value)}
                                    placeholder="exemplo@gmail.com"
                                    padding="5px"
                                    value={addressee}
                                    variant="flushed"
                                    w="500px" />
                                <Button ml="1%" colorScheme="blue" borderRadius="3xl" onClick={addInput}>
                                    <HiUserAdd />
                                </Button>
                            </Flex>
                            {dinamicAdresses.map((input, index) => (
                                <Flex mt="2%" key={index}>
                                    <Input
                                        bg={colorMode === "light" ? "whitesmoke" : "blackAlpha.100"}
                                        key={index}
                                        value={input}
                                        onChange={(e) => handleDinamicAdresses(index, e.target.value)}
                                        placeholder="exemplo@gmail.com"
                                        padding="5px"
                                        variant="flushed" />
                                    <Button ml="1%" colorScheme="blue" borderRadius="3xl" onClick={removeInput}>
                                        <HiUserRemove />
                                    </Button>
                                </Flex>))}
                        </Flex>
                    </Flex>
                    <Button borderRadius='3xl' mt='1%' colorScheme='yellow'
                        _hover={{ transform: 'scale(1.1)', transition: '0.5s' }}>
                        enviar mensagem
                    </Button>
                </Box>
            </Flex >
        </>
    )
}

export default Home;
