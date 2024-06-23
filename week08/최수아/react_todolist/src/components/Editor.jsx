import './Editor.css'
import { useState, useRef } from 'react';

const Editor = ({onCreate}) => {

    const inputRef = useRef("");

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    }

    const [content, setContent] = useState("");

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onSubmit = () => {
        if (content === "") {
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };

        return(
            <div className="Editor">
                <input 
                ref={inputRef}
                value ={content}
                onKeyDown={onKeyDown}
                onChange={onChangeContent}
                placeholder="새로운 할 일 작성하기"/>
                <button onClick={onSubmit}>추가</button>
            </div>
        )
};

export default Editor;