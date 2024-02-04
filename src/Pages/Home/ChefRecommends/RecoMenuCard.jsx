import React from "react";

const RecoMenuCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="salad" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-outline mt-4 border-0 border-b-2">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecoMenuCard;
