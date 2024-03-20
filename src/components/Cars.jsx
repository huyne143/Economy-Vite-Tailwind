import React, { useState } from "react";
import { cars } from "../data";

const Cars = () => {
  const [year, setYear] = useState("");
  const [filtedYear, setFiltedYear] = useState(cars);
  const uniqueYear = [...new Set(cars.map((car) => car.year))];

  const handleSearch = () => {
    const newFiltedCars = cars.filter(
      (car) => year === "" || car.year === year
    );
    setFiltedYear(newFiltedCars);
  };
  const renderSingleCard = (car) => {
    return (
      <div
        key={car.id}
        className="mb-10 overflow-hidden rounded-lg shadow-lg duration-300 hover:shadow-2xl dark:bg-gray-900 dark:shadow-card dark:hover:shadow-2xl"
      >
        <img
          src={car.images}
          alt=""
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-6 bg-white dark:bg-gray-800 rounded-b-lg">
          <h3>
            <a
              href={car.titleHref ? car.titleHref : "/#"}
              className="mb-2 block text-2xl font-semibold text-gray-800 hover:text-blue-600 dark:text-gray-200"
            >
              {car.name}
            </a>
          </h3>
          <div className="flex flex-wrap items-center mb-4 text-gray-700 dark:text-gray-300">
            <div className="flex items-center mr-4 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1 text-yellow-500 dark:text-yellow-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a1 1 0 100-2 1 1 0 000 2zM10 1a1 1 0 00-1 1v1.236a6.5 6.5 0 013 0V2a1 1 0 00-1-1zM3 6.818v1.919a7.512 7.512 0 013 0V6.818a8.498 8.498 0 00-3 0zm0 4.364v1.92A7.512 7.512 0 016 13.101V10.18a8.498 8.498 0 00-3 0zm14 0v2.727a8.498 8.498 0 00-3 0v-2.727a7.512 7.512 0 013 0zm0-4.364a8.498 8.498 0 00-3 0v2.727a7.512 7.512 0 013 0V6.818z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-lg font-semibold">{car.price}</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1 text-yellow-500 dark:text-yellow-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a1 1 0 100-2 1 1 0 000 2zM4.636 14.364a7.464 7.464 0 01-1.293-1.293l1.414-1.414A5.498 5.498 0 0010 10.5c1.523 0 2.905.624 3.899 1.626l1.414-1.414a7.464 7.464 0 01-1.414 1.414l-1.414-1.414a5.5 5.5 0 00-7.778 0l-1.414 1.414a7.464 7.464 0 011.414-1.414l1.414 1.414zM10 6.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-lg font-semibold">{car.year}</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1 text-yellow-500 dark:text-yellow-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a1 1 0 100-2 1 1 0 000 2zM4.636 14.364a7.464 7.464 0 01-1.293-1.293l1.414-1.414A5.498 5.498 0 0010 10.5c1.523 0 2.905.624 3.899 1.626l1.414-1.414a7.464 7.464 0 01-1.414 1.414l-1.414-1.414a5.5 5.5 0 00-7.778 0l-1.414 1.414a7.464 7.464 0 011.414-1.414l1.414 1.414zM10 6.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-lg font-semibold">{car.type}</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1 text-yellow-500 dark:text-yellow-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a1 1 0 100-2 1 1 0 000 2zM4.636 14.364a7.464 7.464 0 01-1.293-1.293l1.414-1.414A5.498 5.498 0 0010 10.5c1.523 0 2.905.624 3.899 1.626l1.414-1.414a7.464 7.464 0 01-1.414 1.414l-1.414-1.414a5.5 5.5 0 00-7.778 0l-1.414 1.414a7.464 7.464 0 011.414-1.414l1.414 1.414zM10 6.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-lg font-semibold">{car.range}</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1 text-yellow-500 dark:text-yellow-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a1 1 0 100-2 1 1 0 000 2zM4.636 14.364a7.464 7.464 0 01-1.293-1.293l1.414-1.414A5.498 5.498 0 0010 10.5c1.523 0 2.905.624 3.899 1.626l1.414-1.414a7.464 7.464 0 01-1.414 1.414l-1.414-1.414a5.5 5.5 0 00-7.778 0l-1.414 1.414a7.464 7.464 0 011.414-1.414l1.414 1.414zM10 6.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-lg font-semibold">{car.mode}</span>
            </div>
          </div>
          {car.Button && (
            <a
              href={car.btnHref ? car.btnHref : "#"}
              className="inline-block rounded-full border border-gray-300 py-2 px-6 text-lg font-medium text-gray-800 transition hover:border-yellow-500 hover:bg-yellow-500 hover:text-white dark:border-gray-600 dark:text-gray-200 dark:hover:border-yellow-500 dark:hover:bg-yellow-500 dark:hover:text-white"
            >
              {car.Button}
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-gray-100 pb-12 pt-20 dark:bg-gray-800 lg:pb-20 lg:pt-32 ">
      <label>Year</label>
      <form>
        <select onChange={(e) => setYear(e.target.value)}>
          <option value="">Year</option>
          {uniqueYear.map((year) => (
            <option>{year}</option>
          ))}
        </select>
      </form>
      <button onClick={handleSearch}>Search</button>
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Map over cars array and render SingleCard for each car */}
          {filtedYear.map((car) => renderSingleCard(car))}
        </div>
      </div>
    </section>
  );
};

export default Cars;
