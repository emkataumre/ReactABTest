import { FC } from "react";

export const PageA: FC = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="flex justify-center py-4">
        <img src="logo.png" alt="Company Logo" className="h-16 w-auto" />
      </header>
      <section className="hero text-center py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website!</h1>
        <p className="text-xl mb-8">Discover amazing products and services.</p>
        <button
          id="cta-button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Learn More
        </button>
      </section>
      <footer className="text-center py-4">&copy; 2024 Company Name</footer>
    </div>
  );
};
