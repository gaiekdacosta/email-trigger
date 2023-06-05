import { Flex, Text, useColorMode, Stack, Switch } from '@chakra-ui/react'
import { IoMdSunny, IoMdMoon } from 'react-icons/io'
import DrawerMenu from '../drawerMenu'

const Header = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <Flex bg='blue.400' p='1' justifyContent='space-between' color='white' alignItems='center'>
            <Text fontWeight='semibold' m='0.5%'>
                Disparador de emails
            </Text>
            <Flex>
                <Stack alignItems='center' direction='row'>
                    <IoMdMoon />
                    <Switch onChange={toggleColorMode} colorScheme='blue' />
                    <IoMdSunny />
                </Stack>
                <DrawerMenu />
            </Flex>
        </Flex>
    )
}

export default Header;
