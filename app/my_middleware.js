
const getStringNowDateInMyLikeFormat=()=>{
    let now=new Date();
    let toReturn=""+
        now.getFullYear()+"."+
        (now.getMonth()+1)+"."+
        (now.getDay()+1)+" "+
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