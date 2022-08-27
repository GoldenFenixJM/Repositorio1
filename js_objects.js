let user={
    name: 'Luis', age: 200, toString(){
        return`{name: ${this.name}, age ${this.age}}`;
    }
}

console.log('user',user)
//Template literals
let templateLiteral= `Hello, my name is ${user.name} and 1+1= ${1+1}`
console.log('templateLiteral', templateLiteral)

let json=JSON.stringify(user);
console.log(' json', json)

let unparedJson= '{"name":"Luis","age":200}'
let newUser= JSON.parse(unparsedJson);
console.log('nesUse.Name',newUser.name)






