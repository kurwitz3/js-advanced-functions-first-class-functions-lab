const returnFirstTwoDrivers  = function(array){
  const newArray = []
    for(let i = 0; i < 2; i++){
      newArray.push(array[i])
    }
    return newArray
}

const returnLastTwoDrivers = function(array){
 return array.slice(Math.max(array.length - 2,0))
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(integer){
return function(fare){
    return fare * integer
 }
}
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array, funct){
  return funct(array)
}
