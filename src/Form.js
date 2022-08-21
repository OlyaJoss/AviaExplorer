import * as React from 'react';
import {
    Flex,
    FormControl,
    FormLabel,
    Input,
    IconButton,
    Spacer,
    Button
} from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';

function Form() {
    return (
        <>
            <Flex alignItems='flex-end' flexDirection='row' pb={80} w='986px'>
                <FormControl>
                    <FormLabel color='#474A51'>
                        From
                    </FormLabel>
                    <Input placeholder='Airport, City or Country' w='282px' />
                </FormControl>

                <IconButton aria-label='Replace cities'
                    size='xs'
                    mb={2}
                    variant='outline'
                    isRound icon={<RepeatIcon color='#7B61FF' />} />

                <FormControl>
                    <FormLabel color='#474A51'>
                        To
                    </FormLabel>
                    <Input placeholder='Airport, City or Country' w='282px' />

                </FormControl>
                <Input placeholder='Sat 23.12' w='191px' />
                <Button color='#FFFFFF' bgColor='#7B61FF'>Search</Button>

            </Flex>
        </>
    )
}

export default Form;