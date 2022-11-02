import { Alert, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import Login from "./Login";
import "./App.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      // localStorage.setItem("Email", JSON.stringify(email));
      // localStorage.setItem("Password", JSON.stringify(password));
      // console.log("saved in local storage");
      setLogin(!login);

      navigate("/Api");
    }
  };

  const handleClick = () => {
    setLogin(!login);
  };
  return (
    <div>
      {Login ? (
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="form.group">
            <Input
              width="20rem"
              margin="10px"
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
            />
            <br></br>
            <Input
              width="20rem"
              margin="10px"
              type="email"
              className="form-control"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>

            <Input
              width="20rem"
              margin="10px"
              type="password"
              className="form-control"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>

            <Button type="submit" className="btn">
              Register
            </Button>
            <p onClick={handleClick}>
              Already register <a href="./Login"> login? </a>
            </p>
          </div>
          {flag && <Alert color="crimson">Please Fill Every Field</Alert>}
        </form>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Home;
