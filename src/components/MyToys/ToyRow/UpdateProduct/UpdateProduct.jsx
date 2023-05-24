import "./UpdateProduct.css";

const UpdateProduct = ({ onUpdatePrice, onUpdateQuantity, onUpdateDescription }) => {

  const handleUpdatePrice = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    onUpdatePrice({price});
    form.reset();
  };

  const handleUpdateQuantity = (event) => {
    event.preventDefault();
    const form = event.target;
    const availableQuantity = form.quantity.value;
    onUpdateQuantity({availableQuantity});
    form.reset();
  };

  const handleUpdateDescription = (event) => {
    event.preventDefault();
    const form = event.target;
    const productDescription = form.description.value;
    onUpdateDescription({productDescription});
    form.reset();
  };

  return (
    <div className="modal">
      <div className="update-card card modal-box w-2/5 shadow-2xl bg-base-200">
        <div className="text-center">
          <h1 className="text-4xl text-pink-5=600 mb-5 font-bold">
            Update Product Info
          </h1>
        </div>
        <div className="p-3">
          <form onSubmit={handleUpdatePrice} className="form-control mb-3">
            <label className="label">
              <span className="label-text text-lg">New Price</span>
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                min="0"
                required
                step="any"
                name="price"
                placeholder="$price"
                className="border-0 w-4/5 input input-bordered"
              />
              <input type="submit" value="Update" className="btn" />
            </div>
          </form>
          <form onSubmit={handleUpdateQuantity} className="form-control mb-3">
            <label className="label ">
              <span className="label-text text-lg">Quantity</span>
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                min="1"
                required
                name="quantity"
                placeholder="quantity"
                className="border-0 w-4/5 input input-bordered"
              />
              <input type="submit" value="Update" className="btn" />
            </div>
          </form>
          <form onSubmit={handleUpdateDescription} className="form-control">
            <label className="label">
              <span className="label-text text-lg">Product Description</span>
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                required
                name="description"
                placeholder="Write a short description about your product"
                className="border-0 w-4/5 input input-bordered"
              />
              <input type="submit" value="Update" className="btn" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
