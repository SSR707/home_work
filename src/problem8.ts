type profile = {name?:string ,age?:number , email?: string, password?:string }

function updateUserProfile(user:profile, newData:profile):profile{
    return {...user, email: newData.email}
}
let user : profile = {name: 'Ali' , age: 17, email: 'email07@gmail.com' , password: '2134ds'}
user = updateUserProfile(user ,{ email: "newemail@example.com" })
console.log(user)