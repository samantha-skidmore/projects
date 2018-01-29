import React from 'react'

function ContactCard(props) {
    return (
        <div>
            <h1>{props.contact.firstName} {props.contact.lastName}</h1>
        </div>
    )
}

export default ContactCard;