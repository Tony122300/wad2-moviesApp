import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext} from "../contexts/authContext"
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";



const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    maxWidth: 500,
    media: { height: 500 },
    backgroundColor: "rgb(51,255,51)",
    border: "5px solid darkBlue",
    padding: "40px",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const LoginPage = props => {
  const classes = useStyles();
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(userName, password);
  };

  const { from } = props.location.state || { from: { pathname: "/" } };

  if (context.isAuthenticated === true) {
    return <Redirect to={from} />;
  }
  return (
    <Card className={classes.root} variant="outlined">
      <h2>Login</h2>
      <input id="username" placeholder="user name" onChange={e => {
        setUserName(e.target.value);
      }}></input><br />
      <input id="password" type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></input><br />
      {/* Login web form  */}
      <br>
      </br>
      <button onClick={login}>Log in</button>
      <p>Registered now</p>
     <p><Link to="/signup">Sign Up!</Link></p>
   
    </Card>
  );
};

export default LoginPage;