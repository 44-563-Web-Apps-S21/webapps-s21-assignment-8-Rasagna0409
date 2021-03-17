const http =require("http")


const hostname = process.env.hostname || '127.0.0.1'
const port = process.env.port || 3001




let Subjects = ["Lightning can, in fact, strike twice","The wind is silent until it blows against something.","Sound does not carry in space. ","An ostrich's eye is bigger than its brain","Your nose and ears never stop growing.","Your blood is as salty as the ocean."]

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Context-Type','text/plain')
    res.write(Subjects[Math.floor(Math.random()*Subjects.length)])
    res.end()
})
server.listen(port, hostname, () => {   //Start the server
    console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
  })