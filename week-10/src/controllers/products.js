const data = require("../data/products");

const getAll = ({id,name,description,price}) =>
  new Promise((resolve) => {
        let filtered = data;
        if(id){
            filtered = filtered.filter((item)=> item.id === id);
        }
        if(name){
            filtered = filtered.filter((item)=> item.name === name);
        }
        if(description){
            filtered = filtered.filter((item)=> item.description === description);
        }
        if(price){
            filtered = filtered.filter((item)=> item.price === price);
        }
        resolve({ code: 200, data: JSON.stringify(filtered) });
  });

const getById = (id) => 
    new Promise((resolve) => {
        const item  = data.find((item)=> item.id===id);
        if (item){
            resolve({code:200,data})
        }else{
            resolve({
                code:404,
                data: {message:`No product found`}
            })
        }
    });

module.exports = {
  getAll,
  getById,
};
