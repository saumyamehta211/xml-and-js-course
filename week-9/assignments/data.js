const loadData = (path) =>
  new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        resolve(JSON.parse(target.response));
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
  });

const renderTable = (jsonData, firstNameTerm,lastNameTerm,emailTerm,genderTerm,ipTerm) => {
    const tableBody = document.getElementById("table-body");
  
    if (!tableBody) {
      throw new Error("No table element found");
    }
    let source = jsonData;

    if (firstNameTerm) {
      source = source.filter(({ first_name }) => first_name.toLowerCase().includes(firstNameTerm));
    }
    if (lastNameTerm) {
      source = source.filter(({ last_name }) => last_name.toLowerCase().includes(lastNameTerm));
    }
       
    if(emailTerm){
      source = source.filter(({ email }) => email.toLowerCase().includes(emailTerm));
    }

    if(genderTerm){
      source = source.filter(({ gender }) => gender.toLowerCase().includes(genderTerm));
    }
    if(ipTerm){
      source = source.filter(({ ip_address }) => ip_address.toLowerCase().includes(ipTerm));
    }

    const rows = source.reduce(
        (acc, { id, first_name, last_name, email, gender, ip_address }) =>
          acc +
          `<tr id="table-row-${id}"><td>${id}</td><td>${first_name}</td><td>${last_name}</td><td>${email}</td><td>${gender}</td><td>${ip_address}</td></tr>`,
        ``
      );
    
    tableBody.innerHTML = rows;  
}
  

  const onSubmit = (event) => {
    event.preventDefault();
  
    const first_name_term = event.target.first_name.value.toLowerCase();
    const last_name_term = event.target.last_name.value.toLowerCase();
    const email_term = event.target.email.value.toLowerCase();
    const gender_term = event.target.gender.value.toLowerCase();
    const ip_address_term = event.target.ip_address.value.toLowerCase();
    loadData(`./data.json`).then((data) => renderTable(data, first_name_term,last_name_term,email_term,gender_term,ip_address_term));
  };

  const onReset = () => {
    loadData(`./data.json`).then((data) => renderTable(data));
  };
loadData(`http://127.0.0.1:8080/week-9/assignments/data.json`).then((data) => renderTable(data));