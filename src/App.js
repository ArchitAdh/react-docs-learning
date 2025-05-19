import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/MyButton";
import Heading from "./components/Heading";
import AdminPanel from "./components/AdminPanel";
import LoginForm from "./components/LoginForm";
import EventButton from "./components/EventButton";

function App() {
  const isLoggedIn = true;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* everything... */}
      <section className="App-section">
        <MyButton />
        <Heading></Heading>
      </section>

      {/* conditional Rendering */}
      <section className="Conditional-section">
        {isLoggedIn ? <AdminPanel /> : <LoginForm />}
      </section>

      {/* handling events */}
      <EventButton />
    </div>
  );
}

export default App;
