//Scrivi un programma che stampi i numeri da 1 a 100
//Per i multipli di 3 stampi “Fizz” al posto del numero 
//Per i multipli di 5 stampi Buzz
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz



//Stampa i numeri da 1 a 100 
for( var i = 1 ; i <= 100 ; i++) {
    
    //per i numeri multipli di 3 e 5 stampa "FizzBuzz"
    if((i % 3 == 0) && (i % 5 == 0) ) {

        console.log("FizzBuzz");
        
        
    }else if(i % 3 == 0) { //per i numeri multipli di 3 stampa "Fizz"
        
        console.log("Fizz"); 

    } else if(i % 5 == 0) { //per i numeri multipli di 5 stampa "Buzz"

        console.log("Buzz");

    }else { //per tutti gli altri numeri (non divisibili per 3, 5, 3 e 5) scrivi il numero

        console.log(i);
    }
 
    
}

