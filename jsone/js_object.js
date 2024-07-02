// // Object 

// const tutor={
//     name: "GuruQ",
//     "fullname": "Rohit Singh",
//     mobile: "7895845878",
//     age: 18,
//     email: "abc@gmail.com",
//     city: "Delhi",
//     isLoggedIn : false,
//     lastLoggedIn : ["Monday","Sunday"]

// }

// console.log(tutor.email);
// console.log(tutor['email'])
// console.log(tutor['fullname'])



// const socalUser = new Object();

// const socalUser = {}

// socalUser.id = "123abc"
// socalUser.name = "Rohit Singh"
// socalUser.isLoggedIn = false 

//console.log(socalUser)


// const regularUser = {
//     email: "someuser@gmail.com",
//     fullname: {
//         userFullname: {
//             fistname: "rohit",
//             lastname: "singh"
//         }
//     }
// }


// console.log(regularUser.fullname.userFullname.fistname)


// const obj1 = {1:"a", 2:"b"}
// const obj2 = {3:"a", 4:"b"}
// const obj3 = {5:"a", 6:"b"}
//const  obj3 = Object.assign({}, obj1, obj2)
//const obj3 = {obj1, obj2}

// const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4); 


// const users = [
//     {
//         id:1,
//         email: "abc@gmail.com"
//     },
//     {
//         id:1,
//         email: "abc@gmail.com"
//     },
//     {
//         id:1,
//         email: "abc@gmail.com"
//     },
//     {
//         id:1,
//         email: "abc@gmail.com"
//     }

// ]

// users[1].email
// console.log(socalUser);

// console.log(Object.keys(socalUser));
// console.log(Object.values(socalUser));
// console.log(Object.entries(socalUser));

// console.log(socalUser.hasOwnProperty('isLogged'));




const course = {
    coursename: "GuruQ",
    price: "999",
    teacher: "Rohit"
}

const {teacher: newteacher} = course

console.log(newteacher);