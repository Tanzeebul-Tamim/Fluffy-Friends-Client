import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  useTitle("| Add a Toy");

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const photoURL = form.photo.value;
    const productName = form.productName.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const category = form.category.value;
    const price = parseFloat(form.price.value);
    const rating = parseFloat(form.rating.value);
    const availableQuantity = parseFloat(form.quantity.value);
    const productDescription = form.description.value;
    const newToy = {
      photoURL,
      productName,
      sellerName,
      sellerEmail,
      category,
      price,
      rating,
      availableQuantity,
      productDescription
,
    };
    fetch('https://toy-marketplace-server-puce-ten.vercel.app/allToys', {   
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(newToy)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast.success(`${productName} has been added!`, {
          position: "top-left",
          autoClose: 1100,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
      });
      form.reset();
      setTimeout(function() {
        window.location.href = "/myToys";
      }, 2000);
      })
  };

  return (
    <div className="my-10 flex flex-col items-center container mx-auto">
      <div className="text-center">
        <h1 className="text-5xl text-pink-700 mb-5 font-bold">Add a New Toy</h1>
      </div>
      <form
        onSubmit={handleAddToy}
        className="card w-2/5 shadow-2xl bg-base-200"
      >
        <div className="card-body">
          <div className="grid grid-col-2">
            <div className="grid grid-cols-2 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  required
                  name="photo"
                  placeholder="Enter your product photo URL"
                  className="border-0 input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  required
                  name="productName"
                  placeholder="Enter your product name"
                  className="border-0 input input-bordered"
                />
              </div>
            </div>
            <div className="grid gap-3 grid-cols-2">
              <div className="form-control">
                <label style={{ display: "block" }} className="label">
                  <span className="label-text">Seller Name</span>
                </label>
                <input
                  type="text"
                  required
                  defaultValue={user.displayName}
                  readOnly
                  name="sellerName"
                  placeholder="Enter your name"
                  className="border-0 input input-bordered"
                />
              </div>
              <div className="form-control">
                <label style={{ display: "block" }} className="label">
                  <span className="label-text">Seller Email</span>
                </label>
                <input
                  type="email"
                  required
                  defaultValue={user.email}
                  readOnly
                  name="sellerEmail"
                  placeholder="Enter your email"
                  className="border-0 input input-bordered"
                />
              </div>
            </div>
            <div className="form-control">
              <label style={{ display: "block" }} className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                name="category"
                style={{ cursor: "pointer", outline: "none", border: "none" }}
                className="border-0 input input-bordered"
              >
                <option value="" defaultValue hidden>
                  Select a category
                </option>
                <option className="text-slate-800 mb-3" value="Teddy Bear">
                  Teddy Bear
                </option>
                <option className="text-slate-800" value="Fantasy Creature">
                  Fantasy Creature
                </option>
                <option className="text-slate-800" value="Farm Animal">
                  Farm Animal
                </option>
                <option className="text-slate-800" value="Dinosaur">
                  Dinosaur
                </option>
                <option className="text-slate-800" value="Sea Creature">
                  Sea Creature
                </option>
                <option className="text-slate-800" value="Jungle Animal">
                  Jungle Animal
                </option>
                <option className="text-slate-800" value="Robot">
                  Robot
                </option>
              </select>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  min="0"
                  required
                  step="any"
                  name="price"
                  placeholder="$Product-price"
                  className="border-0 input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  min="0"
                  max="5"
                  required
                  step="any"
                  name="rating"
                  placeholder="Rating (0-5)"
                  className="border-0 input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text">Available Quantity</span>
                </label>
                <input
                  type="number"
                  min="1"
                  required
                  name="quantity"
                  placeholder="Product-quantity"
                  className="border-0 input input-bordered"
                />
              </div>
            </div>
            <div className="form-control">
              <label style={{ display: "block" }} className="label">
                <span className="label-text">Product Description</span>
              </label>
              <input
                required
                name="description"
                placeholder="Write a short description about your product"
                className="border-0 input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Add Product"
              className="btn text-white btn-primary"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
