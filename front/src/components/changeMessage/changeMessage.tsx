import { Button, Center, Text } from "@chakra-ui/react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

interface changeMessageProps {
    messages: string[],
    setId: React.Dispatch<React.SetStateAction<number>>,
    id: number
}

const ChangeMessage: React.FC<changeMessageProps> = ({ messages, setId, id }) => {
    const handleNextMessage = () => {
        setId((prevIndex) => (prevIndex < messages.length - 1 ? prevIndex + 1 : prevIndex));
    };

    const handlePreviousMessage = () => {
        setId((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };

    const countMessage = `${id + 1} / ${messages.length}`

    return (
        <>
            <Text mt='0.5%' fontWeight='semibold'>{countMessage}</Text>
            <Center fontSize='3xl'>
                <Button borderRadius='3xl' mr='1%' colorScheme='blue' onClick={handlePreviousMessage}>
                    <MdOutlineNavigateBefore />
                </Button>
                <Button borderRadius='3xl' colorScheme='blue' onClick={handleNextMessage}>
                    <MdOutlineNavigateNext />
                </Button>
            </Center>
        </>
    )
}

export default ChangeMessage;
