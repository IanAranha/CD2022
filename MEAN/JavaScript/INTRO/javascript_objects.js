let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function registration_list(arr){
    for( let i = 0; i< arr.length; i++){
        let string =""
        for(const key in arr[i]){
            const keyExtract = key
            const capitalStr = key.replace(/^\w/, c => c.toUpperCase());
            string+=`${capitalStr } : ${arr[i][key] } `
        }
        console.log(string)
    }
}

registration_list(students);