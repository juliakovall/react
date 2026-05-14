import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Controlled value:", name);
  };

  return (
    <div>
      <h2>Controlled Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <p>Your name: {name}</p>
    </div>
  );
}

export default ControlledForm;
