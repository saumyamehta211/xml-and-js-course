/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */

  const timeout = (ms, callback) =>
    new Promise((resolve) => setTimeout(() => {callback(); resolve(); }, ms));
  
  const generateRandomNumber = () =>
    Math.floor(Math.random() * 40);
  
  const generateData = (callback) => {
    new Promise((resolve)=>
    timeout(1000, async () => {
        const data = Array.from({ length: 20 }, generateRandomNumber);
        await callback(data);
    }).then(resolve())
    );
  }
  
  const convertToFeet = (meters, callback) => {
    return new Promise((resolve)=>timeout(3500, async () => { await callback(meters * 3.2808); }).then(resolve()));
  }
  
  const processData = async (data, callback) => {
    return new Promise((resolve) =>
    data.map(async (value) => {
      await callback(value);
    }).then(resolve()));
  }
  
  const logResult = (meters, feet) => 
    new Promise((resolve)=>resolve(console.log(`Converted ${meters}m to ${feet}ft`)));
    
  const main = async () => {
    console.log("Start");
    await generateData( async (data) => { 
      await processData(data, async (value) => {
        await convertToFeet(value, async (result) => {
            await logResult(value, result);
        });
      });
    });
    console.log("Finish");
    
  }
  
  main();
  