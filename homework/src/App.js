import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");

  const headerMessage = "Hello how are you doing!!";
  const fullName = `${firstName} ${middleName} ${lastName}`;
  const greetingMessage = `Nice to meet you ${fullName}`;

  return (
    <div className="App">
      <>
        <h1>{headerMessage}</h1>

        <form>
          <div>
            <input
              type="text"
              value={firstName}
              placeholder="FirstName"
              onChange={(e) => {
                setFirstName(e.target.value);
                e.preventDefault();
              }}
            />
            <button>Submit</button>
          </div>

          <div>
            <input
              type="text"
              value={middleName}
              placeholder="MiddleName"
              onChange={(e) => {
                setMiddleName(e.target.value);
                e.preventDefault();
              }}
            />
            <button>Submit</button>
          </div>
          <div>
            <input
              type="text"
              value={lastName}
              placeholder="LastName"
              onChange={(e) => {
                setLastName(e.target.value);
                e.preventDefault();
              }}
            />
            <button>Submit</button>
          </div>
        </form>
        <h2>{greetingMessage}</h2>
      </>
    </div>
  );
}

export default App;
