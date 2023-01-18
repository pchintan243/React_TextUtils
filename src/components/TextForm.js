import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    // Update the text when you click on button
    const handleUpClick = () => {
        console.log("Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success");
    }

    const handleLoClick = () => {
        console.log("Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case", "success");
    }

    // Onchange event is use to type in textarea
    // Otherwise you can't type in textarea
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

    // State concept
    const [text, setText] = useState('');

    // text = "hello";  --> Wrong way to change the text
    // text("hello");   --> Correct way to change the text
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <textarea className="form-control" onChange={handleOnChange} id="myBox" rows="7" value={text}></textarea>
                <button className="btn btn-danger m-2" onClick={handleUpClick}>Upper!!</button>
                <button className="btn btn-danger m-2" onClick={handleLoClick}>Lower!!</button>
            </div>
        </>
    )
}
