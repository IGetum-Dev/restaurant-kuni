import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const FullRegistration = ({addReg, showData}) => {

    const [name, setName] = useState('')
    const [email, setEmail ] = useState('')
    const [guests, setGuests ] = useState(0)
    const phone = showData.phone

    const onSubmit = (e) => {
        e.preventDefault()

        addReg({name, email, guests, phone})

        setName('')
        setEmail('')
        setGuests('')
    }

    return (

        <Form  onSubmit={onSubmit}>
            
            <Form.Group controlId="formBasicText">
                <Form.Label><strong>Name</strong></Form.Label>
                <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required/>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label><strong>Email</strong></Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </Form.Group>

            <Form.Group controlId="formBasicText">
                <Form.Label><strong>Party Size: </strong></Form.Label>
                <Form.Control type="number" placeholder="1" min='1' value={guests} onChange={(e) => setGuests(e.target.value)} required/>
                <Form.Text className="text-muted">
                    Enter the number of guest including yourself.
                </Form.Text>
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


            <Button variant="flat" type="submit">
                Submit
            </Button>

        </Form>

    )
}

export default FullRegistration
