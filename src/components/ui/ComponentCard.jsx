import React from "react";
import Link from "next/link";

const ComponentCard = ({ title, description, link }) => {
  return (
    <div className="bg-white p-6 shadow rounded">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="mb-4">{description}</p>
      <Link href={link}>View Component</Link>
    </div>
  );
};

export default ComponentCard;
