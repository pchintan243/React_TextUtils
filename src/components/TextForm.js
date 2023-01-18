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
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="7" value={text}></textarea>
                <button className="btn btn-danger m-2" onClick={handleUpClick}>Upper!!</button>
                <button className="btn btn-danger m-2" onClick={handleLoClick}>Lower!!</button>
            </div>


            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>

                {/* Count the word how many words as well as characters are there in the text area */}
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h2>Preview your text</h2>
                <p>{text.length > 0 ? text : "Nothing to preview..!"}</p>
            </div>
        </>
    )
}
