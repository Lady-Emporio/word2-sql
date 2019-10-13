

const app=require("./app");
const ENV=require("./env");

var listener=app.listen(ENV.get("express_port"),ENV.get("express_host"),
()=>{
    let address=listener.address();
    console.log(`Server on ${address.address}:${address.port} ${address.family}`);
});
