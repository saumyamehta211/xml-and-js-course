const {getAll,getMime} = require("./controllers/people");

const renderTable = (data, userNameTerm, radioTerm) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }

  let source = data;
  
  const rows = source.reduce(
    (acc, { id, first_name, last_name, email,mime_type,ip_address,username,url }) =>
      acc +
      `<tr id="table-row-${id}"><td>${id}</td><td>${first_name}</td><td>${last_name}</td><td>${email}</td><td>${mime_type}</td><td>${ip_address}</td><td>${username}</td><td>${url}</td></tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};

let mime = getMime();
for(var i = 0; i < mime.length; i++) {
  var radio = document.createElement('input');
  var label = document.createElement('label');
  var br = document.createElement('br');
  radio.type = 'radio';
  radio.name = 'mime_group';
  radio.value = mime[i];

  label.setAttribute("for", 'mime_group');
  label.innerHTML = mime[i];
  label.appendChild(radio);

  document.getElementById('radioDiv').append(label,br);
}

getAll().then(({data}) => renderTable(data));

let form = document.querySelector("#userForm");
form.onsubmit = (event) => {
  event.preventDefault();
  const term = event.target.username.value;

  const radioTerm = event.target.mime_group.value;
  console.log(term);
  console.log(radioTerm);
  getAll({username:term,mime_type:radioTerm}).then(({data}) => renderTable(data));
};

form.onreset = () => {
  getAll({}).then(({data}) => renderTable(data));
};
