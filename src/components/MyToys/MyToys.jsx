import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/Authprovider";
import { FaPen } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  useTitle("| My Toys");

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/allToys/email/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
    setIsLoading(false);
  }, []);

  if (myToys.length === 0 || !myToys) {
    return (
      <div className="container flex flex-col items-center my-36 mx-auto">
        <h1 className="text-5xl text-pink-500 mb-5 font-bold">
          No Products Added Yet
        </h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div
        style={{ height: "700px" }}
        className="flex justify-center items-center"
      >
        <ReactLoading
          type={"balls"}
          color={"#f13372"}
          height={"20%"}
          width={"20%"}
        />
      </div>
    );
  } else {
    return (
      <div className="container flex flex-col items-center my-20 mx-auto">
        <div className="text-center">
          <h1 className="text-5xl text-pink-600 mb-5 font-bold">My Toys</h1>
        </div>
        <table className="mt-5 min-w-full divide-y divide-pink-300">
          <thead className="bg-pink-300">
            <tr className="text-pink-700">
              <th
                scope="col"
                className="px-6 py-3 text-center text-md font-bold uppercase tracking-wider"
              >
                <div>Image</div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-md font-bold uppercase tracking-wider"
              >
                Product Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-md font-bold uppercase tracking-wider"
              >
                Seller
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-md font-bold uppercase tracking-wider"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-md font-bold uppercase tracking-wider"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-md font-bold uppercase tracking-wider"
              >
                Available Quantity
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-md font-bold uppercase tracking-wider"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-transparent divide-y divide-pink-300">
            {myToys.map((toy) => {
              const handleDelete = (id) => {
                Swal.fire({
                  title: `Are you sure you want to delete ${toy.productName}?`,
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                  if (result.isConfirmed) {
                    fetch(`http://localhost:5000/allToys/id/${id}`, {
                      method: "DELETE",
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        if (data.deletedCount > 0) {
                          Swal.fire(
                            "Deleted!",
                            "Your product has been deleted.",
                            "success"
                          );
                          const remaining = myToys.filter(
                            (toy) => toy._id !== id
                          );
                          setMyToys(remaining);
                        }
                      });
                  }
                });
              };

              return (
                <tr className="text-pink-700" key={toy._id}>
                  <td scope="col" className="px-6 py-3">
                    <img
                      className="mask mask-squircle"
                      style={{ height: "70px", width: "70px" }}
                      src={toy.photoURL}
                    />
                  </td>
                  <td
                    scope="col"
                    className="px-6 py-3 text-center text-md font-medium uppercase tracking-wider"
                  >
                    {toy.productName}
                  </td>
                  <td
                    scope="col"
                    className="px-6 py-3 text-center text-md font-medium uppercase tracking-wider"
                  >
                    {toy.sellerName}
                  </td>
                  <td
                    scope="col"
                    className="px-6 py-3 text-center text-md font-medium uppercase tracking-wider"
                  >
                    {toy.category}
                  </td>
                  <td
                    scope="col"
                    className="px-6 py-3 text-center text-md font-medium uppercase tracking-wider"
                  >
                    ${toy.price}
                  </td>
                  <td
                    scope="col"
                    className="px-6 py-3 text-center text-md font-medium uppercase tracking-wider"
                  >
                    {toy.availableQuantity}
                  </td>
                  <td scope="col" className="text-xl">
                    <div className="flex justify-end me-9 items-center gap-4">
                      <Link to={`/updateChocolate/${toy._id}`}>
                        <button
                          data-tip="Edit Product"
                          className="tooltip tooltip-top bg-pink-300 hover:text-white hover:bg-pink-400 flex items-center gap-1 text-lg p-2 rounded-lg"
                        >
                          <FaPen />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(toy._id)}
                        data-tip="Delete Product"
                        className="tooltip tooltip-top bg-pink-300 hover:text-white hover:bg-pink-400 flex items-center gap-1 text-lg p-2 rounded-lg"
                      >
                        <CgClose />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default MyToys;
