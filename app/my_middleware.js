
const getStringNowDateInMyLikeFormat=()=>{
    let now=new Date();
    let toReturn=""+
        now.getFullYear()+"."+
        now.getMinutes()+"."+
        now.getDay()+" "+
        now.getHours()+":"+
        now.getMinutes()+":"+
        now.getSeconds()+":"+
        now.getMilliseconds();

    return toReturn;
}

const consoleLog = async function (req, res, next) {
    let log=getStringNowDateInMyLikeFormat()+" | "+req.path;
    console.log(log);
    next();
}

module.exports={
    consoleLog:consoleLog,
}