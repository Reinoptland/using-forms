import { useState } from "react";
import "./App.css";
const correctEmail = "alina@alina.com";
const correctPassword = "abcd1234";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("STATE:", email, password);
  function submitForm(event) {
    console.log("FORM SUBMIT:", event);
    event.preventDefault();
    if (email === correctEmail && password === correctPassword) {
      console.log("Welcome Alina!");
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={submitForm}>
          <label htmlFor="email">
            Email
            <input
              name="email"
              type="text"
              value={email}
              onChange={(event) =>
                // console.log("EVENT Target", event.target.value)
                setEmail(event.target.value)
              }
            />
            <p>{email.includes("@") ? "" : "Hey, remember the @"}</p>
          </label>
          <label htmlFor="password">
            Password
            <input
              name="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <input type="submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
