const app=require('express')();
const bodyparser=require('body-parser');
const {PORT}=require('./config/server_config.js');
async  function startandSetupServer(){
    app.use(bodyparser.urlencoded({extended:false}));
    app.use(bodyparser.json());
    app.use('/book',require('./routes/index'));
    app.listen(PORT,(error)=>{
        console.log(`Server is running on port no : ${PORT}`);
    })
}
startandSetupServer();