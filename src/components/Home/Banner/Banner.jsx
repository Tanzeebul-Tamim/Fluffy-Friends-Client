const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/D7SGtnH/bear-teddy-soft-toy-stuffed-animal.jpg"
          className="w-full hidden lg:flex"
        />
        <img
          src="https://i.ibb.co/PWP5Lg9/bear-teddy-soft-toy-stuffed-animal.jpg"
          className="w-full lg:hidden"
        />
        <div className="absolute flex text-pink-600 lg:justify-start  items-center gap-4 left-0 h-full top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white lg:space-y-10 pl-4 lg:pl-24 w-3/5 lg:w-3/5'>
                <h2 className='lg:text-6xl text-3xl font-bold'>Unleash the Joy of Playtime!</h2>
                <p className="hidden lg:flex">Discover the magic of play with our delightful selection of toys. From cuddly companions to interactive games, we have everything to make playtime unforgettable.</p>
                <button className="btn lg:flex hidden btn-primary text-white bg-pink-600 border-0">Discover More</button>
            </div>
        </div>
        <div className="absolute flex left-2 right-2 justify-end gap-1 lg:justify-between transform lg:-translate-y-1/2 translate-y-full lg:left-5 lg:right-5 top-1/2">
          <a href="#slide4" className="btn bg-pink-600 border-0 btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn bg-pink-600 border-0 btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/K2GvxhL/heart-love-romance-affection.jpg"
          className="w-full hidden lg:flex"
        />
        <img
          style={{transform: "scaleX(-1)"}}
          src="https://i.ibb.co/Pxx98C4/heart-love-romance-affection.jpg"
          className="w-full lg:hidden"
        />
        <div className="absolute flex text-pink-600 lg:justify-start  items-center gap-4 left-0 h-full top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white lg:space-y-10 pl-4 lg:pl-24 w-3/5 lg:w-3/5'>
                <h2 className='lg:text-6xl text-3xl font-bold'>Imagination Comes to Life!</h2>
                <p className="hidden lg:flex">Explore a world of endless possibilities with our enchanting collection of toys that spark imagination and creativity in children of all ages.</p>
                <button className="btn lg:flex hidden btn-primary text-white bg-pink-600 border-0">Discover More</button>
            </div>
        </div>
        <div className="absolute flex left-2 right-2 justify-end gap-1 lg:justify-between transform lg:-translate-y-1/2 translate-y-full lg:left-5 lg:right-5 top-1/2">
          <a href="#slide1" className="btn bg-pink-600 border-0 btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn bg-pink-600 border-0 btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/n30JDGZ/love-gift-roses-bear-wallpaper-preview.jpg"
          className="w-full hidden lg:flex"
        />
        <img
          style={{transform: "scaleX(-1)"}}
          src="https://i.ibb.co/zrfzXYD/love-gift-roses-bear-wallpaper-preview.jpg"
          className="w-full lg:hidden"
        />
        <div className="absolute flex text-pink-600 lg:justify-start  items-center gap-4 left-0 h-full top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white lg:space-y-10 pl-4 lg:pl-24 w-3/5 lg:w-3/5'>
                <h2 className='lg:text-6xl text-3xl font-bold'>Quality Toys for Endless Fun </h2>
                <p className="hidden lg:flex">
                Experience the joy of high-quality stuffed toys that are built to last. Our carefully curated selection ensures hours of fun-filled entertainment for kids of all ages.
                </p>
                <button className="btn lg:flex hidden btn-primary text-white bg-pink-600 border-0">Discover More</button>
            </div>
        </div>
        <div className="absolute flex left-2 right-2 justify-end gap-1 lg:justify-between transform lg:-translate-y-1/2 translate-y-full lg:left-5 lg:right-5 top-1/2">
          <a href="#slide2" className="btn bg-pink-600 border-0 btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn bg-pink-600 border-0 btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/3Rvr5fL/teddy-bear-heart-valentines-day-love-wallpaper-preview.jpg"
          className="w-full hidden lg:flex"
        />
        <img
          src="https://i.ibb.co/YTjM4FC/teddy-bear-heart-valentines-day-love-wallpaper-preview.jpg"
          className="w-full lg:hidden"
        />
        <div className="absolute flex text-pink-600 lg:justify-start  items-center gap-4 left-0 h-full top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white lg:space-y-10 pl-4 lg:pl-24 w-3/5 lg:w-3/5'>
                <h2 className='lg:text-6xl text-3xl font-bold'>Bringing Smiles to Little Faces</h2>
                <p className="hidden lg:flex">Brighten up your child&apos;s day with our collection of toys designed to bring joy and laughter. From classic favorites to trendy new releases, we have something for every child.</p>
                <button className="btn lg:flex hidden btn-primary text-white bg-pink-600 border-0">Discover More</button>
            </div>
        </div>
        <div className="absolute flex left-2 right-2 justify-end gap-1 lg:justify-between transform lg:-translate-y-1/2 translate-y-full lg:left-5 lg:right-5 top-1/2">
          <a href="#slide3" className="btn bg-pink-600 border-0 btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn bg-pink-600 border-0 btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
