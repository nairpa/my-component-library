import { Aside } from "@/common/components/aside/Aside";
import Head from "next/head";
import { PropsWithChildren } from "react";

export default function Sidebar({ children }: PropsWithChildren) {
    return (
      <>
        <Head>
          <title>My component library</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="body">
          <Aside />
          <main>{children}</main>
        </div>
      </>
    )
  }