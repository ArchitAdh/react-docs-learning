const EventButton = () => {
  function handleClick() {
    alert("you clicked me");
  }
  return (
    <button className="button" onClick={handleClick}>
      Click me
    </button>
  );
};
export default EventButton;
