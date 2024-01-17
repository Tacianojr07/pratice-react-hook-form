"use client";
import * as Styles from "./style";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import InputIcon from "../../../components/InputIcon";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  email: string;
  password: string;
};

function Login() {
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { register, handleSubmit, getValues, control, formState } = form;
  const { errors } = formState;

  function oSbumit(data: FormValues) {
    console.log(data);
  }

  return (
    <Styles.Container>
      <Styles.Form onSubmit={handleSubmit(oSbumit)}>
        <div>
          <label htmlFor="email">Email</label>
          <Styles.Input
            id="email"
            {...register("email")}
            type="text"
            placeholder="digite seu email"
          />
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Styles.Input
            id="password"
            {...register("password")}
            type="password"
            placeholder="digite sua senha"
          />
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </div>
        <button>Login</button>

        <Link href={"#"}>Esqueceu senha?</Link>
      </Styles.Form>
      <DevTool control={control} />
    </Styles.Container>
  );
}

export default Login;
