import React from "react";
import ComponentCard from "../ui/ComponentCard";
import componentsData from "../../../data/componentsData";

export default function Components() {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Featured Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {componentsData.map((component, index) => (
            <ComponentCard
              key={index}
              title={component.title}
              description={component.description}
              link={component.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
