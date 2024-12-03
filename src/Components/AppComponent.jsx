export default function AppComponent() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-center text-red-400">
          This is a Standard React application setup.
        </h1>
        <p className="text-xl text-center mt-4">
          You can start editing the code in <code>src/App.jsx</code>.
        </p>
        <div className="mt-4 pl-8">
          <div className="mt-4">
            <p>
              💫 Github repo:{" "}
              <a
                href="https://github.com/MD-Mehedi-Hasan-Talha/react-project-setup.git"
                className="text-blue-600 hover:underline"
              >
                https://github.com/MD-Mehedi-Hasan-Talha/react-project-setup.git
              </a>
            </p>
          </div>

          <div className="mt-4">
            <p>Here I&apos;ve set up some packages. list below:</p>
            <ul className="mt-4 pl-4 list-disc text-blue-600">
              <li className="hover:underline">
                <a href="https://reactrouter.com/home">react-ruoter-dom</a>
              </li>
              <li className="hover:underline">
                <a href="https://tailwindcss.com/">tailwind css</a>
              </li>
              <li className="hover:underline">
                <a href="https://axios-http.com/docs/intro">axios</a>
              </li>
              <li className="hover:underline">
                <a href="https://react-hook-form.com/get-started">
                  react-hook-form
                </a>
              </li>
              <li className="hover:underline">
                <a href="https://www.npmjs.com/package/react-error-boundary">
                  react-error-boundary
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h2 className="text-xl font-semibold">How to run</h2>
            <p className="mt-4">
              Please follow the below instructions to run different branches of
              this repository in your machine:
            </p>
            <ul className="list-decimal mt-4 pl-8">
              <li className="py-1">
                Login to your GitHub account in your Terminal.
              </li>
              <li className="py-1">
                Clone this repository -{" "}
                <code className="p-1 bg-gray-200 border rounded">
                  sh git clone
                  https://github.com/MD-Mehedi-Hasan-Talha/react-project-setup.git
                </code>
              </li>
              <li className="py-1">
                Go to the cloned project directory -{" "}
                <code className="p-1 bg-gray-200 border rounded">
                  {" "}
                  sh cd ./react-project-setup{" "}
                </code>
              </li>
              <li className="py-1">
                Install all required packages -{" "}
                <code className="p-1 bg-gray-200 border rounded"> npm i </code>
              </li>
              <li className="py-1">
                Start your development server -{" "}
                <code className="p-1 bg-gray-200 border rounded">
                  {" "}
                  npm run dev{" "}
                </code>
              </li>
              <li className="py-1">
                Open your browser and visit -{" "}
                <code className="p-1 bg-gray-200 border rounded">
                  {" "}
                  http://localhost:5173{" "}
                </code>{" "}
                or your corresponding port.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
