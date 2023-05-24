const Care = () => {
  return (
    <div className="container mx-auto mt-7 lg:my-20">

         <div data-aos="zoom-out">
          <h1 className="text-center text-pink-600 mb-7 lg:mb-8 font-bold text-4xl">Stuffed Toy Care</h1>
         </div>

      <div className="mx-6 gap-10 grid lg:grid-cols-2 grid-cols-1">
        <div data-aos="slide-right" className="flex flex-col lg:flex-row gap-3 items-center">
          <img
            className="rounded-full mb-10 lg:mb-0"
            style={{ height: "200px", width: "200px" }}
            src="https://www.thezoofactory.com/wp-content/uploads/2019/05/75541791_S1.jpg"
            alt=""
          />
          <div  className="text-center lg:text-end">
            <h1 className="text-2xl text-pink-600 font-bold mb-4">
              Washing and Cleaning Guide
            </h1>
            <p className="text-pink-700">
              Learn the best practices for washing and cleaning your stuffed
              toys to ensure they stay fresh, hygienic, and looking their best.
              Discover suitable cleaning methods for different types of
              materials, from machine-washable toys to those that require spot
              cleaning.
            </p>
          </div>
        </div>
        <div data-aos="slide-left" className="flex flex-col lg:flex-row gap-3 items-center">
          <img
            className="rounded-full mb-10 lg:mb-0"
            style={{ height: "200px", width: "200px" }}
            src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1616683164-51JyqrHQv3L.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
            alt=""
          />
          <div  className="text-center lg:text-end">
            <h1 className="text-2xl text-pink-600 font-bold mb-4">
              Storage Tips for Longevity
            </h1>
            <p className="text-pink-700">
              Find out how to properly store your stuffed toys to preserve their
              softness, colors, and overall quality. Learn about suitable
              storage options, such as breathable containers or hanging
              organizers, and discover strategies to protect your toys from
              dust, sunlight, and potential damage.
            </p>
          </div>
        </div>
        <div data-aos="slide-up" className="flex flex-col lg:flex-row gap-3 items-center">
          <img
            className="rounded-full mb-10 lg:mb-0"
            style={{ height: "200px", width: "200px" }}
            src="https://guide-images.cdn.ifixit.com/igi/DmVFULMvlxDsERQd.medium"
            alt=""
          />
          <div  className="text-center lg:text-end">
            <h1 className="text-2xl text-pink-600 font-bold mb-4">
              Repair and Restoration Techniques
            </h1>
            <p className="text-pink-700">
              Discover helpful tips and techniques to repair and restore your
              beloved stuffed toys. Whether it&apos;s fixing a loose seam,
              replacing a damaged button, or re-stuffing a toy, this guide will
              equip you with the skills to bring your favorite companions back
              to life and extend their lifespan.
            </p>
          </div>
        </div>
        <div data-aos="slide-up" className="flex flex-col lg:flex-row gap-3 items-center">
          <img
            className="rounded-full mb-10 lg:mb-0"
            style={{ height: "200px", width: "200px" }}
            src="https://www.thespruce.com/thmb/VzMFgrStMabJLEZ9U3c_to7qnEQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-clean-stuffed-toys-2146217-05-af71de85fd0843b88c6015d4b164654d.jpg"
            alt=""
          />
          <div  className="text-center lg:text-end">
            <h1 className="text-2xl text-pink-600 font-bold mb-4">
              Preventing Common Issues
            </h1>
            <p className="text-pink-700">
              Learn how to prevent common issues that can affect stuffed toys,
              such as fading colors, flattened stuffing, and odors. Explore
              preventive measures like regular spot cleaning, minimizing sun
              exposure, and implementing a gentle play routine to ensure your
              toys remain in excellent condition for years to come.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Care;
