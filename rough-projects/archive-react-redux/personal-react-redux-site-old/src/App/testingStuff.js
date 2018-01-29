<Box text="I am a Red" color="red"></Box>
            <Box text="I am Black" color="black"></Box>
            <Box text="I am Yellow" color="yellow"></Box>
            <Box text="I am Aqua" color="aqua"></Box>
            <Box text="I am Pink" color="pink"></Box>



import React from "react";

function Box(props) {
    const styles = {
        width: "100px",
        height: "100px",
        display: "inline-block",
        margin: "10px",
        backgroundColor: props.color || "black",
        color: "white"
    
    }

    return (
        <div style={styles}>
    
        </div>
    )
}

export default Box;