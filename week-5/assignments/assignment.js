const htmlToElement = (html) => {
    const template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
  };
  
  const renderTable = () => {
    const table = document.getElementById("table-main");
  
    if (!table) {
      throw new Error("No table element found");
    }
  
    let jsonData = [
        {
            "id": 1,
            "first_name": "Husain",
            "last_name": "Zeale",
            "email": "hzeale0@odnoklassniki.ru",
            "gender": "Male",
            "ip_address": "143.237.191.245"
          },
          {
            "id": 2,
            "first_name": "Michale",
            "last_name": "Delgado",
            "email": "mdelgado1@paginegialle.it",
            "gender": "Male",
            "ip_address": "144.2.126.19"
          },
          {
            "id": 3,
            "first_name": "Gaspard",
            "last_name": "Upwood",
            "email": "gupwood2@fastcompany.com",
            "gender": "Male",
            "ip_address": "147.85.27.165"
          },
          {
            "id": 4,
            "first_name": "Gussy",
            "last_name": "Dowzell",
            "email": "gdowzell3@ox.ac.uk",
            "gender": "Male",
            "ip_address": "22.201.167.239"
          },
          {
            "id": 5,
            "first_name": "Alida",
            "last_name": "Macias",
            "email": "amacias4@slate.com",
            "gender": "Female",
            "ip_address": "166.62.41.24"
          },
          {
            "id": 6,
            "first_name": "Tess",
            "last_name": "Sainte Paul",
            "email": "tsaintepaul5@xinhuanet.com",
            "gender": "Female",
            "ip_address": "58.80.74.111"
          },
          {
            "id": 7,
            "first_name": "Germaine",
            "last_name": "Winnett",
            "email": "gwinnett6@parallels.com",
            "gender": "Genderqueer",
            "ip_address": "224.15.42.167"
          },
          {
            "id": 8,
            "first_name": "Mei",
            "last_name": "Swansbury",
            "email": "mswansbury7@uol.com.br",
            "gender": "Female",
            "ip_address": "191.235.203.177"
          },
          {
            "id": 9,
            "first_name": "Brietta",
            "last_name": "Greenfield",
            "email": "bgreenfield8@qq.com",
            "gender": "Male",
            "ip_address": "72.108.253.70"
          },
          {
            "id": 10,
            "first_name": "Guinna",
            "last_name": "Dagnan",
            "email": "gdagnan9@thetimes.co.uk",
            "gender": "Female",
            "ip_address": "108.233.202.64"
          },
    ];
  
    const withFilters = Boolean(window.location.search);
  
    if (withFilters) {
        const params = new URLSearchParams(window.location.search);

        const firstNameTerm = params.get(`first_name`).toLowerCase();
        const inputControlOne = document.getElementById(`input-first_name-term`);
        inputControlOne.value = firstNameTerm;

        const lastNameTerm = params.get(`last_name`).toLowerCase();
        const inputControlTwo = document.getElementById(`input-last_name-term`);
        inputControlTwo.value = lastNameTerm;

        const emailTerm = params.get(`email`).toLowerCase();
        const inputControlThree = document.getElementById(`input-email-term`);
        inputControlThree.value = emailTerm;

        const genderTerm = params.get(`gender`).toLowerCase();
        const inputControlFour = document.getElementById(`input-gender-term`);
        inputControlFour.value = genderTerm;

        const ipTerm = params.get(`ip_address`).toLowerCase();
        const inputControlFive = document.getElementById(`input-ip_address-term`);
        inputControlFive.value = ipTerm;

        jsonData = jsonData.filter(({ first_name }) => first_name.toLowerCase().includes(firstNameTerm));
        jsonData = jsonData.filter(({ last_name }) => last_name.toLowerCase().includes(lastNameTerm));
        jsonData = jsonData.filter(({ email }) => email.toLowerCase().includes(emailTerm));
        jsonData = jsonData.filter(({ gender }) => gender.toLowerCase().includes(genderTerm));
        jsonData = jsonData.filter(({ ip_address }) => ip_address.toLowerCase().includes(ipTerm));
    }
  
    const rows = jsonData.map(({ id, first_name, last_name, email, gender, ip_address }) =>
      table.appendChild(
        htmlToElement(
          `<tr id="table-row-${id}"><td>${id}</td><td>${first_name}</td><td>${last_name}</td><td>${email}</td><td>${gender}</td><td>${ip_address}</td></tr>`
        )
      )
    );
  };
  
  renderTable();
  
  const onReset = () => {
    window.location.replace(window.location.pathname);
  };
  