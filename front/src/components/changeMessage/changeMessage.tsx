import { Button, Center, Text } from "@chakra-ui/react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

interface changeMessageProps {
    components: JSX.Element[],
    setId: React.Dispatch<React.SetStateAction<number>>,
    id: number
}

const ChangeMessage: React.FC<changeMessageProps> = ({ components, setId, id }) => {
    const handleNextMessage = () => {
        setId((prevIndex) => (prevIndex < components.length - 1 ? prevIndex + 1 : prevIndex));
    };

    const handlePreviousMessage = () => {
        setId((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };

    const countMessage = `${id + 1} / ${components.length}`

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
