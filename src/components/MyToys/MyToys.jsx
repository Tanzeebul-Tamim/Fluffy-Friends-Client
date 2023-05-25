import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/Authprovider";
import ReactLoading from "react-loading";
import useTitle from "../../hooks/useTitle";
import ToyRow from "./ToyRow/ToyRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("ascending");
  useTitle("| My Toys");

  useEffect(() => {
    fetch(`   https://toy-marketplace-server-puce-ten.vercel.app/allToys/email/${user.email}?sort=${sortOrder}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        setIsLoading(false);
      });
  }, [user, sortOrder]);
  

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSortOrder(value);
  };
  

  const handleDelete = (deletedToyId) => {
    setMyToys((prevToys) => prevToys.filter((toy) => toy._id !== deletedToyId));
  };

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
        <select
          onChange={handleOptionChange}
          name="category"
          style={{ cursor: "pointer", outline: "none", border: "none" }}
          className="border-0 px-3 py-2 rounded-full">
            <option value="" defaultValue hidden>
              Sort By
            </option>
            <option className="text-slate-800 mb-3" value="ascending">
              price (Asc)
            </option>
            <option className="text-slate-800" value="descending">
              price (Des)
            </option>
        </select>
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
              return (
                <ToyRow onDelete={handleDelete} toy={toy} key={toy._id}></ToyRow>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default MyToys;
