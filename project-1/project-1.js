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

const generateJsonData = (item) => {
 
  

  const sku = item.attributes[0].textContent;
  const productName = Array.from(item.getElementsByTagName(`productName`))[0];
  const manufacturer = Array.from(item.getElementsByTagName(`manufacturer`))[0];
  const manufacturerId = manufacturer.attributes[0].textContent;
  const shippable = item.attributes[2].textContent;
  const description = Array.from(item.getElementsByTagName(`description`))[0];
  let data=
      {
        "sku": sku,
        "product_name": productName.textContent,
        "manufacturer": manufacturer.textContent,
        "manufacturer_id": manufacturerId,
        "description": description.textContent,
        "shippable": shippable
      }
  ;

  return data;
};

const generateTableRow  = (item) => {};

const renderTable = (xmlData) => {
  const table = document.getElementById("table-main");

  if (!table) {
    throw new Error("No table element found");
  }

  const nodes = Array.from(xmlData.documentElement.childNodes).filter(
    ({ nodeName }) => nodeName === `product`
  );

  var jsonData = [];
  nodes.map((productNode) =>{
      // table.appendChild(htmlToElement(generateJsonData(productNode)));
      jsonData.push(generateJsonData(productNode));
    }
  );

  const withFilters = Boolean(window.location.search);
  
  if (withFilters) {
      const params = new URLSearchParams(window.location.search);
      let manufacturers=[];
      let i=0;
      params.forEach(function(val, key){  
        if(key=="manufacturer"){
          manufacturers[i]=val;
          i++;
        }
      });
      const skuTerm = params.get(`sku`).toLowerCase();
     
        const inputControlOne = document.getElementById(`input-sku-term`);
        inputControlOne.value = skuTerm;
      

      const nameTerm = params.get(`name`).toLowerCase();
      const inputControlTwo = document.getElementById(`input-name-term`);
      inputControlTwo.value = nameTerm;

      const desTerm = params.get(`description`).toLowerCase();
      const inputControlSix = document.getElementById(`input-description-term`);
      inputControlSix.value = desTerm;

      const shippableTerm = params.get(`shippable`).toLowerCase();
      if(shippableTerm){
        const inputControlThree = document.getElementById(`input-shippable-term-true`);
        inputControlThree.checked = true;
      }else{
        const inputControlFour = document.getElementById(`input-shippable-term-false`);
        inputControlFour.checked = false;
      }
      
      manufacturers.forEach(function(val,key){
        let manId = `input-manufacturer-term-`+val;
        let inputControlFive = document.getElementById(manId);
        inputControlFive.checked= true;
      });
      jsonData = jsonData.filter(({ sku }) => sku.toLowerCase().includes(skuTerm));
      jsonData = jsonData.filter(({ product_name }) => product_name.toLowerCase().includes(nameTerm));
      if(manufacturers.length>0){
        jsonData = jsonData.filter(({ manufacturer_id }) => manufacturers.some(i => manufacturer_id.includes(i)));
      }
      jsonData = jsonData.filter(({ description }) => description.toLowerCase().includes(desTerm));
      jsonData = jsonData.filter(({ shippable }) => shippable.toLowerCase().includes(shippableTerm));
    
  }
  const rows = jsonData.map(({ sku, product_name, manufacturer, manufacturer_id, description, shippable }) =>
      table.appendChild(
        htmlToElement(
          `<tr id="table-row-${sku}"><td>${sku}</td><td>${product_name}</td><td>${manufacturer}</td><td>${description}</td><td>${shippable}</td></tr>`
        )
      )
    );

  
};

loadData(`http://127.0.0.1:8080/project-1/project-1.xml`, renderTable);

const onReset = () => {
  window.location.replace(window.location.pathname);
};
