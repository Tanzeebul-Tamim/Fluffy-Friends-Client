import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./CategoryTabs.css";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const CategoryTabs = ({ allToys }) => {
  const teddy = allToys.filter((toy) => toy.category === "Teddy Bear");
  const fantasyCreature = allToys.filter((toy) => toy.category === "Fantasy Creature");
  const farmAnimal = allToys.filter((toy) => toy.category === "Farm Animal");
  const dinosaur = allToys.filter((toy) => toy.category === "Dinosaur");
  const seaCreature = allToys.filter((toy) => toy.category === "Sea Creature");
  const jungleAnimal = allToys.filter((toy) => toy.category === "Jungle Animal");
  const robot = allToys.filter((toy) => toy.category === "Robot");
  return (
    <div className="container flex flex-col items-center my-24 mx-auto">
      <h1 className="lg:text-5xl text-xl text-pink-500 mb-5 font-bold">
        Sort by Categories
      </h1>
      <Tabs>
        <TabList>
          <Tab>Teddy Bear</Tab>
          <Tab>Fantasy Creature</Tab>
          <Tab>Farm Animal</Tab>
          <Tab>Dinosaur</Tab>
          <Tab>Sea Creature</Tab>
          <Tab>Jungle Animal</Tab>
          <Tab>Robot</Tab>
        </TabList>

        <TabPanel>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-9 mt-6">
            {teddy.map((toy) => {
              return (
                <div
                  key={toy._id}
                  className="card w-96 testimonial-card bg-base-100 shadow-xl"
                >
                  <figure>
                    <img
                      style={{ width: "100%", height: "400px" }}
                      src={toy.photoURL}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="flex justify-between items-center">
                      <h2 className="card-title text-pink-700 text-xl">
                        {toy.productName}
                      </h2>
                      <div className="flex bg-pink-900 px-2 py-1 rounded-xl items-center text-md btn-fav gap-2 rounded-3">
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
                    <p>{toy.productDescription}</p>
                    <ol style={{ listStyle: "disc" }}>
                      <li>
                        <strong>Price :</strong> ${toy.price}
                      </li>
                      <li>
                        <strong>Available Quantity :</strong>{" "}
                        {toy.availableQuantity}
                      </li>
                    </ol>
                    <div className="card-actions justify-end">
                      <Link to={`/toy/${toy._id}`}>
                        <button className="btn text-white btn-primary">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-9 mt-6">
            {fantasyCreature.map((toy) => {
              return (
                <div
                  key={toy._id}
                  className="card w-96 testimonial-card bg-base-100 shadow-xl"
                >
                  <figure>
                    <img
                      style={{ width: "100%", height: "400px" }}
                      src={toy.photoURL}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="flex justify-between items-center">
                      <h2 className="card-title text-pink-700 text-xl">
                        {toy.productName}
                      </h2>
                      <div className="flex bg-pink-900 px-2 py-1 rounded-xl items-center text-md btn-fav gap-2 rounded-3">
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
                    <p>{toy.productDescription}</p>
                    <ol style={{ listStyle: "disc" }}>
                      <li>
                        <strong>Price :</strong> ${toy.price}
                      </li>
                      <li>
                        <strong>Available Quantity :</strong>{" "}
                        {toy.availableQuantity}
                      </li>
                    </ol>
                    <div className="card-actions justify-end">
                      <Link to={`/toy/${toy._id}`}>
                        <button className="btn text-white btn-primary">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-9 mt-6">
            {farmAnimal.map((toy) => {
              return (
                <div
                  key={toy._id}
                  className="card w-96 testimonial-card bg-base-100 shadow-xl"
                >
                  <figure>
                    <img
                      style={{ width: "100%", height: "400px" }}
                      src={toy.photoURL}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="flex justify-between items-center">
                      <h2 className="card-title text-pink-700 text-xl">
                        {toy.productName}
                      </h2>
                      <div className="flex bg-pink-900 px-2 py-1 rounded-xl items-center text-md btn-fav gap-2 rounded-3">
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
                    <p>{toy.productDescription}</p>
                    <ol style={{ listStyle: "disc" }}>
                      <li>
                        <strong>Price :</strong> ${toy.price}
                      </li>
                      <li>
                        <strong>Available Quantity :</strong>{" "}
                        {toy.availableQuantity}
                      </li>
                    </ol>
                    <div className="card-actions justify-end">
                      <Link to={`/toy/${toy._id}`}>
                        <button className="btn text-white btn-primary">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-9 mt-6">
            {dinosaur.map((toy) => {
              return (
                <div
                  key={toy._id}
                  className="card w-96 testimonial-card bg-base-100 shadow-xl"
                >
                  <figure>
                    <img
                      style={{ width: "100%", height: "400px" }}
                      src={toy.photoURL}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="flex justify-between items-center">
                      <h2 className="card-title text-pink-700 text-xl">
                        {toy.productName}
                      </h2>
                      <div className="flex bg-pink-900 px-2 py-1 rounded-xl items-center text-md btn-fav gap-2 rounded-3">
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
                    <p>{toy.productDescription}</p>
                    <ol style={{ listStyle: "disc" }}>
                      <li>
                        <strong>Price :</strong> ${toy.price}
                      </li>
                      <li>
                        <strong>Available Quantity :</strong>{" "}
                        {toy.availableQuantity}
                      </li>
                    </ol>
                    <div className="card-actions justify-end">
                      <Link to={`/toy/${toy._id}`}>
                        <button className="btn text-white btn-primary">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-9 mt-6">
            {seaCreature.map((toy) => {
              return (
                <div
                  key={toy._id}
                  className="card w-96 testimonial-card bg-base-100 shadow-xl"
                >
                  <figure>
                    <img
                      style={{ width: "100%", height: "400px" }}
                      src={toy.photoURL}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="flex justify-between items-center">
                      <h2 className="card-title text-pink-700 text-xl">
                        {toy.productName}
                      </h2>
                      <div className="flex bg-pink-900 px-2 py-1 rounded-xl items-center text-md btn-fav gap-2 rounded-3">
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
                    <p>{toy.productDescription}</p>
                    <ol style={{ listStyle: "disc" }}>
                      <li>
                        <strong>Price :</strong> ${toy.price}
                      </li>
                      <li>
                        <strong>Available Quantity :</strong>{" "}
                        {toy.availableQuantity}
                      </li>
                    </ol>
                    <div className="card-actions justify-end">
                      <Link to={`/toy/${toy._id}`}>
                        <button className="btn text-white btn-primary">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-9 mt-6">
            {jungleAnimal.map((toy) => {
              return (
                <div
                  key={toy._id}
                  className="card w-96 testimonial-card bg-base-100 shadow-xl"
                >
                  <figure>
                    <img
                      style={{ width: "100%", height: "400px" }}
                      src={toy.photoURL}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="flex justify-between items-center">
                      <h2 className="card-title text-pink-700 text-xl">
                        {toy.productName}
                      </h2>
                      <div className="flex bg-pink-900 px-2 py-1 rounded-xl items-center text-md btn-fav gap-2 rounded-3">
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
                    <p>{toy.productDescription}</p>
                    <ol style={{ listStyle: "disc" }}>
                      <li>
                        <strong>Price :</strong> ${toy.price}
                      </li>
                      <li>
                        <strong>Available Quantity :</strong>{" "}
                        {toy.availableQuantity}
                      </li>
                    </ol>
                    <div className="card-actions justify-end">
                      <Link to={`/toy/${toy._id}`}>
                        <button className="btn text-white btn-primary">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-9 mt-6">
            {robot.map((toy) => {
              return (
                <div
                  key={toy._id}
                  className="card w-96 testimonial-card bg-base-100 shadow-xl"
                >
                  <figure>
                    <img
                      style={{ width: "100%", height: "400px" }}
                      src={toy.photoURL}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="flex justify-between items-center">
                      <h2 className="card-title text-pink-700 text-xl">
                        {toy.productName}
                      </h2>
                      <div className="flex bg-pink-900 px-2 py-1 rounded-xl items-center text-md btn-fav gap-2 rounded-3">
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
                    <p>{toy.productDescription}</p>
                    <ol style={{ listStyle: "disc" }}>
                      <li>
                        <strong>Price :</strong> ${toy.price}
                      </li>
                      <li>
                        <strong>Available Quantity :</strong>{" "}
                        {toy.availableQuantity}
                      </li>
                    </ol>
                    <div className="card-actions justify-end">
                      <Link to={`/toy/${toy._id}`}>
                        <button className="btn text-white btn-primary">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoryTabs;
