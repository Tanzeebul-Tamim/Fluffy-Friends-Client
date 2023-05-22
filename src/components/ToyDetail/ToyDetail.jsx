import { Link, useLoaderData } from "react-router-dom";
import "./ToyDetail.css";
import { FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const ToyDetail = () => {
  const toy = useLoaderData();

  return (
    <div className="container flex flex-col items-center my-14 mx-auto">
      <h1 className="text-5xl text-pink-500 mb-5 font-bold">Product Details</h1>
      <div className="card lg:card-side detail-card bg-base-100 shadow-2xl">
        <figure>
          <img style={{ height: "500px", width: "500px" }} src={toy.photoURL} />
        </figure>
        <div className="card-body rounded-r-2xl">
          <h2 className="card-title text-pink-500 text-3xl">
            {toy.productName}
          </h2>
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
          <p className="text-pink-600 font-extralight text-xl">
            {toy.productDescription}
          </p>
          <div className="card-actions justify-between">
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
            <Link to="/allToys">
              <button className="text-white btn btn-primary">
                Back to All Toys
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetail;
