import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export const Review = ({confirm, showData}) => {

    const [button, setButton] = useState(1)
    

    const onSubmit = (e) => {
        e.preventDefault()

        if(button === 1) {
            confirm(true)
        } else if(button === 2) {
            confirm(false)
        }
        return

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
            <h3>Please confirm your information:</h3>
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
                <tr>
                    <td style={leftColStyle}><strong>Party Size: </strong></td><td>{showData.guests}</td>
                </tr>
            </table>

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
          
            <Form onSubmit={onSubmit}>
                <table style={confirmTableStyle}>
                    <tr><td style={leftColStyle}>
                    <Button variant="flat" type="submit" value="confirm" onClick={(e) => setButton(1)}>
                            Confirm
                    </Button>
                    </td>
                    <td>
                    <Button variant="secondary" type="submit" value="cancel" onClick={(e) => setButton(2)}>
                            Cancel
                    </Button>
                    </td>
                    </tr>
                </table>



            </Form>
        </>
    )
}

export default Review
