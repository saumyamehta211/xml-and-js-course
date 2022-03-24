const http = require("http");

const people = require("./controllers/activity");

const parseParams = (searchParams) => {
    const params = new URLSearchParams(searchParams);
    return Array.from(params.entries()).reduce(
        (acc, [key, value]) => ({ ...acc, [key]: value }),
        {}
      );
}

const server = http.createServer(async (req,res) => {
    const [basePath,searchParams] = req.url.split(`?`);
    console.log(parseParams(searchParams));
    if(basePath === `/api/people`){
        const { code, data } = await people.getAll(parseParams(searchParams));
        res.writeHead(code);
        res.end(JSON.stringify(data));
    }else if (basePath.match(/\/api\/people\/\w+/)){
        const urlElements = basePath.split(`/`);
        const  id = urlElements[urlElements.length -1];

        const { code,data } = await people.getById(id)
        res.writeHead(code);
        res.end(JSON.stringify(data));
    }else{
        res.writeHead(404)
        res.end(JSON.stringify({message:`message`}));
    }
});

const PORT = 8080;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));