import Link from "next/link"
import { JSX, SVGProps } from "react"
import CodeTemplateDropdown from "./templateDropdown"

export default function Header({ setCode }: { setCode: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <header className="bg-sky-500 mb-10">
      <div className="flex items-center w-full h-14 px-4 md:px-10">
        <nav className="flex h-10 items-center space-x-4 text-sm font-medium">
          <div className="relative">
            <Link
              className="flex h-10 items-center rounded-md text-gray-900 hover:text-gray-900 dark:text-gray-100 dark:hover:text-gray-50 hover:scale-95 transition-transform duration-75"
              href="/"
            >
              <HomeIcon className="ml-3"/>
            </Link>
          </div>
        </nav>
        <CodeTemplateDropdown setCode={setCode} />
        <div className="flex justify-end items-center space-x-4 w-full">
          <div className="flex justify-center mr-1 hover:scale-95 transition-transform duration-75">
            <Link
              target="_blank"
              className="flex items-center text-white dark:text-white tracking-wide dark:hover:text-gray-200"
              href="https://github.com/cs4215-go-project"
            >
              <GithubIcon className="h-4 w-4 mr-1"/>
              GitHub
            </Link>
          </div>
          <div className="flex justify-center mr-1 hover:scale-95 transition-transform duration-75">
            <Link
            target="_blank"
            className="flex items-center text-white dark:text-white tracking-wide dark:hover:text-gray-200"
            href="https://docs.google.com/document/d/1LugQ8D__eP2CPGEj4_1_hYqJTPoAyQsod_JTLu45F3k/edit?usp=sharing"
            >
              <FilesIcon className="h-4 w-4 mr-1"/>
              Docs
            </Link>
          </div>
          <div className="flex justify-center hover:scale-95 transition-transform duration-75">
            <Link
              target="_blank"
              className="flex items-center text-white dark:text-white tracking-wide dark:hover:text-gray-200"
              href="#"
            >
              <InfoIcon className="h-4 w-4 mr-1"/>
              About
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function FilesIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" />
      <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" />
      <path d="M15 2v5h5" />
    </svg>
  )
}


function GithubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function InfoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}

