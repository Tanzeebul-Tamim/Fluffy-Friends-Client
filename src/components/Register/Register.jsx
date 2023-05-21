import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/Authprovider";
import { toast } from "react-toastify";

const Register = () => {
 
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { createUser, setLoading, logOut } = useContext(AuthContext);
  useTitle("| Register");

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, password, email);

    setError("");

    if (password.length < 6) {
        setError ("Password must be at least 6 characters long!");
        return;
    }
    else if (!/(?=.*[A-Z])/.test(password)) {
        setError ("Password must contain at least one uppercase letter");
        return;
    }
    else if (!/(?=.*\d)/.test(password)) {
        setError ("Password must contain at least one digit");
        return;
    }
    else if (!/(?=.*[!@#$%^&*()_\-+={}[\]\\|:;"'<>,.?/~])/.test(password)) {
        setError ("Password must contain at least one special character");
        return;
    }

    createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            toast.success('Registration successful! You can now login.', {
                position: "top-center",
                autoClose: 1100,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });          
            logOut();  
            setSuccess("Registration Successful!");
            setError("");       
            setTimeout(function() {
                window.location.href = "/login";
              }, 2000);
        })
        .catch(error => {
            console.error(error);
            if (error.message.includes("email")) {
                setError("This email is already in use. Please use a different email.");
                setSuccess("");
                setLoading(false);
            }
        })      
  }
    
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
      <div className="container flex flex-col items-center my-10 mx-auto">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-pink-700 mb-5 font-bold">Register Now!</h1>
        </div>
        <form onSubmit={handleRegister} className="card w-2/5 shadow-2xl bg-base-200">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                required
                name="name"
                placeholder="Enter your name"
                className="border-0 input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                required
                name="photo"
                placeholder="Enter your photo url"
                className="border-0 input input-bordered"
              />
            </div>
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
                    <span className="text-green-700">{success}</span>
                </p>
            }

            <div className="form-control mt-6">
              <input type="submit" value="Register" className="btn text-white btn-primary"/>
            </div>
          </div>
        </form>
      </div>
  );
};

export default Register;
