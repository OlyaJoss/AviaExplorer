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

function Form(props) {

    const [startDate, setStartDate] = useState(new Date());
    const [fromAirport, setFromAirport] = useState('MOW');
    const [toAirport, setToAirport] = useState('TAS');
    const [autoHints, setAutoHints] = useState([]);
    const getData = () => {
        // json => js
        fetch(`http://autocomplete.travelpayouts.com/places2?term=${fromAirport}&locale=en&types[]=city,airport,country`)
            .then(result => result.json())
            .then(data => setAutoHints(data))
            .catch(err => console.error(err));
    }

    console.log(autoHints)
    return (
        <>
        
            <Flex as='form' onSubmit={(e) => props.onSearch(e, fromAirport, toAirport, startDate.toISOString().split('T')[0].slice(0, 7))}
                alignItems='flex-end' justify='space-between' flexDirection='row' pb='10px' w='986px'>
                <FormControl w='282px'>
                    <FormLabel color='#474A51'>
                        From
                    </FormLabel>

                    <Input
                        value={fromAirport}
                        onChange={(event) => {
                            setFromAirport(event.target.value)
                            getData()
                        }}
                        placeholder='Airport, City or Country'
                        _placeholder={{ fontWeight: 500 }}
                        w='282px' h='64px'
                        bgColor='#FFFFFF'
                        color='#1F2229'
                        fontWeight='700'
                        borderColor='#D8D8D8' />
                   
                </FormControl>

                <IconButton aria-label='Replace cities'
                    size='xs'
                    mb={5}
                    variant='outline'
                    bgColor='#FFFFFF'
                    isRound
                    icon={<RepeatIcon color='#7B61FF' />} />

                <FormControl w='282px'>
                    <FormLabel color='#474A51'>
                        To
                    </FormLabel>
                    <Input
                        value={toAirport}
                        onChange={(event) => setToAirport(event.target.value)}
                        placeholder='Airport, City or Country'
                        _placeholder={{ fontWeight: 500 }}
                        h='64px' w='282px'
                        bgColor='#FFFFFF'
                        color='#1F2229'
                        fontWeight='700'
                        borderColor='#D8D8D8' />
                </FormControl>

                <Box>
                    <DatePicker
                        className='date-picker'
                        dateFormat='MM/yyyy'
                        showMonthYearPicker
                        showFullMonthYearPicker
                        selected={startDate}
                        onChange={(date) => {
                            setStartDate(date)
                            console.log(date)
                        }} />
                </Box>
                <Button type='submit' color='#FFFFFF' h='64px' w='151px' bgColor='#7B61FF' borderRadius='8px' >Search</Button>

            </Flex>
            {/* TODO: лимит  на подсказки, показывать первые 5 */}
            <Box pb='80px' w='350px'>
            {autoHints.map(({ name, code, country_name, id }) => (
                        <Button key={id} color='#FFFFFF' bgColor='#7B61FF' size='xs' mr='3px' onClick={() => setFromAirport(name)}>
                            {name} {country_name} {code}
                        </Button>)
                    )}
            </Box>
        </>
    )
}

export default Form;