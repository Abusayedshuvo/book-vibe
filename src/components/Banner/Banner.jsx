import bannerImg from "../../assets/banner-book.png";

const Banner = () => {
  return (
    <div className="container mx-auto my-12">
      <div className="bg-[#131313]/5 rounded-3xl flex justify-between items-center px-30 py-20">
        <div>
          <h1 className="text-5xl font-bold mb-12">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="bg-[#23BE0A] text-white px-7 py-5 rounded-lg">
            View The List
          </button>
        </div>
        <div>
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
