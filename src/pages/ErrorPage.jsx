import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center bg-slate-800 text-white">
      <h1 className="text-4xl mb-5">Oops! Something went wrong.</h1>
      {error && (
        <div>
          <p className="text-lg text-red-600"><strong>Error:</strong> {error.status || "Unknown Status"}</p>
          <p className="text-xl mt-2 mb-5"><strong>Message:</strong> {error.statusText || error.message}</p>
        </div>
          )}
          <Link to={'/'} className="bg-slate-600 px-5 py-3 rounded-md">Back to Home</Link>
    </div>
  );
}

export default ErrorPage;

