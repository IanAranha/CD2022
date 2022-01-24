
function minMaxAvg(arr){
    var min = arr[0];
    var max = arr[0];
    var sum = arr[0];
    for(var i=1; i< arr.length; i++){
        if(arr[i]<min){
            min = arr[i]
        }
        if(arr[i]>max){
            max = arr[i]
        }
        sum+=arr[i]
        console.log(`i = ${i} arr[${i}]: ${arr[i]} min = ${min} max = ${max} sum = ${sum}`)
    }
    var avg=(sum/arr.length).toFixed(2)
    return `The minimum is ${min}, the maximum is ${max}, and the average is ${avg}`
}   

console.log(minMaxAvg([2,8,5,3,11,9,1]))
