import React from "react";
import InfoCard from "../Cards/Card";

const cardsInfo = [
  { type: "Students", total: 1231 },
  { type: "Teachers", total: 331 },
  { type: "Parents", total: 831 },
  { type: "Staffs", total: 131 },
];

const CardWrapper = () => {
  return (
    <div className="flex justify-between flex-wrap w-full gap-4">
      {cardsInfo.map((card, i) => (
        <InfoCard key={i} card={i} type={card.type} total={card.total} />
      ))}
    </div>
  );
};

export default CardWrapper;
