import './TodoItem.css';

const TodoItem = ({
    id,
    isDone,
    content,
    date,
    onUpdate,
    onDelete
}) => {
    //onUpdate 함수를 호출하고 인수로 아이디를 전달해주도록 설정
    const onChangeCheckbox = () => {
        onUpdate(id)
    };

    const onDeleteCheckbox = () => {
        onDelete(id)
    };

    return(
        <div className="TodoItem">
            <input
            onChange={onChangeCheckbox}
            readOnly
            checked={isDone}
            type="checkbox"
            />
            <div className="content">{content}</div>
            <div className="date">
                {new Date(date).toLocaleDateString()}
            </div>
            <button onClick={onDeleteCheckbox}>삭제</button>
        </div>
    );
};

export default TodoItem;