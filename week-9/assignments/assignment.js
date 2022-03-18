const htmlToElement = (html) => {
    const template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
  };
  
  const loadData = (path) =>
  new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        resolve(target.responseXML);
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
  });
  
  const generateTableRow = (item) => {
    const id = item.attributes[0].textContent;
    const gender = item.attributes[1].textContent;
    const firstname = Array.from(item.getElementsByTagName(`first_name`))[0];
    const lastname = Array.from(item.getElementsByTagName(`last_name`))[0];
    const email = Array.from(item.getElementsByTagName(`email`))[0];
    const ip = Array.from(item.getElementsByTagName(`ip`))[0];
    
  
    return `<tr>
      <td>${id}</td>
      <td>${firstname.textContent} ${lastname.textContent}</td>
      <td>${email.textContent}</td>
      <td>${gender}</td>
      <td>${ip.textContent}</td>
    </tr>`;
  };

  const generateJsonData = (item) => {
    const id = item.attributes[0].textContent;
    const gender = item.attributes[1].textContent;
    const firstname = Array.from(item.getElementsByTagName(`first_name`))[0].textContent;
    const lastname = Array.from(item.getElementsByTagName(`last_name`))[0].textContent;
    const email = Array.from(item.getElementsByTagName(`email`))[0].textContent;
    const ip = Array.from(item.getElementsByTagName(`ip`))[0].textContent;
    let data=
        {
          "id": id,
          "firstname": firstname,
          "lastname": lastname,
          "email": email,
          "gender": gender,
          "ip": ip
        }
    ;
  
    return data;
  };
  
  const renderTable = (xmlData,name) => {
    const tableBody = document.getElementById("table-body");
  
    if (!tableBody) {
      throw new Error("No table element found");
    }
  
    const nodes = Array.from(xmlData.documentElement.childNodes).filter(
      ({ nodeName }) => nodeName === `person`
    );
  
    var jsonData = [];
    nodes.map((productNode) =>{
      jsonData.push(generateJsonData(productNode));
    });

    let source = jsonData;
    if (name) {
      source = source.filter(({ firstname,lastname }) => (firstname+" "+lastname).toLowerCase().includes(name));
    }

    const rows = source.reduce(
      (acc, { id, firstname, lastname, email, gender, ip }) =>
        acc +
        `<tr id="table-row-${id}"><td>${id}</td><td>${firstname} ${lastname}</td><td>${email}</td><td>${gender}</td><td>${ip}</td></tr>`,
      ``
    );
  
    tableBody.innerHTML = rows;
  };

  const onSubmit = (event) => {
    event.preventDefault();
  
    const name_term = event.target.name.value.toLowerCase();
    loadData(`http://127.0.0.1:8080/week-9/assignments/people.xml`).then((data) => renderTable(data, name_term));
  };

  const onReset = () => {
    loadData(`http://127.0.0.1:8080/week-9/assignments/people.xml`).then((data) => renderTable(data));
  };
  loadData(`http://127.0.0.1:8080/week-9/assignments/people.xml`).then((data) => renderTable(data));