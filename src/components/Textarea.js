import React, { useState } from 'react'

export default function Textarea(props) {
    const [text, settext] = useState('enter ur text here')
    const upCliked = () => {
        let a = text.toUpperCase();
        settext(a);
    }
    const loClicked = () => {
        let a = text.toLowerCase();
        settext(a);
    }
    const onSwitch = (event) => {
        settext(event.target.value);
    }
    return (
        <div style={props.styles}>
            <div className="container mt-2">
                <div className="mb-3">
                    <textarea style={props.textareaStyle} className="form-control" id="exampleFormControlTextarea1" value={text} onChange={onSwitch} rows="10"></textarea>
                </div>
                <button type="button" class="btn btn-danger" onClick={upCliked}>Convert to UpperCase</button>
                <button type="button" class="btn btn-danger mx-3" onClick={loClicked}>Convert to Lowercase</button>
            </div>
        </div>

    )
}
