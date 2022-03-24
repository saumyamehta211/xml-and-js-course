const people = require("../data/w5assignmentData");

const getAll = ({ id, first_name,last_name,email,gender,ip_address }) =>
  new Promise((resolve) => {
    
    let result = Array.from(people);
    if (id) {
      result = result.filter((item) => item.id.toString() === id);
    }

    if (first_name) {
      result = result.filter((item) => item.first_name === first_name);
    }

    if (last_name) {
      result = result.filter((item) => item.last_name === last_name);
    }

    if (email) {
      result = result.filter((item) => item.email === Number(email));
    }

    if (gender) {
        result = result.filter((item) => item.gender === Number(gender));
    }

    if (ip_address) {
        result = result.filter((item) => item.ip_address === Number(ip_address));
    }
    resolve({ code: 200, data: JSON.stringify(result) });
  });

const getById = (id) =>
  new Promise((resolve) => {
    const person = people.find((person) => person.id.toString()  === id);

    if (person) {
      resolve({ code: 200, data: JSON.stringify(person) });
    } else {
      resolve({
        code: 404,
        data: { message: `No person found for id ${id}` },
      });
    }
  });
  
  module.exports = {
    getAll,
    getById,
  };