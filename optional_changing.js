let user={}
console.log('user',user) ;
user={
    adress:{
    street: 'Random street Value'
    
    }
}
console.log('user',user) ;
console.log('colony',user.adress.colony.municipality) ;
user={
    adress:{
    street: 'Random street Value',colony:{
        municipality:"1"
    }
    
    }
}
console.log('colony',user.adress.colony.municipality)