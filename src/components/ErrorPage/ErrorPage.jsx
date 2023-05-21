import { Link, useRouteError } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ErrorPage = () => {

    const { error, statusText } = useRouteError();
    useTitle("| Error");

  return (
    <div
      style={{ fontFamily: "Josefin Sans" }}
      className="my-4 flex flex-col items-center relative justify-center"
    >
        <h1 className="text-pink-500 text-3xl font-bold">{statusText}</h1>
        <p className="text-pink-700 text-xl">{error?.message}</p>
      <img
        style={{ width: "75%" }}
        src="https://i.ibb.co/PhfQR74/modern-flat-design-illustration-of-404-error-page-free-vector.png"
        alt=""
      />
      <Link to="/">
        <button className="text-pink-600 font-bold absolute bottom-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Back to Homepage
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
