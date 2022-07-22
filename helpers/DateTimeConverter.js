export const DataConvert=(date)=>{
    let d=new Date(date)
    return d.toDateString()
  }
 export const TimeConverter=(time)=>{
    let d=new Date(time)
    return d.toTimeString().slice(0,8);
    
  }