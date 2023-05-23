import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/Authprovider";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import useTitle from "../../hooks/useTitle";

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
                className="px-6 flex gap-4 py-3 text-center text-md font-bold uppercase tracking-wider"
              >
                <div>Sl. no</div>
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
                Details
              </th>
            </tr>
          </thead>
          <tbody className="bg-transparent divide-y divide-pink-300">
            {myToys.map((toy, i) => {
              return (
                <tr className="text-pink-700" key={toy._id}>
                  <td
                    scope="col"
                    className="px-6 py-3 items-center gap-12 flex justify-center"
                  >
                    <p>{i + 1}</p>
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
                    <Link to={`/toy/${toy._id}`}>
                      <button className="bg-pink-300 flex items-center gap-1 text-lg p-2 rounded-lg">
                        {/* <BiInfoCircle /> View Details */}
                      </button>
                    </Link>
                    {/* Show 20 results by default by using limit

Implement a search system on this page, based on the Toy name. */}
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
