const GallerySection = () => {
  return (
    <div className="lg:my-20 my-10">
        <h1 className="text-center text-pink-600 font-bold mb-6 text-2xl lg:text-4xl">Explore Our Cuddly Creations</h1>
      <div data-aos="flip-up" className="lg:container gap-1 mx-4 lg:mx-auto grid grid-cols-4">
          <img
            className="rounded-tl-2xl"
            src="https://cb.scene7.com/is/image/Crate/JellycatCocoaBear11inSSS23_VND/$web_plp_card$/230327113241/jellycat-cocoa-bear-kids-stuffed-animal.jpg"
            alt=""
          />
        <div className="grid gap-1 grid-cols-2">          
          <div data-aos="flip-right">
              <img src="https://cb.scene7.com/is/image/Crate/JellycatBshflGiraffeMdSSS23_VND/$web_pdp_main_carousel_med$/230328132147/jellycat-medium-bashful-giraffe-kids-stuffed-animal.jpg"
            alt=""
          />
          </div>
          <div data-aos="flip-down">
            <img
            src="https://cb.scene7.com/is/image/Crate/DashingDogMedSSF21/$web_pdp_main_carousel_med$/210519164026/jellycat-dashing-dog.jpg"
            alt=""
          />
          </div>
          <div data-aos="flip-left">
            <img
            src="https://cb.scene7.com/is/image/Crate/Plush_Bunny_WH/$web_pdp_main_carousel_med$/220913134659/jellycat-white-bunny-stuffed-animal.jpg"
            alt=""
          />
          </div>
          <div data-aos="slide-up">
            <img
            src="https://cb.scene7.com/is/image/Crate/MellowMallowPigSSF20_VND/$web_pdp_main_carousel_med$/200507145300/jellycat-mellow-mallow-pig.jpg"
            alt=""
          />
          </div>
        </div>
        <div data-aos="slide-down">
          <img
            src="https://cb.scene7.com/is/image/Crate/JellycatFddlwddlPigSSS23_VND/$web_pdp_main_carousel_med$/230327113248/jellycat-fuddlewuddle-pig-kids-stuffed-animal.jpg"
            alt=""
          />
        </div>
        <div data-aos="slide-left">
          <img
            className="rounded-tr-2xl"
            src="https://cb.scene7.com/is/image/Crate/JellycatBashfulDinoMedSSS23_VND/$web_pdp_main_carousel_med$/230327113244/jellycat-medium-bashful-dino-kids-stuffed-animal.jpg"
            alt=""
          />
        </div>
        <div data-aos="slide-right">
          <img
            className="rounded-bl-2xl"
            src="https://cb.scene7.com/is/image/Crate/BashfulBlkCrmPuppySSF20_VND/$web_pdp_main_carousel_med$/200721170429/jellycat-bashful-black-and-cream-puppy.jpg"
            alt=""
          />
        </div>
        <div data-aos="zoom-in">
          <img
            src="https://cb.scene7.com/is/image/Crate/JellycatSmgElphStfAnmlMdSSF22/$web_pdp_main_carousel_med$/220510115806/jellycat-medium-smudge-elephant-stuffed-animal.jpg"
            alt=""
          />
        </div>
        <div className="grid gap-1 grid-cols-2">
          <div data-aos="zoom-in-up">
            <img
            src="https://cb.scene7.com/is/image/Crate/JellycatBshLambStfAnmlMdSSF22/$web_pdp_main_carousel_med$/220510115817/jellycat-medium-bashful-lamb-stuffed-animal.jpg"
            alt=""
          />
          </div>
          <div data-aos="zoom-in-down">
            <img
            src="https://cb.scene7.com/is/image/Crate/Plush_MD_Bear_BR/$web_pdp_main_carousel_med$/220913135000/jellycat-medium-brown-bear-stuffed-animal.jpg"
            alt=""
          />
          </div>
          <div data-aos="zoom-out-up">
            <img
            src="https://cb.scene7.com/is/image/Crate/Plush_Sloth/$web_pdp_main_carousel_med$/220913134659/jellycat-sloth-stuffed-animal.jpg"
            alt=""
          />
          </div>
          <div data-aos="fade-up-left">
            <img
            src="https://cb.scene7.com/is/image/Crate/JellycatBashfulWdlndBunnySHS19/$web_pdp_main_carousel_med$/190411135132/jellycat-bashful-woodland-bunny.jpg"
            alt=""
          />
          </div>
        </div>
        <div data-aos="fade-down-left">
          <img
            className="rounded-br-2xl"
            src="https://cb.scene7.com/is/image/Crate/Avocado23inSSF20_VND/$web_pdp_main_carousel_med$/200506104310/amuseable-avocado-large.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
