import React,{ useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



export const GuestEntry = ({addReg, showData}) => {

    const [guests, setGuests] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()

        addReg({...showData, guests: guests})
    }

    const confirmTableStyle = {
        border: '0',
        fontSize: '1.2em'
    }

    const leftColStyle = {
        padding: '10px',
        
    }

    return (

        <>
        <h3>Welcome back!</h3>
        <br/>
        <table style={confirmTableStyle}>
                <tr>
                    <td style={leftColStyle}><strong>Phone:</strong></td><td>{showData.phone}</td>
                </tr>
                <tr>
                    <td style={leftColStyle}><strong>Name: </strong></td><td>{showData.name}</td>
                </tr>
                <tr>
                    <td style={leftColStyle}><strong>Email:</strong></td><td>{showData.email}</td>
                </tr>

            </table>

    
        <hr></hr>
        <Form onSubmit={onSubmit}>
            
            <Form.Group controlId="formBasicText">
                <Form.Label><strong>Number of Guest in Party:</strong></Form.Label>
                <Form.Control type="number" placeholder="1" min='1' value={guests} onChange={(e) => setGuests(e.target.value)}/>
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
    
    </>
    )
}

export default GuestEntry
