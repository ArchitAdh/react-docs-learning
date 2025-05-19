const Heading = () => {
  const user = {
    name: "Ross",
    imageUrl:
      "https://images.unsplash.com/photo-1498100152307-ce63fd6c5424?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageSize: 10,
  };

  return (
    <>
      <h1> {user.name} </h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt="user"
        style={{
          width: `${user.imageSize}rem`,
          height: `${user.imageSize}rem`,
        }}
      />
    </>
  );
};

export default Heading;
