import Image from "next/image";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="py-5 mx-30 cotainer">
        <div className="bg-gray-300 rounded-2xl p-4">

      <div className="flex items-center justify-center gap-4">
        <div className="grid gap-10">
          <h2>Books to freshen up your bookshelf</h2>
          <button className="btn btn-success">View the task</button>
        </div>
        <div>
          <Image src={bannerImg} alt="Banner" />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
