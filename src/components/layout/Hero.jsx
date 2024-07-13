import Link from "next/link";
const Hero = () => (
  <section className="bg-gray-100 py-16">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to React E-Commerce Kit
      </h1>
      <p className="text-lg mb-8">
        Your go-to source for free, high-quality React components tailored for
        e-commerce websites.
      </p>
      <Link
        href="/components"
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
      >
        Explore Components
      </Link>
    </div>
  </section>
);

export default Hero;