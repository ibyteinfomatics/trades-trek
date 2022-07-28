import moment from 'moment-timezone';

const NigerianTimeZone=()=>{
    const inputTz = "Africa/Lagos"
    const originTime = new Date()
    const time = moment.tz(originTime, inputTz)
   
   return time
    // const formatDate = moment(time).format('h:mm:ss')
    // return formatDate
    
}

export default NigerianTimeZone;