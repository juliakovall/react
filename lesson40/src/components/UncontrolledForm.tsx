import { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputRef.current) {
      console.log("Uncontrolled value:", inputRef.current.value);
    }
  };

  return (
    <div>
      <h2>Uncontrolled Form</h2>

      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Enter your city" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
