"use client";
import Link from "next/link";
import Image from "next/image";

import * as Styles from "./style";

export default function Home() {
  return (
    <Styles.Container>
      <header>
        <h1>CHAT.IO </h1>
        <ul>
          <Link href={"#"}></Link>
          <Link href={"#"}></Link>
        </ul>
      </header>
      <main>
        <section>
          <h2>Have your</h2>
          <h2>best chat</h2>
          <p>Fast,easy & unlimited team chat</p>

          <button>Try it free</button>
        </section>
        <aside>
          <Image />
        </aside>
      </main>
    </Styles.Container>
  );
}
