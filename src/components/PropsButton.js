const PropsButton = ({ count, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      Clicked {count} times
    </button>
  );
};
export default PropsButton;
