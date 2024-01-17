"use client";
import * as Styles from "./style";

export default function HeaderHome() {
  return (
    <Styles.Header>
      <h1>CHAT.IO </h1>
      <Styles.List>
        <Styles.ListItem href={"/login"}>Login</Styles.ListItem>
        <Styles.ListItem href={"/register"}>Register</Styles.ListItem>
      </Styles.List>
    </Styles.Header>
  );
}
