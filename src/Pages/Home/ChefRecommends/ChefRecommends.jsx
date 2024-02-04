import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import RecoMenuCard from "./RecoMenuCard";

const ChefRecommends = () => {
  const [recommendItem, setRecommendItem] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) =>
        setRecommendItem(data.filter((item) => item.category === "offered"))
      );
  }, []);

  const displayedItems = showAll ? recommendItem : recommendItem.slice(0, 3);

  return (
    <div className="mb-10">
      <SectionTitle
        heading={"Chef Recommends"}
        subHeading={"Should Try"}
      ></SectionTitle>
      <div className="grid md:grid-cols-3">
        {displayedItems.map((item) => (
          <RecoMenuCard key={item._id} item={item}></RecoMenuCard>
        ))}
      </div>
      {recommendItem.length > 3 && !showAll && (
        <div className="text-center mt-4">
          <button
            className="btn btn-outline mt-4 border-0 border-b-2"
            onClick={() => setShowAll(true)}
          >
            Show All
          </button>
        </div>
      )}
    </div>
  );
};

export default ChefRecommends;
