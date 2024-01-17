"use client";
import * as Styles from "./style";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import InputIcon from "../../../components/InputIcon";
import Link from "next/link";

function Login() {
  return (
    <Styles.Container>
      <Styles.Form>
        <div>
          <label htmlFor="">Username</label>
          <InputIcon type="text" placeholder="digite seu email" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <InputIcon type="password" placeholder="digite sua senha" />
        </div>
        <button>Login</button>

        <Link href={"#"}>Esqueceu senha?</Link>
      </Styles.Form>
    </Styles.Container>
  );
}

export default Login;
