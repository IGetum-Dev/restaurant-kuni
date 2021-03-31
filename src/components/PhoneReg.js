import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export const PhoneReg = ({checkPhone}) => {

    const [phone, setPhone] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!phone) {
            alert('Please enter a phone number')
        }

        checkPhone(phone)

        setPhone('')
    }

    return (
        <>

            <Form onSubmit={onSubmit}>
                    
                <Form.Group controlId="formBasicPhone">
                    <Form.Label><strong>Phone Number:</strong></Form.Label>
                    <Form.Control type="phone" placeholder="8085558000" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </Form.Group>

                <style type="text/css">
                    {`
                    .btn-flat {
                    background-color: #844002;
                    color: white;
                    }

                    .btn-xxl {
                    padding: 1rem 1.5rem;
                    font-size: 1.5rem;
                    }
                    `}
                </style>

                <br></br>

                <Button variant="flat" type="submit">
                        Submit
                </Button>

            </Form>

        </>
    )
}

export default PhoneReg
