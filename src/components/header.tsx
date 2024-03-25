import Link from "next/link"
import { JSX, SVGProps } from "react"

export default function Header() {
  return (
    <header className="bg-sky-500 mb-10">
      <div className="flex items-center w-full h-14 px-4 md:px-10">
        <nav className="flex h-10 items-center space-x-4 text-sm font-medium">
          <div className="relative">
            <Link
              className="flex h-10 items-center rounded-md text-gray-900 hover:text-gray-900 dark:text-gray-100 dark:hover:text-gray-50 hover:scale-105 transition-transform duration-75"
              href="#"
            >
              <HomeIcon className="ml-3"/>
            </Link>
          </div>
        </nav>
        <div className="flex justify-end items-center space-x-4 w-full">
          <div className="flex">
            <Link
            className="flex font-medium items-center text-white dark:text-white tracking-wide border-b-2 border-transparent transition-colors  hover:border-white"
            href="#"
            >
              About
            </Link>
          </div>
          <div className="flex">
            <Link
              className="flex font-medium items-center text-white dark:text-white tracking-wide border-b-2 border-transparent transition-colors  hover:border-white"
              href="#"
            >
              Documentation
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

