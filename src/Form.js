import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';
import {
    Flex,
    FormControl,
    FormLabel,
    Input,
    IconButton,
    Button,
    Box
} from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';

function Form() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <Flex alignItems='flex-end' justify='space-between' flexDirection='row' pb={80} w='986px'>
                <FormControl w='282px'>
                    <FormLabel color='#474A51'>
                        From
                    </FormLabel>
                    <Input placeholder='Airport, City or Country' w='282px' h='64px' bgColor='#FFFFFF' />
                </FormControl>

                <IconButton aria-label='Replace cities'
                    size='xs'
                    mb={2}
                    variant='outline'
                    bgColor='#FFFFFF'
                    isRound icon={<RepeatIcon color='#7B61FF' />} />

                <FormControl w='282px'>
                    <FormLabel color='#474A51'>
                        To
                    </FormLabel>
                    <Input placeholder='Airport, City or Country' h='64px' w='282px' bgColor='#FFFFFF' />
                </FormControl>

                {/* <Input placeholder='Sat 23.12' w='191px' bgColor='#FFFFFF'/> */}
                <Box>
                    <DatePicker className='date-picker' selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                </Box>
                <Button type='button' color='#FFFFFF' h='64px' w='151px' bgColor='#7B61FF'>Search</Button>

            </Flex>
        </>
    )
}

export default Form;