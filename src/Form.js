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
    Box,
    Text
} from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';

function Form(props) {

    const [startDate, setStartDate] = useState(new Date());
    const [fromAirport, setFromAirport] = useState('');
    const [toAirport, setToAirport] = useState('TAS');
    const [fromIataCode, setFromIataCode] = useState('');
    const [toIataCode, setToIataCode] = useState('');
    const [autoHintsFrom, setAutoHintsFrom] = useState([]);
    const [autoHintsTo, setAutoHintsTo] = useState([]);
    const [isFormValid, setIsFormValid] = useState(false);
    const [isFromAirportValid, setIsFromAirportValid] = useState(false);
    const [isToAirportValid, setIsToAirportValid] = useState(false);

    const getData = (text, where = 'from') => {
        fetch(`http://autocomplete.travelpayouts.com/places2?term=${text}&locale=en&types[]=city,airport,country`)
            .then(result => result.json())
            .then(data => where === 'from' ? setAutoHintsFrom(data) : setAutoHintsTo(data))
            .catch(err => console.error(err));
    }

    return (
        <>

            <Flex as='form'
                onSubmit={(e) => {
                    isFormValid
                        ? props.onSearch(e, fromIataCode, toIataCode, startDate.toISOString().split('T')[0].slice(0, 7))
                        : e.preventDefault()
                }}
                alignItems='flex-end' justify='space-between' flexDirection='row' pb='10px' w='986px'>
                <FormControl w='282px'>
                    <FormLabel color='#474A51'>
                        From
                    </FormLabel>
                    {/* ПРАВЫЙ ИНПУТ */}
                    <Input
                        value={fromAirport}
                        onChange={(event) => {
                            setFromAirport(event.target.value)
                            getData(fromAirport)
                            setIsFormValid(false)
                            setIsFromAirportValid(false)
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
                    {/* ЛЕВЫЙ ИНПУТ */}
                    <Input
                        value={toAirport}
                        onChange={(event) => {
                            setToAirport(event.target.value)
                            getData(toAirport, 'to')
                            setIsToAirportValid(false)
                        }}
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
            <Flex>
            <Box pb='80px' mr='55px' w='282px'>
                {
                    isFromAirportValid
                        ? null
                        : <Text>Choose variant from below</Text>
                }
                {autoHintsFrom.slice(0, 5).map(({ name, code, country_name, id }) => (
                    <Button key={id} color='#FFFFFF' bgColor='#7B61FF' size='xs' mr='3px'
                        onClick={() => {
                            setFromIataCode(code)
                            setFromAirport(`${name} ${country_name} ${code}`)
                            setIsFormValid(true)
                            setIsFromAirportValid(true)
                        }}>
                        {name} {country_name} {code}
                    </Button>)
                )}
            </Box>

            <Box pb='80px' w='282px'>
                {
                    isToAirportValid
                        ? null
                        : <Text>Choose variant from below</Text>
                }
                {autoHintsTo.slice(0, 5).map(({ name, code, country_name, id }) => (
                    <Button key={id} color='#FFFFFF' bgColor='#7B61FF' size='xs' mr='3px'
                        onClick={() => {
                            setToIataCode(code)
                            setToAirport(`${name} ${country_name} ${code}`)
                            setIsFormValid(true)
                            setIsToAirportValid(true)
                        }}>
                        {name} {country_name} {code}
                    </Button>)
                )}
            </Box>
            </Flex>
        </>
    )
}

export default Form;