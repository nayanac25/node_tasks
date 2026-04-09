// const http =require("http");

// const app=http.createServer((req,res)=>{
//     res.write("Helloooo My name is Nayana Chafekar");
//     res.end()
// })

// const PORT = 2000;
// const HOST = "127.0.0.1";

// app.listen(PORT,HOST,()=>{
//     console.log(`Server is running on the http://${HOST}:${PORT}`);
// });

// ******************************************************************************************************


const http = require("http");

const app = http.createServer((req, res) => {
  res.write(`<html>
        <head>
            <style>
                h1{
                    font-size:35px;
                    font-weight:bold;
                    color: #0e0e0e;
                    text-align:center;
                    margin-top:20px;
                }
                h2{
                    background-color: lightblue;
                    color: white;
                    padding:10px;
                    text-align:center;
                    text-shadow: 2px 2px 4px gray;
                }
                p{
                    font-size:18px;
                    line-height:1.5;
                    color: #333;
                    margin:20px;
                }
            </style>
            </head>
            <body>
            <h1>Node.js Practice</h1>
                <h2>What is Node.js?</h2>
                <p>Node.js is a Javascript library, it allows development of server-side applications using JavaScript.
                And it allows to run JavaScript on the server-side.</p>
            </body>
    </html>
    `);
  res.end();
});

const PORT = 2000;
const HOST = "127.0.0.1";

app.listen(PORT, HOST, () => {
  console.log(`Server is running on the http://${HOST}:${PORT}`);
});
