let arr=['Luis','Esteban','Haro' ]

const [firstName, lastName]=arr;
console.log('firstName, lastName',firstName, lastName) 
let arr2= ['Luis','Esteban','Haro' ]
const [firstName2,lastName2]=arr2;
console.log('My new vars',firstName2, lastName2) ;

let [a,b,c]='xyz'
let [one,two,three]=new Set ([1,2,3])
/* console.log('mySet',mySet) */

let user= {
    userName:'Luis',
    userlastName:'Haro',
}
const{userName}=user;
console.log('userLastName',userlastName) ;
const{userLastname: apellido, userPhone='5555555'}=user;
console.log('userPhone',apellido)
user={
    userName:'Luis',
    userLastName:'Haro',
    userPhone:'4'
} 
const{
    userLastName: apellido, userPhone='5555555'
}=user;
console.log('userPhone',userPhone) ;


const {nationality, ...rest}=user2;
console.log('rest',rest)


const item=
{
    itemName:'Casa',
    itemDescription:
    {
        size:14,
        color: 'red'

    }
}
const { itemDescription:{ size,color:clr}}=item;
console.log('size',size)
console.log('color',clr) 

const myFunction=({itemName})=> {
    console.log('itemName',itemName) ;
}
    
console.log('myFunction(user)',myFunction(item)) ;

//5580107027




