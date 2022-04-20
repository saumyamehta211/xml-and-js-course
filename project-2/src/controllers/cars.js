const cars = require("../data/car_collection.json");

const getAll = ({ id, car_name, car_company_name, car_model_year,car_model_color,car_vin,country_manufactured_in } = {}) =>
  new Promise((resolve) => {
    let result = cars;
    if (id) {
      result = result.filter((item) => item.id === id);
    }
    if (car_name) {
      result = result.filter((item) => item.car_name.toLowerCase().includes(car_name.toLowerCase()));
    }
    if (car_company_name) {
      result = result.filter((item) => item.car_company_name.toLowerCase().includes(car_company_name.toLowerCase()));
    }
    if (car_model_year) {
      result = result.filter((item) => item.car_model_year === car_model_year);
    }

    if (car_model_color) {
      result = result.filter((item) => item.car_model_color === car_model_color);
    }

    if (car_vin) {
      result = result.filter((item) => item.car_vin.toLowerCase().includes(car_vin.toLowerCase()));
    }

    if (country_manufactured_in) {
      result = result.filter((item) => item.country_manufactured_in === country_manufactured_in);
    }

    resolve({ code: 200, data: result });
  });

const getColor = () => cars.map(result => result.car_model_color).filter((item, i, ar) => ar.indexOf(item) === i);
const getManufacturer = () => cars.map(result => result.car_company_name).filter((item, i, ar) => ar.indexOf(item) === i);
const getYear = () => cars.map(result => result.car_model_year).filter((item, i, ar) => ar.indexOf(item) === i);
const getCountry = () => cars.map(result => result.country_manufactured_in).filter((item, i, ar) => ar.indexOf(item) === i);

const getById = (id) =>
  new Promise((resolve) => {
    const car = cars.find((car) => car.id === id);

    if (car) {
      resolve({ code: 200, data: car });
    } else {
      resolve({
        code: 404,
        data: { message: `No car found for id ${id}` },
      });
    }
  });

module.exports = {
  getAll,
  getColor,
  getManufacturer,
  getYear,
  getCountry,
  getById,
};
