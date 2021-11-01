import moment from "moment";

// here cleaning up and mapping data to have the closing price for first day of any months in the period

export const formatter = (items) =>{
  let dataMapped = {};
  let prevDate = null
  for (let item of items.reverse()) {
    let a = moment(prevDate).format("M");
    let b = moment(item.date).format("M");
    if(a != b || !prevDate ){
      prevDate = item.date
      dataMapped[item.date] = item.close;
    }
  }
  return  dataMapped
}