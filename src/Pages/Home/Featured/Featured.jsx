import featuredImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        heading={"Featured Item"}
        subHeading={"check it out"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-300 bg-opacity-40 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Jan 20, 2024</p>
          <p className="uppercase">Where I can sume</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            voluptas fugiat dignissimos iusto eaque animi earum incidunt,
            tenetur omnis, minus corporis quo tempora, officiis illum
            consequuntur provident harum laboriosam porro quos quaerat vero
            asperiores et accusantium alias. Incidunt, voluptatibus architecto?
            Tenetur libero ratione provident ullam minus exercitationem nostrum
            dolor rerum?
          </p>
          <button className="btn btn-outline mt-4 border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
