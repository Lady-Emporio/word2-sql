
const consoleLog = async function (req, res, next) {
    let log=new Date().toString()+" | "+req.path;
    console.log(log);
    next();
}

module.exports={
    consoleLog:consoleLog,
}