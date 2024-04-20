# GoCurrent Frontend

This project is the [Next.js](https://nextjs.org/) frontend for the CS4215 AY23/24 Sem 2 project on concurrency. It is a web-based implementation of a sublanguage of Go which supports sequential Go constructs, memory management, and most importantly Go's concurrent programming features.

## Getting Started

1. Clone the `go-current-frontend` repository with the following command:

```
git clone https://github.com/cs4215-go-project/gocurrent-frontend.git
```

2. Launch a terminal and navigate to the `gocurrent-frontend` directory.

3. Build the project with the following command:

```
npm install
```

4. Run the GoCurrent development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:4000](http://localhost:4000) with your browser to run the application.


## Using Code Templates

The GoCurrent frontend provides code templates for users to quickly get started with writing GoCurrent code. 

To use a code template, click on the "Templates" button in the top left corner of the editor. 

This will open a dropdown menu with a list of available code templates. Click on a template to insert it into the editor. 

You can then modify the code as needed before running it.

## Changing Heap Size

The current default heap size is **640 words** as specified by the `MEMORY_SIZE` constant in `src/components/Editor.tsx`. 

To change the heap size, modify the value of `MEMORY_SIZE` to the desired number of words.

<!-- You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font. -->

<!-- ## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome! -->

<!-- ## Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->
