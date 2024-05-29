import "./Viewer.css";
const Viewer = ({ count }) => {
  return (
    <div className="viewer">
      <div>현재 카운트 :</div>
      <div className="count"> {count}</div>
    </div>
  );
};

export default Viewer;
