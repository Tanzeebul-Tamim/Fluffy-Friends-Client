import { useEffect, useRef, useState } from "react";
import ReactLoading from "react-loading";
import { Link, useLoaderData } from "react-router-dom";
import { BiInfoCircle } from "react-icons/bi";
import useTitle from "../../hooks/useTitle";
import Pagination from "./Pagination/Pagination";
import { BsSearch } from "react-icons/bs";

const AllToys = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [isLoading, setIsLoading] = useState(true);
  const [allToys, setAllToys] = useState([]);
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");
  const { totalToys } = useLoaderData();

  useTitle("| All Toys");

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const response = await fetch(
        `https://toy-marketplace-server-puce-ten.vercel.app/allToys?page=${currentPage}&limit=${itemsPerPage}&search=${search}`
      );
      const data = await response.json();
      setAllToys(data);
      setIsLoading(false);
    }
    fetchData();
  }, [currentPage, itemsPerPage, search]);

  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };

  return (
    <div>
      {isLoading ? (
        <div className="container flex flex-col items-center my-20 mx-auto">
          <div className="text-center">
            <h1 className="text-5xl text-pink-600 mb-5 font-bold">
              Browse Our Exciting Collection of Stuffed Toys
            </h1>
            <div className="relative mb-2">
              <input
                onChange={handleSearch}
                ref={searchRef}
                type="text"
                placeholder="Search by Toy Name"
                className="py-3 px-5 outline-none rounded-full w-1/2"
              />
              <button>
                <BsSearch
                  style={{
                    position: "absolute",
                    top: "30%",
                    right: "270px",
                    fontSize: "20px",
                  }}
                ></BsSearch>
              </button>
            </div>
            <div
              style={{ height: "700px" }}
              className="flex justify-center items-center"
            >
              <ReactLoading
                type={"bars"}
                color={"#f13372"}
                height={"20%"}
                width={"20%"}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="container flex flex-col items-center my-20 mx-auto">
          <div className="text-center">
            <h1 className="text-5xl text-pink-600 mb-5 font-bold">
              Browse Our Exciting Collection of Stuffed Toys
            </h1>
            <div className="relative mb-2">
              <input
                onChange={handleSearch}
                ref={searchRef}
                type="text"
                placeholder="Search by Toy Name"
                className="py-3 px-5 outline-none rounded-full w-1/2"
              />
              <button>
                <BsSearch
                  style={{
                    position: "absolute",
                    top: "30%",
                    right: "270px",
                    fontSize: "20px",
                  }}
                ></BsSearch>
              </button>
            </div>
          </div>
          <table className="my-5 min-w-full divide-y divide-pink-300">
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
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="bg-transparent divide-y divide-pink-300">
              {allToys.map((toy) => {
                return (
                  <tr className="text-pink-700" key={toy._id}>
                    <td
                      scope="col"
                      className="px-6 py-3 text-center text-md font-medium uppercase tracking-wider"
                    >
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
                        <button className="bg-pink-300 hover:text-white hover:bg-pink-400 flex items-center gap-1 text-lg p-2 rounded-lg">
                          <BiInfoCircle /> View Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination
            setItemsPerPage={setItemsPerPage}
            itemsPerPage={itemsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalToys={totalToys}
          ></Pagination>
        </div>
      )}
    </div>
  );
};

export default AllToys;
