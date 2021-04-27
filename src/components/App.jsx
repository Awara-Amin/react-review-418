import React from "react";
import Form from "./Form";
import Input from "./Input";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {userIsRegistered === true ? <Input /> : <Form />}
    </div>
  );
}

export default App;
