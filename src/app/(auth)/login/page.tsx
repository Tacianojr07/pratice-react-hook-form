"use client";
import * as Styles from "./style";

function Login() {
  return (
    <Styles.Container>
      <Styles.Form>
        <div>
          <label htmlFor="">Username</label>
          <Styles.Input type="text" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <Styles.Input type="password" />
        </div>
        <button>Login</button>
      </Styles.Form>
    </Styles.Container>
  );
}

export default Login;
