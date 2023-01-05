import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
    }

    const handleClearClick = () =>{
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared!","success");
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied","success");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState(''); //hook

    return (
        <>
        <div className="container">
            <h1 style={{color: props.mode ==='dark'?'white':'#343a40'}}>{props.heading}</h1>
            <div className = "mb-3">
             <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#343a40':'white' ,color: props.mode ==='dark'?'white':'#343a40'}} id="myBox" rows="8"></textarea> 
            </div>
            <button disabled={text.length === 0} className="btn btn-warning mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button disabled={text.length === 0} type="button" className="btn btn-success mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length === 0} type="button" className="btn btn-danger mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-2" style={{color: props.mode ==='dark'?'white':'#343a40'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Nothing to preview'}</p>
        </div>
        </>
    )
}
