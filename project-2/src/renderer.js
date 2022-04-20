const {getAll,getColor,getManufacturer,getYear,getCountry,getById} = require("./controllers/cars");

const renderTable = (data, userNameTerm, radioTerm) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }

  let source = data;
  
  const rows = source.reduce(
    (acc, { id, car_name, car_company_name, car_model_year,car_model_color,car_vin,country_manufactured_in }) =>
      acc +
      `<tr id="table-row-${id}"><td>${id}</td><td>${car_name}</td><td>${car_company_name}</td><td>${car_model_year}</td><td>${car_model_color}</td><td>${car_vin}</td><td>${country_manufactured_in}</td></tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};

let country = getCountry();
for(var i = 0; i < country.length; i++) {
  var radio = document.createElement('input');
  var itag = document.createElement('i');
  var label = document.createElement('label');
  var br = document.createElement('br');
  radio.type = 'radio';
  radio.name = 'country_group';
  radio.id = 'country_group'+i;
  radio.value = country[i];
  itag.innerHTML = country[i];

  label.setAttribute('for','country_group'+i);
  label.appendChild(radio);
  label.appendChild(itag);

  document.getElementById('radioDiv').append(label,br);
}
let brand = getManufacturer();
for(var i = 0; i < brand.length; i++) {
  var option = document.createElement('option');
  option.setAttribute("value",brand[i]);
  option.innerHTML= brand[i];
  document.getElementById('brand').append(option);
}

let year = getYear();
for(var i = 0; i < year.length; i++) {
  var option = document.createElement('option');
  option.setAttribute("value",year[i]);
  option.innerHTML= year[i];
  document.getElementById('year').append(option);
}

let color = getColor();
for(var i = 0; i < color.length; i++) {
  var option = document.createElement('option');
  option.setAttribute("value",color[i]);
  option.innerHTML= color[i];
  document.getElementById('color').append(option);
}


getAll().then(({data}) => renderTable(data));

let form = document.querySelector("#userForm");
form.onsubmit = (event) => {
  event.preventDefault();
  const name = event.target.carname.value;
  const year = event.target.year.value;
  const color = event.target.color.value;
  const company = event.target.brand.value;
  const country = event.target.country_group.value;
  const vin = event.target.vin.value;
  console.log(name);
  console.log(year);
  console.log(color);
  console.log(company);
  console.log(country);
  console.log(vin);
  getAll({car_name:name, car_company_name:company, car_model_year:year,car_model_color:color,car_vin:vin,country_manufactured_in:country}).then(({data}) => renderTable(data));
};

form.onreset = () => {
  getAll({}).then(({data}) => renderTable(data));
};
