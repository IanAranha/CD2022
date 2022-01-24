let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

//expected output

// EMPLOYEES
// 1 - JONES, MIGUEL - 11
// 2 - BERTSON, ERNIE - 12
// 3 - LU, NORA - 6
// 4 - BARKYOUMB, SALLY - 14
// MANAGERS
// 1 - CHAMBERS, LILLIAN - 15
// 2 - POE, GORDON - 9

function employee_roster(obj){
    for(key in obj){
        console.log(key.toUpperCase())
        let count = 1
        for(person in obj[key]){
            var fname = String(obj[key][person].first_name)
            var lname = String(obj[key][person].last_name)
            var counter = fname.length + lname.length
            console.log(`${count} - ${lname}, ${fname} - ${counter}`)
            count+=1
        }
    }
}

employee_roster(users)