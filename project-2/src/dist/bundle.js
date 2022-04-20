(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const cars = require("../data/car_collection.json");

const getAll = ({ id, car_name, car_company_name, car_model_year,car_model_color,car_vin,country_manufactured_in } = {}) =>
  new Promise((resolve) => {
    let result = cars;
    if (id) {
      result = result.filter((item) => item.id === id);
    }
    if (car_name) {
      result = result.filter((item) => item.car_name.toLowerCase().includes(car_name.toLowerCase()));
    }
    if (car_company_name) {
      result = result.filter((item) => item.car_company_name.toLowerCase().includes(car_company_name.toLowerCase()));
    }
    if (car_model_year) {
      result = result.filter((item) => item.car_model_year === car_model_year);
    }

    if (car_model_color) {
      result = result.filter((item) => item.car_model_color === car_model_color);
    }

    if (car_vin) {
      result = result.filter((item) => item.car_vin.toLowerCase().includes(car_vin.toLowerCase()));
    }

    if (country_manufactured_in) {
      result = result.filter((item) => item.country_manufactured_in === country_manufactured_in);
    }

    resolve({ code: 200, data: result });
  });

const getColor = () => cars.map(result => result.car_model_color).filter((item, i, ar) => ar.indexOf(item) === i);
const getManufacturer = () => cars.map(result => result.car_company_name).filter((item, i, ar) => ar.indexOf(item) === i);
const getYear = () => cars.map(result => result.car_model_year).filter((item, i, ar) => ar.indexOf(item) === i);
const getCountry = () => cars.map(result => result.country_manufactured_in).filter((item, i, ar) => ar.indexOf(item) === i);

const getById = (id) =>
  new Promise((resolve) => {
    const car = cars.find((car) => car.id === id);

    if (car) {
      resolve({ code: 200, data: car });
    } else {
      resolve({
        code: 404,
        data: { message: `No car found for id ${id}` },
      });
    }
  });

module.exports = {
  getAll,
  getColor,
  getManufacturer,
  getYear,
  getCountry,
  getById,
};

},{"../data/car_collection.json":2}],2:[function(require,module,exports){
module.exports=[{"id":1,"car_name":"1500 Club Coupe","car_company_name":"GMC","car_model_year":1998,"car_model_color":"Red","car_vin":"1D7RV1CT7BS190963","country_manufactured_in":"China"},
{"id":2,"car_name":"Continental Flying Spur","car_company_name":"Bentley","car_model_year":2008,"car_model_color":"Blue","car_vin":"1GD02ZCG0BF963273","country_manufactured_in":"China"},
{"id":3,"car_name":"1500 Club Coupe","car_company_name":"GMC","car_model_year":1993,"car_model_color":"Crimson","car_vin":"SAJWA2GT8EM108015","country_manufactured_in":"China"},
{"id":4,"car_name":"Continental Flying Spur","car_company_name":"Bentley","car_model_year":2011,"car_model_color":"Purple","car_vin":"WBA3V5C51FP023836","country_manufactured_in":"China"},
{"id":5,"car_name":"Impreza WRX","car_company_name":"Subaru","car_model_year":2010,"car_model_color":"Green","car_vin":"JN1BJ0HR6DM451007","country_manufactured_in":"China"},
{"id":6,"car_name":"Explorer","car_company_name":"Ford","car_model_year":1992,"car_model_color":"Crimson","car_vin":"WDDGF4HB2EG546667","country_manufactured_in":"China"},
{"id":7,"car_name":"Impreza","car_company_name":"Subaru","car_model_year":1994,"car_model_color":"Teal","car_vin":"2C3CCAGG3DH085919","country_manufactured_in":"China"},
{"id":8,"car_name":"LS","car_company_name":"Lexus","car_model_year":1989,"car_model_color":"Purple","car_vin":"3GYT4MEF9CG828127","country_manufactured_in":"China"},
{"id":9,"car_name":"626","car_company_name":"Mazda","car_model_year":1999,"car_model_color":"Purple","car_vin":"3C6JD6DK1CG363003","country_manufactured_in":"China"},
{"id":10,"car_name":"Bonneville","car_company_name":"Pontiac","car_model_year":1992,"car_model_color":"Goldenrod","car_vin":"WAUGFAFR7AA992946","country_manufactured_in":"China"},
{"id":11,"car_name":"Tribeca","car_company_name":"Subaru","car_model_year":2009,"car_model_color":"Indigo","car_vin":"1FMJK1G52BE965754","country_manufactured_in":"United States"},
{"id":12,"car_name":"Continental GT","car_company_name":"Bentley","car_model_year":2008,"car_model_color":"Aquamarine","car_vin":"5N1BA0NC0FN276307","country_manufactured_in":"China"},
{"id":13,"car_name":"Titan","car_company_name":"Nissan","car_model_year":2012,"car_model_color":"Blue","car_vin":"1ZVBP8AM0E5594522","country_manufactured_in":"China"},
{"id":14,"car_name":"100","car_company_name":"Audi","car_model_year":1993,"car_model_color":"Purple","car_vin":"2D4JN1AG1BR063160","country_manufactured_in":"China"},
{"id":15,"car_name":"Firebird Trans Am","car_company_name":"Pontiac","car_model_year":1986,"car_model_color":"Blue","car_vin":"JTEBU5JR2F5869150","country_manufactured_in":"China"},
{"id":16,"car_name":"Sunfire","car_company_name":"Pontiac","car_model_year":1997,"car_model_color":"Orange","car_vin":"WA1LGBFE9CD623924","country_manufactured_in":"China"},
{"id":17,"car_name":"Passat","car_company_name":"Volkswagen","car_model_year":1987,"car_model_color":"Turquoise","car_vin":"WBASP4C52AC751746","country_manufactured_in":"China"},
{"id":18,"car_name":"Traverse","car_company_name":"Chevrolet","car_model_year":2010,"car_model_color":"Teal","car_vin":"KNAFU6A24D5622432","country_manufactured_in":"China"},
{"id":19,"car_name":"Continental GT","car_company_name":"Bentley","car_model_year":2009,"car_model_color":"Purple","car_vin":"1HGCR6F38FA900740","country_manufactured_in":"China"},
{"id":20,"car_name":"V70","car_company_name":"Volvo","car_model_year":2006,"car_model_color":"Orange","car_vin":"3G5DB03E93S529132","country_manufactured_in":"China"},
{"id":21,"car_name":"Arnage","car_company_name":"Bentley","car_model_year":2006,"car_model_color":"Crimson","car_vin":"1C4RJEAG7CC973232","country_manufactured_in":"China"},
{"id":22,"car_name":"Colorado","car_company_name":"Chevrolet","car_model_year":2010,"car_model_color":"Green","car_vin":"WVGAV7AX8CW184112","country_manufactured_in":"China"},
{"id":23,"car_name":"M6","car_company_name":"BMW","car_model_year":2008,"car_model_color":"Pink","car_vin":"WAUAF78E06A672698","country_manufactured_in":"China"},
{"id":24,"car_name":"929","car_company_name":"Mazda","car_model_year":1988,"car_model_color":"Violet","car_vin":"NM0KS7DN2AT139027","country_manufactured_in":"China"},
{"id":25,"car_name":"Skylark","car_company_name":"Buick","car_model_year":1988,"car_model_color":"Turquoise","car_vin":"WBAGL83525D006357","country_manufactured_in":"China"},
{"id":26,"car_name":"Crown Victoria","car_company_name":"Ford","car_model_year":2005,"car_model_color":"Crimson","car_vin":"1FTEX1CM2BK053566","country_manufactured_in":"China"},
{"id":27,"car_name":"CLK-Class","car_company_name":"Mercedes-Benz","car_model_year":1999,"car_model_color":"Violet","car_vin":"3GYFNJE49AS081601","country_manufactured_in":"China"},
{"id":28,"car_name":"Mirage","car_company_name":"Mitsubishi","car_model_year":1995,"car_model_color":"Purple","car_vin":"JM1NC2JF5D0960562","country_manufactured_in":"China"},
{"id":29,"car_name":"98","car_company_name":"Oldsmobile","car_model_year":1996,"car_model_color":"Teal","car_vin":"3C3CFFCR5DT194188","country_manufactured_in":"China"},
{"id":30,"car_name":"V50","car_company_name":"Volvo","car_model_year":2007,"car_model_color":"Violet","car_vin":"WBA3T1C56EP556388","country_manufactured_in":"United States"},
{"id":31,"car_name":"7 Series","car_company_name":"BMW","car_model_year":2006,"car_model_color":"Mauv","car_vin":"KNAGM4A71B5356725","country_manufactured_in":"China"},
{"id":32,"car_name":"164","car_company_name":"Alfa Romeo","car_model_year":1995,"car_model_color":"Red","car_vin":"2FMHK6DT7AB446322","country_manufactured_in":"China"},
{"id":33,"car_name":"M3","car_company_name":"BMW","car_model_year":2008,"car_model_color":"Fuscia","car_vin":"5UXZV4C57DL940936","country_manufactured_in":"China"},
{"id":34,"car_name":"Wrangler","car_company_name":"Jeep","car_model_year":1993,"car_model_color":"Violet","car_vin":"WBAPH735X9E432146","country_manufactured_in":"China"},
{"id":35,"car_name":"Jetta","car_company_name":"Volkswagen","car_model_year":2001,"car_model_color":"Blue","car_vin":"5N1AN0NW2FN477345","country_manufactured_in":"China"},
{"id":36,"car_name":"TT","car_company_name":"Audi","car_model_year":2002,"car_model_color":"Teal","car_vin":"3D73Y3CL2AG512228","country_manufactured_in":"China"},
{"id":37,"car_name":"Spectra5","car_company_name":"Kia","car_model_year":2006,"car_model_color":"Maroon","car_vin":"1GKS2FEJ7DR417354","country_manufactured_in":"China"},
{"id":38,"car_name":"STS-V","car_company_name":"Cadillac","car_model_year":2008,"car_model_color":"Purple","car_vin":"3N1CE2CP2FL212139","country_manufactured_in":"China"},
{"id":39,"car_name":"Laser","car_company_name":"Plymouth","car_model_year":1994,"car_model_color":"Yellow","car_vin":"WBASN2C52AC507931","country_manufactured_in":"China"},
{"id":40,"car_name":"GTI","car_company_name":"Volkswagen","car_model_year":2012,"car_model_color":"Aquamarine","car_vin":"1N6AD0CW5FN900250","country_manufactured_in":"United States"},
{"id":41,"car_name":"Continental Flying Spur","car_company_name":"Bentley","car_model_year":2011,"car_model_color":"Mauv","car_vin":"WAUNE78P08A495336","country_manufactured_in":"China"},
{"id":42,"car_name":"CL65 AMG","car_company_name":"Mercedes-Benz","car_model_year":2009,"car_model_color":"Maroon","car_vin":"JTDZN3EU9D3476337","country_manufactured_in":"China"},
{"id":43,"car_name":"Explorer Sport Trac","car_company_name":"Ford","car_model_year":2003,"car_model_color":"Blue","car_vin":"1D7RB1CP0AS958132","country_manufactured_in":"China"},
{"id":44,"car_name":"Eos","car_company_name":"Volkswagen","car_model_year":2009,"car_model_color":"Fuscia","car_vin":"JN1BJ0HP6EM901268","country_manufactured_in":"China"},
{"id":45,"car_name":"PT Cruiser","car_company_name":"Chrysler","car_model_year":2001,"car_model_color":"Mauv","car_vin":"JM1BL1K39B1944874","country_manufactured_in":"China"},
{"id":46,"car_name":"Sunbird","car_company_name":"Pontiac","car_model_year":1985,"car_model_color":"Yellow","car_vin":"JM1NC2LF6E0744928","country_manufactured_in":"China"},
{"id":47,"car_name":"Escalade ESV","car_company_name":"Cadillac","car_model_year":2004,"car_model_color":"Puce","car_vin":"WAUFFAFLXCN100319","country_manufactured_in":"China"},
{"id":48,"car_name":"Ranger","car_company_name":"Ford","car_model_year":2010,"car_model_color":"Green","car_vin":"WBAFZ9C53CC738998","country_manufactured_in":"China"},
{"id":49,"car_name":"Estate","car_company_name":"Buick","car_model_year":1989,"car_model_color":"Goldenrod","car_vin":"2G4GT5GC9B9533939","country_manufactured_in":"China"},
{"id":50,"car_name":"Clubman","car_company_name":"MINI","car_model_year":2012,"car_model_color":"Mauv","car_vin":"JN8AE2KP0E9609687","country_manufactured_in":"China"},
{"id":51,"car_name":"Silhouette","car_company_name":"Oldsmobile","car_model_year":1993,"car_model_color":"Goldenrod","car_vin":"WBAHN83547D950503","country_manufactured_in":"United States"},
{"id":52,"car_name":"Murciélago","car_company_name":"Lamborghini","car_model_year":2006,"car_model_color":"Pink","car_vin":"JHMZF1C48BS680505","country_manufactured_in":"China"},
{"id":53,"car_name":"B2600","car_company_name":"Mazda","car_model_year":1989,"car_model_color":"Puce","car_vin":"WAUKF78EX8A487534","country_manufactured_in":"China"},
{"id":54,"car_name":"Impala","car_company_name":"Chevrolet","car_model_year":2008,"car_model_color":"Green","car_vin":"JTMHY7AJ8D4376858","country_manufactured_in":"China"},
{"id":55,"car_name":"Insight","car_company_name":"Honda","car_model_year":2004,"car_model_color":"Teal","car_vin":"1G4HP54K82U083398","country_manufactured_in":"United States"},
{"id":56,"car_name":"Spirit","car_company_name":"Dodge","car_model_year":1994,"car_model_color":"Aquamarine","car_vin":"WBAKF3C52BE317362","country_manufactured_in":"China"},
{"id":57,"car_name":"CR-V","car_company_name":"Honda","car_model_year":2002,"car_model_color":"Aquamarine","car_vin":"1GYS4FEJ3CR661257","country_manufactured_in":"China"},
{"id":58,"car_name":"i-MiEV","car_company_name":"Mitsubishi","car_model_year":2012,"car_model_color":"Violet","car_vin":"WBAPH7C53AE585973","country_manufactured_in":"China"},
{"id":59,"car_name":"Celica","car_company_name":"Toyota","car_model_year":1995,"car_model_color":"Goldenrod","car_vin":"1FTWW3B54AE281000","country_manufactured_in":"China"},
{"id":60,"car_name":"MX-5","car_company_name":"Mazda","car_model_year":2002,"car_model_color":"Mauv","car_vin":"1G4HP54K33U461029","country_manufactured_in":"China"},
{"id":61,"car_name":"911","car_company_name":"Porsche","car_model_year":1987,"car_model_color":"Khaki","car_vin":"5FRYD3H21EB599190","country_manufactured_in":"United States"},
{"id":62,"car_name":"Caravan","car_company_name":"Dodge","car_model_year":2007,"car_model_color":"Blue","car_vin":"3D4PG9FV1AT285929","country_manufactured_in":"China"},
{"id":63,"car_name":"F350","car_company_name":"Ford","car_model_year":1997,"car_model_color":"Crimson","car_vin":"19XFB2F55CE920222","country_manufactured_in":"United States"},
{"id":64,"car_name":"Dakota Club","car_company_name":"Dodge","car_model_year":2000,"car_model_color":"Violet","car_vin":"WBA3A5C52EP543490","country_manufactured_in":"United States"},
{"id":65,"car_name":"XC60","car_company_name":"Volvo","car_model_year":2009,"car_model_color":"Purple","car_vin":"SCBCR73W19C412177","country_manufactured_in":"China"},
{"id":66,"car_name":"Avenger","car_company_name":"Dodge","car_model_year":2011,"car_model_color":"Indigo","car_vin":"1FTWX3A54AE308453","country_manufactured_in":"China"},
{"id":67,"car_name":"62","car_company_name":"Maybach","car_model_year":2003,"car_model_color":"Goldenrod","car_vin":"WAUSH94F08N100325","country_manufactured_in":"China"},
{"id":68,"car_name":"Continental","car_company_name":"Bentley","car_model_year":2008,"car_model_color":"Pink","car_vin":"JH4DC53823S219654","country_manufactured_in":"China"},
{"id":69,"car_name":"Bonneville","car_company_name":"Pontiac","car_model_year":1991,"car_model_color":"Khaki","car_vin":"1FMJK1G52AE173201","country_manufactured_in":"China"},
{"id":70,"car_name":"626","car_company_name":"Mazda","car_model_year":1993,"car_model_color":"Khaki","car_vin":"WVGEF9BP7ED897090","country_manufactured_in":"China"},
{"id":71,"car_name":"Pathfinder","car_company_name":"Nissan","car_model_year":2006,"car_model_color":"Red","car_vin":"WA1CV74L59D047178","country_manufactured_in":"Germany"},
{"id":72,"car_name":"Escalade EXT","car_company_name":"Cadillac","car_model_year":2005,"car_model_color":"Goldenrod","car_vin":"3VWKX7AJ1AM464494","country_manufactured_in":"China"},
{"id":73,"car_name":"Continental Mark VII","car_company_name":"Lincoln","car_model_year":1990,"car_model_color":"Yellow","car_vin":"WP0AB2A84CU534825","country_manufactured_in":"China"},
{"id":74,"car_name":"Pajero","car_company_name":"Mitsubishi","car_model_year":1987,"car_model_color":"Purple","car_vin":"2G4WC582X61784152","country_manufactured_in":"China"},
{"id":75,"car_name":"3500","car_company_name":"Ram","car_model_year":2011,"car_model_color":"Violet","car_vin":"WAULC58E54A570672","country_manufactured_in":"China"},
{"id":76,"car_name":"Mini Cooper","car_company_name":"Austin","car_model_year":1964,"car_model_color":"Pink","car_vin":"WBAWV5C58AP636221","country_manufactured_in":"China"},
{"id":77,"car_name":"Corvair","car_company_name":"Chevrolet","car_model_year":1960,"car_model_color":"Indigo","car_vin":"2G4GT5GRXD9237271","country_manufactured_in":"China"},
{"id":78,"car_name":"Uplander","car_company_name":"Chevrolet","car_model_year":2007,"car_model_color":"Mauv","car_vin":"WAUAFAFL1AN317801","country_manufactured_in":"China"},
{"id":79,"car_name":"Ram 3500","car_company_name":"Dodge","car_model_year":2006,"car_model_color":"Fuscia","car_vin":"WAULT58E35A250543","country_manufactured_in":"China"},
{"id":80,"car_name":"Sable","car_company_name":"Mercury","car_model_year":1996,"car_model_color":"Turquoise","car_vin":"1FTEX1CM8DK645850","country_manufactured_in":"China"},
{"id":81,"car_name":"Tahoe","car_company_name":"Chevrolet","car_model_year":2007,"car_model_color":"Fuscia","car_vin":"JTHCL5EFXF5900798","country_manufactured_in":"China"},
{"id":82,"car_name":"Swift","car_company_name":"Suzuki","car_model_year":1999,"car_model_color":"Pink","car_vin":"SCBDC47L29C799889","country_manufactured_in":"China"},
{"id":83,"car_name":"Celica","car_company_name":"Toyota","car_model_year":1982,"car_model_color":"Purple","car_vin":"1FMEU7FE6AU113993","country_manufactured_in":"China"},
{"id":84,"car_name":"Venture","car_company_name":"Chevrolet","car_model_year":2003,"car_model_color":"Violet","car_vin":"JM3TB2CA6E0814952","country_manufactured_in":"China"},
{"id":85,"car_name":"Phantom","car_company_name":"Rolls-Royce","car_model_year":2012,"car_model_color":"Mauv","car_vin":"5J8TB3H56EL261214","country_manufactured_in":"China"},
{"id":86,"car_name":"Intrepid","car_company_name":"Dodge","car_model_year":1996,"car_model_color":"Goldenrod","car_vin":"JTHFN2EY4A9695343","country_manufactured_in":"Australia"},
{"id":87,"car_name":"300ZX","car_company_name":"Nissan","car_model_year":1995,"car_model_color":"Maroon","car_vin":"SCBBR93WX78139134","country_manufactured_in":"China"},
{"id":88,"car_name":"V8","car_company_name":"Audi","car_model_year":1992,"car_model_color":"Purple","car_vin":"1FMJK2A56AE694727","country_manufactured_in":"China"},
{"id":89,"car_name":"Caravan","car_company_name":"Dodge","car_model_year":1985,"car_model_color":"Mauv","car_vin":"1G6AT5S3XF0625467","country_manufactured_in":"China"},
{"id":90,"car_name":"Brooklands","car_company_name":"Bentley","car_model_year":2009,"car_model_color":"Mauv","car_vin":"5GAKRBKD3DJ086562","country_manufactured_in":"China"},
{"id":91,"car_name":"Mustang","car_company_name":"Ford","car_model_year":2013,"car_model_color":"Aquamarine","car_vin":"2D4RN4DE3AR583535","country_manufactured_in":"China"},
{"id":92,"car_name":"Murciélago","car_company_name":"Lamborghini","car_model_year":2004,"car_model_color":"Blue","car_vin":"WAUDG74F69N835201","country_manufactured_in":"China"},
{"id":93,"car_name":"FJ Cruiser","car_company_name":"Toyota","car_model_year":2011,"car_model_color":"Fuscia","car_vin":"1GD311CG4FZ375415","country_manufactured_in":"China"},
{"id":94,"car_name":"MX-5","car_company_name":"Mazda","car_model_year":2006,"car_model_color":"Aquamarine","car_vin":"3LNHL2GC6CR124151","country_manufactured_in":"China"},
{"id":95,"car_name":"6 Series","car_company_name":"BMW","car_model_year":2012,"car_model_color":"Fuscia","car_vin":"1FTEX1CM9DF458092","country_manufactured_in":"China"},
{"id":96,"car_name":"Tahoe","car_company_name":"Chevrolet","car_model_year":1995,"car_model_color":"Khaki","car_vin":"5NPDH4AE7CH720205","country_manufactured_in":"China"},
{"id":97,"car_name":"Relay","car_company_name":"Saturn","car_model_year":2005,"car_model_color":"Red","car_vin":"1N4AL3AP7EC416289","country_manufactured_in":"China"},
{"id":98,"car_name":"LeSabre","car_company_name":"Buick","car_model_year":1997,"car_model_color":"Yellow","car_vin":"WA1DMAFP1EA852921","country_manufactured_in":"China"},
{"id":99,"car_name":"X5","car_company_name":"BMW","car_model_year":2003,"car_model_color":"Pink","car_vin":"ZHWGU5AU2CL541160","country_manufactured_in":"China"},
{"id":100,"car_name":"Town Car","car_company_name":"Lincoln","car_model_year":1995,"car_model_color":"Green","car_vin":"5N1AT2MK7EC611986","country_manufactured_in":"China"},
{"id":101,"car_name":"Silverado 1500","car_company_name":"Chevrolet","car_model_year":2011,"car_model_color":"Crimson","car_vin":"WBAPK7C50AA087609","country_manufactured_in":"China"},
{"id":102,"car_name":"X5","car_company_name":"BMW","car_model_year":2004,"car_model_color":"Turquoise","car_vin":"JN1CV6EK1DM249808","country_manufactured_in":"China"},
{"id":103,"car_name":"Esperante","car_company_name":"Panoz","car_model_year":2007,"car_model_color":"Indigo","car_vin":"5N1BA0NC2FN998264","country_manufactured_in":"China"},
{"id":104,"car_name":"Fury","car_company_name":"Plymouth","car_model_year":1964,"car_model_color":"Teal","car_vin":"WAU3FAFR1DA900040","country_manufactured_in":"China"},
{"id":105,"car_name":"F350","car_company_name":"Ford","car_model_year":1996,"car_model_color":"Violet","car_vin":"JH4KB16698C599753","country_manufactured_in":"China"},
{"id":106,"car_name":"Integra","car_company_name":"Acura","car_model_year":1998,"car_model_color":"Fuscia","car_vin":"WVGAV7AX2FW357059","country_manufactured_in":"China"},
{"id":107,"car_name":"Mirage","car_company_name":"Mitsubishi","car_model_year":2001,"car_model_color":"Blue","car_vin":"1FMJK1G52CE550208","country_manufactured_in":"China"},
{"id":108,"car_name":"Brat","car_company_name":"Subaru","car_model_year":1987,"car_model_color":"Violet","car_vin":"1D7RE3GK6AS866847","country_manufactured_in":"China"},
{"id":109,"car_name":"2500 Club Coupe","car_company_name":"GMC","car_model_year":1997,"car_model_color":"Red","car_vin":"JN1AZ4EH8FM271053","country_manufactured_in":"China"},
{"id":110,"car_name":"Wrangler","car_company_name":"Jeep","car_model_year":1998,"car_model_color":"Blue","car_vin":"5N1AR1NB1CC527800","country_manufactured_in":"China"},
{"id":111,"car_name":"Regal","car_company_name":"Buick","car_model_year":1989,"car_model_color":"Pink","car_vin":"1N4AA5AP1BC911875","country_manufactured_in":"China"},
{"id":112,"car_name":"Raider","car_company_name":"Mitsubishi","car_model_year":2008,"car_model_color":"Teal","car_vin":"1FTWF3A57AE080466","country_manufactured_in":"China"},
{"id":113,"car_name":"QX","car_company_name":"Infiniti","car_model_year":1999,"car_model_color":"Purple","car_vin":"WVGEF9BP7DD774310","country_manufactured_in":"United States"},
{"id":114,"car_name":"Yukon XL 2500","car_company_name":"GMC","car_model_year":2000,"car_model_color":"Teal","car_vin":"WBA1J7C54EV990000","country_manufactured_in":"United States"},
{"id":115,"car_name":"Titan","car_company_name":"Nissan","car_model_year":2008,"car_model_color":"Yellow","car_vin":"1B3CB1HAXBD311068","country_manufactured_in":"China"},
{"id":116,"car_name":"Stratus","car_company_name":"Dodge","car_model_year":1996,"car_model_color":"Yellow","car_vin":"WBABS33422J892555","country_manufactured_in":"China"},
{"id":117,"car_name":"350Z","car_company_name":"Nissan","car_model_year":2009,"car_model_color":"Mauv","car_vin":"WBACN33491L724202","country_manufactured_in":"China"},
{"id":118,"car_name":"Defender 110","car_company_name":"Land Rover","car_model_year":1993,"car_model_color":"Mauv","car_vin":"WBAYE8C57DD755684","country_manufactured_in":"China"},
{"id":119,"car_name":"Stratus","car_company_name":"Dodge","car_model_year":1996,"car_model_color":"Teal","car_vin":"WP1AA2AP4AL812695","country_manufactured_in":"China"},
{"id":120,"car_name":"Suburban 2500","car_company_name":"Chevrolet","car_model_year":2006,"car_model_color":"Goldenrod","car_vin":"WBA3B5C54EF009037","country_manufactured_in":"China"},
{"id":121,"car_name":"200","car_company_name":"Audi","car_model_year":1991,"car_model_color":"Turquoise","car_vin":"4T1BF1FKXFU663756","country_manufactured_in":"China"},
{"id":122,"car_name":"S-Class","car_company_name":"Mercedes-Benz","car_model_year":1992,"car_model_color":"Red","car_vin":"WA1YL64B85N014211","country_manufactured_in":"China"},
{"id":123,"car_name":"VUE","car_company_name":"Saturn","car_model_year":2010,"car_model_color":"Yellow","car_vin":"2C4JRGAGXDR894034","country_manufactured_in":"China"},
{"id":124,"car_name":"Grand Prix","car_company_name":"Pontiac","car_model_year":2008,"car_model_color":"Crimson","car_vin":"1G6AH5SX4E0463550","country_manufactured_in":"China"},
{"id":125,"car_name":"Sable","car_company_name":"Mercury","car_model_year":2000,"car_model_color":"Red","car_vin":"SCBLF34F04C294924","country_manufactured_in":"China"},
{"id":126,"car_name":"C30","car_company_name":"Volvo","car_model_year":2008,"car_model_color":"Teal","car_vin":"WAUDFAFL7DN518703","country_manufactured_in":"China"},
{"id":127,"car_name":"S80","car_company_name":"Volvo","car_model_year":2004,"car_model_color":"Goldenrod","car_vin":"3LN6L2LU7ER430235","country_manufactured_in":"China"},
{"id":128,"car_name":"PT Cruiser","car_company_name":"Chrysler","car_model_year":2002,"car_model_color":"Maroon","car_vin":"WAUJT64BX4N680795","country_manufactured_in":"China"},
{"id":129,"car_name":"Countryman","car_company_name":"MINI","car_model_year":2012,"car_model_color":"Maroon","car_vin":"5J8TB4H52GL399714","country_manufactured_in":"China"},
{"id":130,"car_name":"Cabriolet","car_company_name":"Audi","car_model_year":1995,"car_model_color":"Orange","car_vin":"5N1CR2MM4EC078892","country_manufactured_in":"China"},
{"id":131,"car_name":"Montana","car_company_name":"Pontiac","car_model_year":1999,"car_model_color":"Green","car_vin":"WAUSF78EX8A807886","country_manufactured_in":"China"},
{"id":132,"car_name":"S-Type","car_company_name":"Jaguar","car_model_year":2004,"car_model_color":"Indigo","car_vin":"3C63DRMLXCG714994","country_manufactured_in":"China"},
{"id":133,"car_name":"Mirage","car_company_name":"Mitsubishi","car_model_year":1991,"car_model_color":"Orange","car_vin":"WAUK2AFD7FN830809","country_manufactured_in":"China"},
{"id":134,"car_name":"W201","car_company_name":"Mercedes-Benz","car_model_year":1993,"car_model_color":"Orange","car_vin":"WBABW33495P645586","country_manufactured_in":"China"},
{"id":135,"car_name":"B-Series Plus","car_company_name":"Mazda","car_model_year":1997,"car_model_color":"Orange","car_vin":"1G4GE5GV3AF646562","country_manufactured_in":"China"},
{"id":136,"car_name":"Rally Wagon 1500","car_company_name":"GMC","car_model_year":1992,"car_model_color":"Violet","car_vin":"2D4RN3DG6BR053394","country_manufactured_in":"China"},
{"id":137,"car_name":"E-Series","car_company_name":"Ford","car_model_year":2007,"car_model_color":"Mauv","car_vin":"WAUFFAFL0CN433032","country_manufactured_in":"China"},
{"id":138,"car_name":"Summit","car_company_name":"Eagle","car_model_year":1992,"car_model_color":"Puce","car_vin":"19UYA42783A919746","country_manufactured_in":"China"},
{"id":139,"car_name":"500SEL","car_company_name":"Mercedes-Benz","car_model_year":1993,"car_model_color":"Blue","car_vin":"WBAVC53507A683661","country_manufactured_in":"China"},
{"id":140,"car_name":"RX-7","car_company_name":"Mazda","car_model_year":1993,"car_model_color":"Green","car_vin":"JN1BJ0HP6EM893768","country_manufactured_in":"China"},
{"id":141,"car_name":"Escort","car_company_name":"Ford","car_model_year":1993,"car_model_color":"Blue","car_vin":"1FTEX1CM4CF517113","country_manufactured_in":"China"},
{"id":142,"car_name":"Eclipse","car_company_name":"Mitsubishi","car_model_year":1999,"car_model_color":"Goldenrod","car_vin":"3GYFK12279G265543","country_manufactured_in":"China"},
{"id":143,"car_name":"Explorer Sport","car_company_name":"Ford","car_model_year":2000,"car_model_color":"Red","car_vin":"KNAFU6A23A5663906","country_manufactured_in":"Germany"},
{"id":144,"car_name":"Range Rover Sport","car_company_name":"Land Rover","car_model_year":2008,"car_model_color":"Green","car_vin":"WAULT68E04A270611","country_manufactured_in":"China"},
{"id":145,"car_name":"Escort","car_company_name":"Ford","car_model_year":1988,"car_model_color":"Orange","car_vin":"JN8AZ2KR2BT461465","country_manufactured_in":"China"},
{"id":146,"car_name":"Forenza","car_company_name":"Suzuki","car_model_year":2006,"car_model_color":"Violet","car_vin":"WA1CMAFP0EA251625","country_manufactured_in":"China"},
{"id":147,"car_name":"Q","car_company_name":"Infiniti","car_model_year":1997,"car_model_color":"Pink","car_vin":"SCFBB04B08G037696","country_manufactured_in":"China"},
{"id":148,"car_name":"Continental","car_company_name":"Lincoln","car_model_year":1999,"car_model_color":"Pink","car_vin":"JH4CW2H60DC284099","country_manufactured_in":"China"},
{"id":149,"car_name":"del Sol","car_company_name":"Honda","car_model_year":1997,"car_model_color":"Red","car_vin":"3N6CM0KN9EK387445","country_manufactured_in":"China"},
{"id":150,"car_name":"Edge","car_company_name":"Ford","car_model_year":2013,"car_model_color":"Khaki","car_vin":"JHMZE2H39DS770709","country_manufactured_in":"China"},
{"id":151,"car_name":"Alcyone SVX","car_company_name":"Subaru","car_model_year":1992,"car_model_color":"Puce","car_vin":"1FTWW3A5XAE518218","country_manufactured_in":"United States"},
{"id":152,"car_name":"Odyssey","car_company_name":"Honda","car_model_year":2010,"car_model_color":"Pink","car_vin":"WBAVT13506A479238","country_manufactured_in":"China"},
{"id":153,"car_name":"Rio","car_company_name":"Kia","car_model_year":2013,"car_model_color":"Goldenrod","car_vin":"WBAPK5C50AA467246","country_manufactured_in":"China"},
{"id":154,"car_name":"Swift","car_company_name":"Suzuki","car_model_year":1995,"car_model_color":"Green","car_vin":"KM8JT3ABXBU464482","country_manufactured_in":"China"},
{"id":155,"car_name":"Liberty","car_company_name":"Jeep","car_model_year":2008,"car_model_color":"Red","car_vin":"5N1AN0NU2AC876405","country_manufactured_in":"China"},
{"id":156,"car_name":"Santa Fe","car_company_name":"Hyundai","car_model_year":2010,"car_model_color":"Goldenrod","car_vin":"1GYS4GEF0DR464713","country_manufactured_in":"China"},
{"id":157,"car_name":"Defender 110","car_company_name":"Land Rover","car_model_year":1993,"car_model_color":"Green","car_vin":"1N4AA5AP2CC903172","country_manufactured_in":"China"},
{"id":158,"car_name":"MKS","car_company_name":"Lincoln","car_model_year":2009,"car_model_color":"Purple","car_vin":"3D73Y3CLXAG525096","country_manufactured_in":"China"},
{"id":159,"car_name":"Diablo","car_company_name":"Lamborghini","car_model_year":2000,"car_model_color":"Aquamarine","car_vin":"JH4NA21681T543693","country_manufactured_in":"China"},
{"id":160,"car_name":"Tiburon","car_company_name":"Hyundai","car_model_year":2008,"car_model_color":"Maroon","car_vin":"WBAKA83589C481779","country_manufactured_in":"United States"},
{"id":161,"car_name":"Karif","car_company_name":"Maserati","car_model_year":1989,"car_model_color":"Teal","car_vin":"WAUEF98E96A272121","country_manufactured_in":"China"},
{"id":162,"car_name":"Liberty","car_company_name":"Jeep","car_model_year":2012,"car_model_color":"Orange","car_vin":"WAUVFAFH1BN473447","country_manufactured_in":"China"},
{"id":163,"car_name":"Avalanche","car_company_name":"Chevrolet","car_model_year":2010,"car_model_color":"Purple","car_vin":"JN1CV6EK9EM986210","country_manufactured_in":"China"},
{"id":164,"car_name":"Cooper Countryman","car_company_name":"MINI","car_model_year":2012,"car_model_color":"Goldenrod","car_vin":"1GTN2TEH2FZ707525","country_manufactured_in":"United States"},
{"id":165,"car_name":"rio","car_company_name":"Volkswagen","car_model_year":1996,"car_model_color":"Puce","car_vin":"2D4JN1AGXBR063741","country_manufactured_in":"China"},
{"id":166,"car_name":"Corvette","car_company_name":"Chevrolet","car_model_year":2011,"car_model_color":"Blue","car_vin":"JH4CU2F6XEC207606","country_manufactured_in":"China"},
{"id":167,"car_name":"300SL","car_company_name":"Mercedes-Benz","car_model_year":1992,"car_model_color":"Green","car_vin":"5NPDH4AE9FH134111","country_manufactured_in":"China"},
{"id":168,"car_name":"Reatta","car_company_name":"Buick","car_model_year":1990,"car_model_color":"Fuscia","car_vin":"SCFFDABE0CG223052","country_manufactured_in":"China"},
{"id":169,"car_name":"Rodeo","car_company_name":"Isuzu","car_model_year":1992,"car_model_color":"Violet","car_vin":"WA1CMBFP1EA223984","country_manufactured_in":"China"},
{"id":170,"car_name":"GTO","car_company_name":"Mitsubishi","car_model_year":1995,"car_model_color":"Indigo","car_vin":"YV4612HM9F1178743","country_manufactured_in":"China"},
{"id":171,"car_name":"Town Car","car_company_name":"Lincoln","car_model_year":1985,"car_model_color":"Purple","car_vin":"1HGCR6F54EA056616","country_manufactured_in":"China"},
{"id":172,"car_name":"Skyhawk","car_company_name":"Buick","car_model_year":1987,"car_model_color":"Green","car_vin":"KNDJN2A25F7183283","country_manufactured_in":"China"},
{"id":173,"car_name":"Camaro","car_company_name":"Chevrolet","car_model_year":1985,"car_model_color":"Turquoise","car_vin":"WAUFFBFL5CA013585","country_manufactured_in":"China"},
{"id":174,"car_name":"L-Series","car_company_name":"Saturn","car_model_year":2003,"car_model_color":"Indigo","car_vin":"W04GY5GV3B1334469","country_manufactured_in":"China"},
{"id":175,"car_name":"Caravan","car_company_name":"Dodge","car_model_year":2004,"car_model_color":"Violet","car_vin":"5UXFA93504L052735","country_manufactured_in":"China"},
{"id":176,"car_name":"Silverado","car_company_name":"Chevrolet","car_model_year":2007,"car_model_color":"Maroon","car_vin":"WP0AA2A91CS070836","country_manufactured_in":"China"},
{"id":177,"car_name":"Bronco","car_company_name":"Ford","car_model_year":1993,"car_model_color":"Violet","car_vin":"WAUD2AFD4EN600197","country_manufactured_in":"China"},
{"id":178,"car_name":"V40","car_company_name":"Volvo","car_model_year":2002,"car_model_color":"Indigo","car_vin":"1GYEE437390268443","country_manufactured_in":"China"},
{"id":179,"car_name":"Eurovan","car_company_name":"Volkswagen","car_model_year":1994,"car_model_color":"Orange","car_vin":"WAUVC68E75A370229","country_manufactured_in":"China"},
{"id":180,"car_name":"Civic","car_company_name":"Honda","car_model_year":2010,"car_model_color":"Fuscia","car_vin":"1FTEW1CW3AK277416","country_manufactured_in":"China"},
{"id":181,"car_name":"RVR","car_company_name":"Mitsubishi","car_model_year":1994,"car_model_color":"Maroon","car_vin":"WBAYA8C56FD919845","country_manufactured_in":"United States"},
{"id":182,"car_name":"Econoline E250","car_company_name":"Ford","car_model_year":1999,"car_model_color":"Crimson","car_vin":"WBABN53443J523765","country_manufactured_in":"China"},
{"id":183,"car_name":"LHS","car_company_name":"Chrysler","car_model_year":2001,"car_model_color":"Green","car_vin":"WA1CMAFP7FA099974","country_manufactured_in":"China"},
{"id":184,"car_name":"IS","car_company_name":"Lexus","car_model_year":2005,"car_model_color":"Violet","car_vin":"4T1BK1EB5EU359651","country_manufactured_in":"China"},
{"id":185,"car_name":"GTO","car_company_name":"Mitsubishi","car_model_year":1996,"car_model_color":"Goldenrod","car_vin":"JTDBT4K33B1246116","country_manufactured_in":"China"},
{"id":186,"car_name":"Corolla","car_company_name":"Toyota","car_model_year":2010,"car_model_color":"Maroon","car_vin":"1G4GA5ER2CF176948","country_manufactured_in":"China"},
{"id":187,"car_name":"Impala","car_company_name":"Chevrolet","car_model_year":1995,"car_model_color":"Aquamarine","car_vin":"1LNHL9EK2FG521824","country_manufactured_in":"China"},
{"id":188,"car_name":"Continental Mark VII","car_company_name":"Lincoln","car_model_year":1986,"car_model_color":"Maroon","car_vin":"WP0AA2A95AS868625","country_manufactured_in":"China"},
{"id":189,"car_name":"Corvette","car_company_name":"Chevrolet","car_model_year":1996,"car_model_color":"Khaki","car_vin":"WA1VMBFE5CD366830","country_manufactured_in":"China"},
{"id":190,"car_name":"300","car_company_name":"Chrysler","car_model_year":2008,"car_model_color":"Purple","car_vin":"WBAYF8C55FD525349","country_manufactured_in":"China"},
{"id":191,"car_name":"NSX","car_company_name":"Acura","car_model_year":1998,"car_model_color":"Pink","car_vin":"JTHBK1GG1D1185461","country_manufactured_in":"China"},
{"id":192,"car_name":"R8","car_company_name":"Audi","car_model_year":2011,"car_model_color":"Maroon","car_vin":"19UUA8F33EA473022","country_manufactured_in":"China"},
{"id":193,"car_name":"Express 3500","car_company_name":"Chevrolet","car_model_year":2011,"car_model_color":"Crimson","car_vin":"2C3CDXJG7EH893751","country_manufactured_in":"United States"},
{"id":194,"car_name":"Tundra","car_company_name":"Toyota","car_model_year":2010,"car_model_color":"Maroon","car_vin":"1FTEW1C88AF955829","country_manufactured_in":"United States"},
{"id":195,"car_name":"C30","car_company_name":"Volvo","car_model_year":2013,"car_model_color":"Purple","car_vin":"WBAUN13529V023650","country_manufactured_in":"China"},
{"id":196,"car_name":"Grand Vitara","car_company_name":"Suzuki","car_model_year":2000,"car_model_color":"Mauv","car_vin":"3MZBM1K78EM519862","country_manufactured_in":"China"},
{"id":197,"car_name":"Sidekick","car_company_name":"Suzuki","car_model_year":1991,"car_model_color":"Mauv","car_vin":"1FTEW1CF7FF230194","country_manufactured_in":"United States"},
{"id":198,"car_name":"Loyale","car_company_name":"Subaru","car_model_year":1993,"car_model_color":"Blue","car_vin":"WAUAF68E85A911018","country_manufactured_in":"China"},
{"id":199,"car_name":"Festiva","car_company_name":"Ford","car_model_year":1991,"car_model_color":"Red","car_vin":"WAUAFAFL1DN871019","country_manufactured_in":"United States"},
{"id":200,"car_name":"Tracker","car_company_name":"Chevrolet","car_model_year":2004,"car_model_color":"Crimson","car_vin":"4USBT33574L029146","country_manufactured_in":"United States"}]
},{}],3:[function(require,module,exports){
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

},{"./controllers/cars":1}]},{},[3]);
