import {
    Button, Drawer, DrawerBody, DrawerCloseButton,
    DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Link, Text, useDisclosure
} from "@chakra-ui/react"
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { SiReact, SiTypescript, SiNodedotjs, SiGithub } from 'react-icons/si'
import { useNavigate } from "react-router-dom"

const DrowerMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const navigate = useNavigate()

    let usuario: string = 'Gaiek'

    return (
        <>
            <Button variant='link' color='white' onClick={onOpen} bg='blue.400' borderRadius='full'>
                <AiOutlineMenuUnfold style={{ transform: 'scale(1.4)' }} />
            </Button>
            <Drawer isOpen={isOpen} onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent alignItems='left'>
                    <DrawerCloseButton />
                    <DrawerHeader textAlign='left'>Olá {usuario}!</DrawerHeader>
                    <DrawerBody>
                        <Flex flexDirection='column'>
                            <Text fontWeight='semibold'>Email remetente</Text>
                            <Text mt='1%'>emailtriggerproject@gmail.com</Text>
                        </Flex>
                        <Flex mt='5%' flexDirection='column'>
                            <Text fontWeight='semibold'>Um breve resumo sobre esse projeto</Text>
                            <Text>
                                Esse projeto foi desenvolvido com o objetivo de testar
                                o funcionamento de um disparador de emails em Javascript,
                                tarefa bem comum em um ambiente real de trabalho. também utilizei
                                JWT para criar o sistema de login.
                            </Text>
                        </Flex>
                        <Flex mt='5%' flexDirection='column'>
                            <Text fontWeight='semibold'>Tecnologias utilizadas neste projeto</Text>
                            <Flex justifyContent='space-around' mt='1%' fontSize='50px'>
                                <SiTypescript style={{ color: '#017acc' }} />
                                <SiReact style={{ color: '#61ffff' }} />
                                <SiNodedotjs style={{ color: '#73b656' }} />
                            </Flex>
                        </Flex>
                        <Flex mt='28%' justifyContent='center' alignItems='center' flexDirection='column' fontSize='80px'>
                            <Link href="https://github.com/gaiekdacosta/email-trigger">
                                <SiGithub />
                            </Link>
                            <Text mt='1%' fontSize='md'>repositório do projeto</Text>
                        </Flex>
                    </DrawerBody>
                    <DrawerFooter alignItems='center' justifyContent='center'>
                        <Button w='85%' colorScheme='yellow' onClick={() => navigate('/')}>
                            Sair
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default DrowerMenu;