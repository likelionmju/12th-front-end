import './Viewer.css';

const Viewer = ({count}) => {
    // 사용할 함수, 기능, state, hook

    return (
        <div className="viewer">
            <div className='c_count'>현재 카운트 :</div>
            <div className='count'>{count}</div>
        </div>
)};

export default Viewer;