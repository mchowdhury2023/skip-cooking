import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Rating } from "@smastrom/react-rating";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import "@smastrom/react-rating/style.css";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  });
  return (
    <section>
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"Testimonials"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((reviews) => (
          <SwiperSlide key={reviews._id}>
            <div className=" flex flex-col items-center my-16 mx-24">
              <Rating
                style={{ maxWidth: 180 }}
                value={reviews.rating}
                readOnly
              />
              <p className="py-10">{reviews.details}</p>
              <h3 className="text-2xl text-orange-400">{reviews.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
