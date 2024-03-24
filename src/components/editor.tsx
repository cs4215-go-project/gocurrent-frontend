"use client";

import { useState } from "react"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaPlay } from "react-icons/fa"
import { AiOutlineReload } from "react-icons/ai"
// import { UnControlled as CodeMirror } from "react-codemirror2"

const defaultProgram: string = "package main\n\nimport \"fmt\"\n\nfunc main() {\n\tfmt.Println(\"Hello, World!\")\n}";

export default function Editor() {
    const [code, setCode] = useState<string>(defaultProgram)
    const [output, setOutput] = useState<string>('Click "Go!" to run your code!');

    const compileAndRun = () => {
        setTimeout(() => {
            setOutput('Hello, World!');
        }, 1000);
    }

    const resetCode = () => {
        setCode(defaultProgram);
    }

    const renderLineNumber = (lines: string[]) => {
        return lines.map((_, index) => (
            <span key={index} className="select-none opacity-50 flex">{index + 1}</span>
        ))
    }

    return (
        <div className="grid grid-cols-12 items-start gap-6 h-screen w-full mx-auto">
            <div className="flex flex-col col-span-7">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-bold" style={{ color: '#02dcff'}}>Code</CardTitle>
                        <CardDescription className="text-sm">Run your Go code here!</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 mt-[-20px] h-[400px]">
                        <textarea spellCheck="false" value={code} onChange={(e) => setCode(e.target.value)} className="w-full h-full !rounded-lg font-mono p-8 bg-gray-900 text-gray-50 resize-none" />
                    </CardContent>
                </Card>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2">
                    <Button className="!text-white transform hover:scale-95 border border-transparent hover:border-gray-300 hover:bg-gray-100" style={{ backgroundColor: '#007d9c' }} onClick={compileAndRun}>
                        <FaPlay className="mr-1" /> 
                        Go!
                    </Button>
                    <Button className="!text-white transform hover:scale-95 border border-transparent hover:border-gray-300 hover:bg-gray-100" style={{ backgroundColor: '#007d9c' }} onClick={resetCode}>
                        <AiOutlineReload className="mr-1" />
                        Reset
                    </Button>
                </div>
            </div>
            <div className="col-span-5">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-bold" style={{ color: '#02dcff'}}>Output</CardTitle>
                        <CardDescription className="text-sm">View the compilation and execution output.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 h-[200px]">
                        <div style={{ height: 200 }} className="font-mono p-8 mt-[-20px]">{output}</div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

