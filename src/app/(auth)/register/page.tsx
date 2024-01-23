"use client";
import * as Styles from "../login/style";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

type FormValues = {
  email: string;
  password: string;
  username: string;
};

function Register() {
  const schema = z.object({
    email: z.string().min(1, "can't be void").email(),
    password: z.string().min(6, "password min 6 characters"),
    username: z.string().min(4, "username min 4 characters"),
  });

  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      username: "",
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
          <label htmlFor="Username">Username</label>
          <Styles.Input
            id="username"
            {...register("username")}
            type="text"
            placeholder="digite seu username"
          />
          <p style={{ color: "red" }}>{errors.username?.message}</p>
        </div>
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
        <button>Register</button>
      </Styles.Form>
    </Styles.Container>
  );
}

export default Register;
