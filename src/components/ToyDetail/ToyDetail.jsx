import { Link, useLoaderData } from "react-router-dom";
import "./ToyDetail.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import useTitle from "../../hooks/useTitle";

const ToyDetail = () => {
  const toy = useLoaderData();
  useTitle(`| ${toy.productName}`);

  return (
    <div className="container flex flex-col items-center my-14 mx-auto">
      <h1 className="text-5xl text-pink-500 mb-5 font-bold">Product Details</h1>
      <div className="flex justify-center">
        <figure>
          <img
            className="rounded-l-2xl"
            style={{ height: "500px", width: "500px" }}
            src={toy.photoURL}
          />
        </figure>
        <div className="rounded-r-2xl w-1/2 detail-card bg-base-100 shadow-2xl">
          <div className="card-body relative h-full rounded-r-2xl">
            <div className="flex mb-10 justify-between">
              <h2 className="card-title text-pink-500 text-3xl">
                {toy.productName}
              </h2>{" "}
              <div className="flex items-center text-3xl btn-fav gap-2 px-3 rounded-3">
                <Rating
                  className="text-yellow-400"
                  placeholderRating={toy.rating}
                  readonly
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
                />
                <span className="text-white">{toy.rating}</span>
              </div>
            </div>
            <ol className="text-lg text-pink-600" style={{ listStyle: "disc" }}>
              <li>
                <strong>Seller Name :</strong> {toy.sellerName}
              </li>
              <li>
                <strong>Seller Email :</strong> {toy.sellerEmail}
              </li>
              <li>
                <strong>Price :</strong> ${toy.price}
              </li>
              <li>
                <strong>Available Quantity :</strong> {toy.availableQuantity}
              </li>
            </ol>
            <p className="text-pink-600 font-extralight text-2xl mt-8">
              {toy.productDescription}
            </p>
            <div className="card-actions flex justify-center absolute bottom-0 w-full mb-6">
              <Link to="/">
                <button className="text-white btn btn-primary">
                  Back to Homepage
                </button>
              </Link>
              <Link to="/allToys">
                <button className="text-white btn btn-primary">
                  Back to All Toys
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetail;
