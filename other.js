function getStringNowDateInMyLikeFormat(date) {
  let toReturn =
    "" +
    date.getFullYear() +
    "." +
    (""+(date.getMonth() + 1)).padStart(2,0) +
    "." +
    (""+(date.getDay() + 1)).padStart(2,0) +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds() +
    ":" +
    date.getMilliseconds();

  return toReturn;
}
module.exports={
  getStringNowDateInMyLikeFormat:getStringNowDateInMyLikeFormat,
}