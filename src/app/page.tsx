"use client";

import { useState } from "react";
import Image from "next/image";
import Editor from "@/components/editor";
import Header from "@/components/header";

const defaultProgram: string = "package main\n\nfunc main() {\n\t\n}\n";

export default function Home() {
  const [code, setCode] = useState<string>(defaultProgram);
  return (
    <>
      <Header setCode={setCode} />
      <div className="flex min-h-screen flex-col items-center justify-between mt-[-40px] p-16" style={{ backgroundColor: '#202224' }}>
        <div className="w-full items-center justify-between text-sm lg:flex mt-[-20px]">
            <div className="flex flex-col gap-4 lg:w-full">
              <div className="flex items-center gap-4">
                <Image
                  src="/go-redeyes.png"
                  alt="GoCurrent Logo"
                  width={100}
                  height={100}
                  className="flex items-center justify-center w-24 h-24 p-4"
                /> 
                <div>
                  <h1 className="text-4xl font-extrabold text-gray-50" style={{ color: '#02dcff'}}>
                    GoCurrent
                  </h1>
                  <p className="text-gray-400 mt-2">
                    An online playground for a concurrent sublanguage of Go.
                  </p>
                </div>
              </div>
              <div className="flex h-auto w-full">
                <Editor code={code} setCode={setCode} />
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

