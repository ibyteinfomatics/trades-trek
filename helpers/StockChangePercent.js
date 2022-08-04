export const StockChangePercent=(Change,LastRate)=>{
    let temp=(Change*100)/(LastRate-Change)
    console.log(temp)
  
    return temp
}