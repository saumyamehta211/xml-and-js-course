const htmlToElement = (html) => {
    const template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
  };
  
  const loadData = (path, callback) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        callback(target.responseXML);
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
  };
  
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
  
  const renderTable = (xmlData) => {
    const table = document.getElementById("table-main");
  
    if (!table) {
      throw new Error("No table element found");
    }
  
    const nodes = Array.from(xmlData.documentElement.childNodes).filter(
      ({ nodeName }) => nodeName === `person`
    );
  
    nodes.map((peopleNode) =>
      table.appendChild(htmlToElement(generateTableRow(peopleNode)))
    );
  };
  
  loadData(`http://127.0.0.1:8080/assignments/people.xml`, renderTable);
  
  const onReset = () => {
    window.location.replace(window.location.pathname);
  };