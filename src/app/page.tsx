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
          <Styles.ListItem href={"#"}>Login</Styles.ListItem>
          <Styles.ListItem href={"#"}>Register</Styles.ListItem>
        </Styles.List>
      </Styles.Header>
      <Styles.Main>
        <section>
          <h2>Have your</h2>
          <h2>best chat</h2>
          <p>Fast,easy & unlimited team chat</p>

          <button>Try it free</button>
        </section>
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
          <p>
            have fun chatting with your friends and family with our app you can
            send emojis and photos come create your account and enjoy
          </p>
        </Styles.Aside>
      </Styles.Main>
    </Styles.Container>
  );
}
