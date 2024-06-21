import './Controller.css';

const Controller = ({onClickButton}) => {
    // 사용할 함수, 기능, state, hook
    return (
        <div className="controller">
            <button onClick={() => {
                onClickButton(-1)
            }}>-1</button>
            <button onClick={() => {
                onClickButton(-10)
            }}>-10</button>
            <button onClick={() => {
                onClickButton(-100)
            }}>-100</button>
            <button onClick={() => {
                onClickButton(+100)
            }}>+100</button>
            <button onClick={() => {
                onClickButton(+10)
            }}>+10</button>
            <button onClick={() => {
                onClickButton(+1)
            }}>+1</button>
        </div>
)};

export default Controller;