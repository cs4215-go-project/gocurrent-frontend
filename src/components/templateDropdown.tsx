"use client";

import { useState } from 'react';
import { templates } from '@/lib/templates';

const templateKeys = Object.keys(templates);

export default function CodeTemplateDropdown({ setCode }: { setCode: React.Dispatch<React.SetStateAction<string>> }) {
  const [isOpen, setIsOpen] = useState(false);

  const runTemplate = (template: any) => {
    setIsOpen(false);
    setCode(templates[template]);
  };

  return (
    <div className="relative text-md w-96 ml-12 inline-block justify-center text-left">
      <div className="bg-sky-500">
        <button type="button" className="bg-sky-500 inline-flex transition-transform duration-75 justify-left dark:hover:text-gray-200 rounded-md hover:scale-95" id="options-menu" aria-haspopup="true" aria-expanded="true" onClick={() => setIsOpen(!isOpen)}>
          Templates
          <svg className="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute w-48 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1 max-h-60 overflow-auto " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {templateKeys.map((templateKey) => (
              <a key={templateKey} href="#" className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => runTemplate(templateKey)}>{templateKey}</a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}