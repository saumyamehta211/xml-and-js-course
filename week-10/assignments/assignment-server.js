const http = require("http");

const students = require("./controllers/assignment");

const parseParams = (searchParams) => {
    const params = new URLSearchParams(searchParams);
    return Array.from(params.entries()).reduce(
        (acc, [key, value]) => ({ ...acc, [key]: value }),
        {}
      );
}

const server = http.createServer(async (req,res) => {
    const [basePath,searchParams] = req.url.split(`?`);
    if(basePath === `/api/students`){
        const { code, data } = await students.getAll(parseParams(searchParams));
        res.writeHead(code);
        res.end(JSON.stringify(data));
    }else if (basePath.match(/\/api\/students\/\w+/)){
        const urlElements = basePath.split(`/`);
        const  id = urlElements[urlElements.length -1];

        const { code,data } = await students.getById(id)
        res.writeHead(code);
        res.end(JSON.stringify(data));
    }else{
        res.writeHead(404)
        res.end(JSON.stringify({message:`message`}));
    }
});

const PORT = 8080;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));