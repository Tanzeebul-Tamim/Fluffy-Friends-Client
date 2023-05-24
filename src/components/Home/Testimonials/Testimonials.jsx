import { FaStar } from "react-icons/fa";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="container mx-auto my-20">
      <div data-aos="fade">
        <h1 className="text-center text-pink-600 mb-6 font-bold text-4xl">
          Hear What Our <br className="flex lg:hidden" /> Customers Say !
        </h1>
      </div>

      <div className="grid lg:gap-0 gap-3 grid-cols-1 lg:grid-cols-4">
        <div data-aos="fade-right" className="justify-self-center w-4/5 testimonial-card p-5 rounded-xl">
          <div className="mb-4 flex gap-4 items-center justify-between">
            <div>
              <img
                className="mask mask-hexagon"
                style={{ width: "90px", height: "90px" }}
                src="https://images.iphonephotographyschool.com/24755/portrait-photography.jpg"
              />
            </div>
            <div>
              <h2 className="mb-3 text-pink-600 text-xl font-bold">
                Sarah Thompson
              </h2>
              <div className="text-3xl gap-3 text-amber-400 flex justify-end">
                <span>4.7</span>
                <FaStar></FaStar>
              </div>
            </div>
          </div>
          <div>
            <h1 className="mb-4 text-pink-700 text-2xl font-bold">
              Adorable and Soft! <br></br> Perfect Gift for Kids!
            </h1>
            <p className="text-pink-700">
              I bought the Bunny Hugs plush toy for my niece&apos;s birthday,
              and she absolutely loves it! The toy is incredibly soft and
              cuddly, and the attention to detail is impressive. It quickly
              became her favorite companion, and I couldn&apos;t be happier with
              the purchase. Thank you for creating such lovable toys!
            </p>
          </div>
        </div>

        <div data-aos="fade-up" className="justify-self-center w-4/5 testimonial-card p-5 rounded-xl">
          <div className="mb-4 flex gap-4 items-center justify-between">
            <div>
              <img
                className="mask mask-hexagon"
                style={{ width: "90px", height: "90px" }}
                src="https://members-api.parliament.uk/api/Members/1572/Portrait?cropType=ThreeTwo&webVersion=false"
              />
            </div>
            <div>
              <h2 className="mb-3 text-pink-600 text-xl font-bold">
                Michael Tedoldi
              </h2>
              <div className="text-3xl gap-3 text-amber-400 flex justify-end">
                <span>4.5</span>
                <FaStar></FaStar>
              </div>
            </div>
          </div>
          <div>
            <h1 className="mb-4 text-pink-700 text-2xl font-bold">
              Fantastic Quality <br></br> and Fast Shipping!
            </h1>
            <p className="text-pink-700">
              I recently ordered the Dino Delight stuffed toy for my son, and we
              are both thrilled with it. The quality is outstanding, and the
              stitching is sturdy, ensuring it will last for years. I was also
              impressed with the fast shipping; the toy arrived sooner than
              expected. Highly recommend your products!
            </p>
          </div>
        </div>

        <div data-aos="fade-up" className="justify-self-center w-4/5 testimonial-card p-5 rounded-xl">
          <div className="mb-4 flex gap-4 items-center justify-between">
            <div>
              <img
                className="mask mask-hexagon"
                style={{ width: "90px", height: "90px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmzarI2fFXqzA57YJpCSRURHda8SxdYDZPqQ&usqp=CAU"
              />
            </div>
            <div>
              <h2 className="mb-3 text-pink-600 text-xl font-bold">
                Emily Johnson
              </h2>
              <div className="text-3xl gap-3 text-amber-400 flex justify-end">
                <span>4.3</span>
                <FaStar></FaStar>
              </div>
            </div>
          </div>
          <div>
            <h1 className="mb-4 text-pink-700 text-2xl font-bold">
              Absolutely Adorable! <br></br> Great Gift for Collectors!
            </h1>
            <p className="text-pink-700">
              I&apos;m an avid stuffed toy collector, and I recently added the
              Whiskers the Cat plush toy to my collection. I am beyond pleased
              with the craftsmanship and attention to detail. The toy&apos;s
              expression is adorable, and the materials used are top-notch.
            </p>
          </div>
        </div>

        <div data-aos="fade-left" className="justify-self-center w-4/5 testimonial-card p-5 rounded-xl">
          <div className="mb-4 flex gap-4 items-center justify-between">
            <div>
              <img
                className="mask mask-hexagon"
                style={{ width: "90px", height: "90px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCbKFZ8X3-d6Ss5U5BbisFaFl3RtQLkw4Cmc3De_6msJ09ajX79m-j_lb3qiTkTkoiMv8&usqp=CAU"
              />
            </div>
            <div>
              <h2 className="mb-3 text-pink-600 text-xl font-bold">
                Mark Thompson
              </h2>
              <div className="text-3xl gap-3 text-amber-400 flex justify-end">
                <span>4.9</span>
                <FaStar></FaStar>
              </div>
            </div>
          </div>
          <div>
            <h1 className="mb-4 text-pink-700 text-2xl font-bold">
              Excellent Customer Service and <br></br> Delighted with the
              Purchase!
            </h1>
            <p className="text-pink-700">
              I had a fantastic experience with your company. The toy itself is
              of exceptional quality, and my daughter couldn&apos;t stop smiling
              when she received it. Thank you for the excellent service and
              product!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
