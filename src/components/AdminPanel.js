const AdminPanel = () => {
  // rendering lists example
  const products = [
    { title: "phones", id: 1 },
    { title: "laptop", id: 2 },
    { title: "tablets", id: 3 },
  ];

  const listItems = products.map((product) => (
    <li style={{ listStyle: "none" }} key={product.id}>
      {product.title}
    </li>
  ));

  return (
    <div>
      <h1>AdminPanel</h1>

      <p>This is a basic admin panel</p>

      <h2>Rendering lists using map</h2>
      <ul>{listItems}</ul>
    </div>
  );
};
export default AdminPanel;
