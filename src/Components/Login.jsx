import React, { useContext, useState } from "react";
import axios from "axios";
import { LoginContext } from "../Context/Loginauth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let { setLogin } = useContext(LoginContext);
  let navigation = useNavigate();
  const handlesuvmit = (e) => {
    e.preventDefault();
    let uname = email;
    let upass = password;
    axios
      .get(`https://unit-5-eval1-default-rtdb.firebaseio.com/user.json`)
      .then((res) => {
        let dataa = Object.entries(res.data).filter(([key, val]) => {
          return val.email == uname && val.password == upass;
        });
        if (dataa.length > 0) {
          alert("sucessfully login");
          navigation("/");
        } else {
          alert("provide coreect email and password");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form action="" onSubmit={handlesuvmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
