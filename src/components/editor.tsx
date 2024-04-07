"use client";

import { useState } from "react"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaPlay } from "react-icons/fa"
import { AiOutlineReload } from "react-icons/ai"
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-golang"
import "ace-builds/src-noconflict/theme-solarized_dark"
import "ace-builds/src-noconflict/ext-language_tools";

import parseCompileAndRun from "go-slang/src/vm/machine";

const defaultProgram: string = "package main\n\nimport \"fmt\"\n\nfunc main() {\n\t1 + 2\n}\n";
const outputPrompt: string[] = ['Click "Go!" to run your code!'];

const NODE_SIZE: number = 16;
const MEMORY_SIZE: number = 128 * NODE_SIZE;

export default function Editor() {
    const [code, setCode] = useState<string>(defaultProgram);
    const [output, setOutput] = useState<string[]>(outputPrompt);

    const compileAndRun = () => {
        parseCompileAndRun(MEMORY_SIZE, code, setOutput);
    }

    const resetCode = () => {
        setCode(defaultProgram);
        setOutput(outputPrompt);
    }

    const aceOptions = {
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: true,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 4,
    }

    return (
      <div className="grid grid-cols-12 items-start gap-6 w-full mx-auto">
        <div className="flex flex-col col-span-7">
          <Card>
            <CardHeader className="ml-2">
              <CardTitle className="text-lg font-bold" style={{ color: '#02dcff'}}>Code</CardTitle>
              <CardDescription className="text-sm">Run your Go code here.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 mt-[-23px] h-[400px]">
              <AceEditor
                  mode="golang"
                  theme="solarized_dark"
                  value={code}
                  onChange={setCode}
                  name="editor"
                  width="100%"
                  height="100%"
                  fontSize={14}
                  showPrintMargin={true}
                  showGutter={true}
                  highlightActiveLine={true}
                  setOptions={aceOptions}
                  className="!rounded-lg"
              />
            </CardContent>
          </Card>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2 mt-3">
            <Button className="!text-white font-bold transform active:scale-95 transition duration-75 !bg-sky-500 hover:bg-sky-700" onClick={compileAndRun}>
              <FaPlay className="mr-1" /> 
              Go!
            </Button>
            <Button className="!text-white font-bold transform active:scale-95 transition duration-75 !bg-sky-500 hover:bg-sky-700" onClick={resetCode}>
              <AiOutlineReload className="mr-1" />
              Reset
            </Button>
          </div>
        </div>
        <div className="col-span-5">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold" style={{ color: '#02dcff'}}>Output</CardTitle>
              <CardDescription className="text-sm">View compilation and execution output.</CardDescription>
            </CardHeader>
            <CardContent className="h-[375px]">
              <div style={{ height: 350 }} className="font-mono whitespace-pre-wrap overflow-y-auto">{output.join('\n')}</div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
}

