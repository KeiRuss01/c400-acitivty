import { useState } from "react";
import Button from './button.jsx'

function Register() {
  const [password, setPassword] = useState("");

  const Submit = (event) => {
    event.preventDefault();

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    alert("Registration submitted successfully!");
  };

  const handleReset = () => {
    setPassword("");
  };

  return (
      <form onSubmit={Submit} onReset={handleReset}>
        <label>Full Name: </label>
            <input type="text" id="name" required/>
        <label>Student ID: </label>
            <input type="text" id="studentId" required/>
        <label>Email: </label>
            <input type="email" id="email" required/>
        <label>Course: </label>
            <select name="course" id="course">
                <option value="">Select</option>
                <option value="BSIT">BSIT</option>
                <option value="BSCS">BSCS</option>
                <option value="BSIS">BSIS</option>
                <option value="BSCP">BSCP</option>
            </select>
        <label>Password: </label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        
        <div style={{ marginTop: "10px" }}>
          <Button />
        </div>
      </form>
  );
}

export default Register;