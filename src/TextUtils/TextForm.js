import React, { useState } from 'react';
import '../App.css'
const TextForm = (props) => {
    const [text, setText] = useState('');

    const changeHandler = (e) => {
        setText(e.target.value);

    }
    const toUpperCase = () => {
        setText(text.toUpperCase());
        props.showAlert('converted to upper Case', 'danger');

    }

    const toLowerCase = () => {
        setText(text.toLowerCase());
        props.showAlert('converted to Upper Case', 'primary');
    }

    const clearText = () => {
        setText(' ');
    }

    const handleCopy = () => {
        const text = document.getElementById('myBox');
        text.select(); // use to select the value in blue form
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert('Copied', 'primary');
    }
    const handleExtraSpace = () => {
        const newtext = text.split(/[ ]+/);
        console.log(newtext);
        // console.log(newtext.join(" "));
        setText(newtext.join(" "));
    }


    return (

        <>
            <div className="mb-3">
                <textarea className="form-control mt-3" value={text} id="myBox" rows="10" autoFocus={true} onChange={changeHandler}></textarea>
            </div>
            <button type="button" onClick={toUpperCase} className="btn btn-primary rotate-hor-center">Convert to Upper Case</button>
            <button type="button" onClick={toLowerCase} className="btn btn-primary mx-2 rotate-hor-center">Convert to lower Case</button>
            <button type="button" onClick={clearText} className="btn btn-primary mx-2 rotate-hor-center">Cleat Text</button>
            <button type="button" onClick={handleCopy} className="btn btn-primary mx-2 rotate-hor-center">Copy Text</button>
            <button type="button" onClick={handleExtraSpace} className="btn btn-primary mx-2 rotate-hor-center">Remove Spaces</button>

            <button type="button" onClick={handleExtraSpace} className="btn btn-primary mx-2 rotate-hor-center"> Rotate</button>


            <h2 className='mt-3'>Your Text Summary</h2>
            <p>You enterered {text.length} character and {text.split(/\s+/).filter((elem) => { return elem.length !== 0 }).length} wrords. </p>
            <p>Apporoxmatley time to read this is {0.008 * text.length} Minutes.</p>
            <h1>Preview</h1>
            <p>{text}</p>
        </>
    )
}

export default TextForm