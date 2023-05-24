import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/Authprovider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { setLoading, googleSignIn, signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useTitle("| Login");

  useEffect(() => {
    if (location.state && location.state.showToast) {
      toast.warning('To view detailed information, you have to login first', {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
    }
  }, [location.state]);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        console.log(loggedUser);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const createdUser = result.user;
        navigate(from, { replace: true });
        console.log(createdUser);
      })
      .catch((error) => {
        console.error(error);
        if (error.code === "auth/wrong-password") {
          setError("Incorrect password!");
          setLoading(false);
        } else if (error.code === "auth/user-not-found") {
          setError("User not found! Enter a verified email.");
          setLoading(false);
        } else if (error.code === "auth/too-many-requests") {
          setError("Too many unsuccessful attempts! Try again later.");
          setLoading(false);
        }
      });
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container flex flex-col items-center my-20 mx-auto">
      <div className="text-center">
        <h1 className="text-5xl text-pink-700 mb-5 font-bold">Login Now!</h1>
      </div>
      <form
        onSubmit={handleLogin}
        className="card w-2/5 shadow-2xl bg-base-200"
      >
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              required
              name="email"
              placeholder="Enter your email"
              className="border-0 input input-bordered"
            />
          </div>
          <div style={{ position: "relative" }} className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              required
              name="password"
              autoComplete="off"
              placeholder="Enter your password"
              className="border-0 input input-bordered"
            />
            <div
              style={{
                position: "absolute",
                top: "60%",
                right: "15px",
                cursor: "pointer",
                fontSize: "20px",
              }}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          {
            <p>
              <span className="text-red-500">{error}</span>
            </p>
          }
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Login"
              className="btn text-white btn-primary"
            />
          </div>
          <p className="mt-3 ms-3">
            Don&apos;t have an account? Please{" "}
            <Link style={{ textDecoration: "none" }} to="/register">
              <span className="font-bold text-red-500">Register</span>
            </Link>
          </p>
          <div className="flex justify-center mt-4">
            <button
              formNoValidate
              onClick={handleGoogleSignIn}
              className="bg-blue-500 text-white rounded-full btn border-0 btn-info flex items-center gap-2 "
            >
              <FaGoogle />
              <span>Login With Google</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
