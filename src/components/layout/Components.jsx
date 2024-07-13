import React from "react";
import Link from "next/link";
export default function Components() {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Featured Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow rounded">
            <h3 className="text-2xl font-bold mb-4">Product Card</h3>
            <p className="mb-4">
              Showcase your products with our customizable product card
              components.
            </p>
            <Link href="/components/product-card">View Component</Link>
          </div>
          <div className="bg-white p-6 shadow rounded">
            <h3 className="text-2xl font-bold mb-4">Navigation Menu</h3>
            <p className="mb-4">
              Improve user experience with our sleek and responsive navigation
              menus.
            </p>
            <Link href="/components/navigation-menu">View Component</Link>
          </div>
          <div className="bg-white p-6 shadow rounded">
            <h3 className="text-2xl font-bold mb-4">Checkout Form</h3>
            <p className="mb-4">
              Streamline the checkout process with our user-friendly forms.
            </p>
            <Link href="/components/checkout-form">View Component</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
