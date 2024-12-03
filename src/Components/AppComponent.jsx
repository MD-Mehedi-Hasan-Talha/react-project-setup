export default function AppComponent() {
  return (
    <>
      <div>
        <h1 className="text-3xl text-center text-red-400">
          This is a Standard React application setup.
        </h1>
        <p className="text-xl text-center mt-4">
          You can start editing the code in <code>src/App.jsx</code>.
        </p>
        <div className="mt-4 pl-8">
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
      </div>
    </>
  );
}
