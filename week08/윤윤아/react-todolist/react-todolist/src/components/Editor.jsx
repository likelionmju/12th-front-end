import './Editor.css';
import { useState, useRef } from 'react';

const Editor = ({onCreate}) => {
    //input 태그의 값을 저장해줄 state
const [content, setContent] = useState("");

//입력 값이 바뀌면 업데이트를 해줘야하기 때문에 상태 변화 함수를 사용하여 업데이트
const onChangeContent = (e) => {
    setContent(e.target.value);
};

const inputRef = useRef();

const onSubmit = () => {
    if(content === "") {
        inputRef.current.focus();
        return;
    };
    onCreate(content);
    //onCreate함수 호출 후 setContent 빈 문자열로 초기화
    setContent("");
};

//엔터키를 누르면 onSubmit 호출
const onKeydown = (e) => {
    if(e.keyCode === 13) {
        onSubmit()
    };
};

    return(
        <div className="Editor">
            <input
            ref={inputRef}
            value={content}
            onKeyDown={onKeydown}
            onChange={onChangeContent}
            placeholder="새로운 할 일 작성하기"
            />
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default Editor;