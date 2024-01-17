"use client";
import Link from "next/link";
import Image from "next/image";

import * as Styles from "./style";

export default function Home() {
  return (
    <Styles.Container>
      <Styles.Header>
        <h1>CHAT.IO </h1>
        <Styles.List>
          <Styles.ListItem href={"/login"}>Login</Styles.ListItem>
          <Styles.ListItem href={"#"}>Register</Styles.ListItem>
        </Styles.List>
      </Styles.Header>
      <Styles.Main>
        <Styles.Section>
          <h2>Have your</h2>
          <h2>best chat</h2>
          <p>Fast,easy & unlimited team chat</p>

          <div>
            <button>Try it free</button>
          </div>
        </Styles.Section>
        <Styles.Aside>
          <Image
            src={
              "https://images.pexels.com/photos/4492134/pexels-photo-4492134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            width={100}
            height={100}
            alt="talking"
            quality={100}
          />
        </Styles.Aside>
      </Styles.Main>
    </Styles.Container>
  );
}
