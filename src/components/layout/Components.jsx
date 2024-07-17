import React from "react";
import ComponentCard from "../ui/ComponentCard";
import componentsData from "../../../data/componentsData";

export default function Components() {
  return (
    <div className="border-b border-gray-300">
      <section className="py-32 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Components
        </h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          {componentsData.map((component, index) => (
            <ComponentCard
              key={index}
              title={component.title}
              description={component.description}
              link={component.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
