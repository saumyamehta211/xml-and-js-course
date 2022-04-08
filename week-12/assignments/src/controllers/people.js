const people = require("../data/MOCK_DATA");

const getAll = ({ id, first_name, last_name, email,mime_type,ip_address,username,url } = {}) =>
  new Promise((resolve) => {
    let result = people.map(result => ({...result, url: result.url.split("?")[0]}));

    if (id) {
      result = result.filter((item) => item.id === id);
    }

    if (first_name) {
      result = result.filter((item) => item.first_name === first_name);
    }

    if (last_name) {
      result = result.filter((item) => item.last_name === last_name);
    }

    if (email) {
      result = result.filter((item) => item.email === email);
    }

    if (mime_type) {
      result = result.filter((item) => item.mime_type === mime_type);
    }

    if (ip_address) {
      result = result.filter((item) => item.ip_address === ip_address);
    }

    if (username) {
      result = result.filter((item) => item.username.toLowerCase().includes(username));
    }

    if (url) {
      result = result.filter((item) => item.url === url);
    }

    resolve({ code: 200, data: result });
  });

const getMime = () => people.map(result => result.mime_type).filter((item, i, ar) => ar.indexOf(item) === i);

const getById = (id) =>
  new Promise((resolve) => {
    const person = people.find((person) => person.id === id);

    if (product) {
      resolve({ code: 200, data: person });
    } else {
      resolve({
        code: 404,
        data: { message: `No product found for id ${id}` },
      });
    }
  });

module.exports = {
  getAll,
  getMime,
  getById,
};
