//compiler tume error =>syntax error 
// console.log(1

// console.log(x)
//reference error 

// handling => 

//in js u dont'ave multiple catch block for a single try
//u should resolve error 
    try{
        console.log("try block starts here ")
        console.log(x)
        console.log("try block ends here")
    }
    catch(err){
        //define krta h ,error k sath aap kya karna chahta hai
        //retry logic
        //falback mechanism
        //logging
        //custom error
        
        console.log("error is handled ")
        throw new Error("error in the catch block")
    }
    
    finally{
        console.log("this block always executes ")
    }