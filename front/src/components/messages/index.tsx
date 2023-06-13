import { Box, Flex, Text } from "@chakra-ui/react";

interface messageProps {
    messages: string[],
}

const Messages:React.FC<messageProps> = ({ messages }) => {
    return ( 
        <>
            {messages?.map((item: any, i: any) => 
                <Flex key={i} flexDirection='column' justifyContent='center' alignItems='center'>
                    <Text fontSize='20px' fontWeight='semibold'>{item.title}</Text>
                    <Box w='65%' borderWidth='1px' borderRadius='lg'
                        boxShadow='2xl' overflow='hidden'>
                        <Text m='1%'>
                            {item.TEXT}
                        </Text>
                    </Box>
                </Flex>)}
        </>
    );
}

export default Messages;