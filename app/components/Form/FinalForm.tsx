import React from 'react'
import FormLayout from './FormLayout'

import Prompt from '../templates/Prompt'
import Button from '../templates/Button';

import Calendar2LineIcon from "remixicon-react/Calendar2LineIcon";
import UserFillIcon from "remixicon-react/UserFillIcon";

const FinalForm = () => {
    return (
        <FormLayout>
            <Prompt title="CHECK-IN">
                <Calendar2LineIcon color='#e82574' />
                <input type="date" name="trip-start" min="2023-01-01" max="2030-12-31" className='calander' />
            </Prompt>
            <Prompt title="CHECK-OUT">
                <Calendar2LineIcon color='#e82574' />
                <input type="date" name="trip-end" min="2023-01-01" max="2030-12-31" className='calander' />
            </Prompt>
            <Prompt title="GUESTS" >
                <UserFillIcon color='#e82574' />
              <input type="number" name="guest" min="1" max="9" className='guests' placeholder='1' />
            </Prompt>
            <Button text='Check Out'/>
        </FormLayout>
    )
}

export default FinalForm
