import React from 'react'
// import Box from "./Box";
import ContactCard from "./ContactCard";

function App(props) {
    const contacts = [
        {firstName: "Bob", lastName: "Ziroll", phone: "123456789", email: "bziroll@v.com"},
        {firstName: "Ben", lastName: "Ziroll", phone: "123456789", email: "bziroll@v.com"},
        {firstName: "Marcus", lastName: "Ziroll", phone: "123456789", email: "bziroll@v.com"},
        {firstName: "Eric", lastName: "Ziroll", phone: "123456789", email: "bziroll@v.com"},
    ]

const contactCards = contacts.map(contact => <ContactCard contact= {contact}/>); 

    return (
        <div>
            <h1>{contactCards}</h1>
            {/* <Box text="I am a Red" color="red"></Box>
            <Box text="I am Black" color="black"></Box>
            <Box text="I am Yellow" color="yellow"></Box>
            <Box text="I am Aqua" color="aqua"></Box>
            <Box text="I am Pink" color="pink"></Box> */}
            
        </div>
    )
}

export default App;
