import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigation = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    let obj = {
      name,
      email,
      password,
    };

    axios
      .post(`https://unit-5-eval1-default-rtdb.firebaseio.com/user.json`, obj)
      .then((res) => {
        console.log(res);
        alert("signup sucessfully");
        navigation("/login");
      });
  };
  console.log(name, email, password);

  return (
    <div>
      <form action="" onSubmit={handlesubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Signup;
