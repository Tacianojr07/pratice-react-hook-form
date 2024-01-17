"use client";
import * as Styles from "./style";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import InputIcon from "../../../components/InputIcon";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

type FormValues = {
  email: string;
  password: string;
};

function Login() {
  const schema = z.object({
    email: z.string().min(1, "can't be void").email(),
    password: z.string().min(6, "can't be void"),
  });

  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  const { register, handleSubmit, getValues, control, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  function oSbumit(data: FormValues) {}

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

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
          <p style={{ color: "red", fontSize: "11" }}>
            {errors.password?.message}
          </p>
        </div>
        <button>Login</button>

        <Link href={"#"}>Esqueceu senha?</Link>
      </Styles.Form>
    </Styles.Container>
  );
}

export default Login;
