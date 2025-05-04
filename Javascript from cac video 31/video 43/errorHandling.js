let a = 6
function tryCatch (){
    try{ //Try runs the code if error happens catch shows it
    console.log(a)
    return true
    }catch(error){
        throw SyntaxError("wrong syntax")//throw is used to throw custom errors
    return false
    }
    finally{ //sometimes we want a piece of code to run after try but if it's in function value returns it will stop so we use finally to execute it 
        if (true){
            console.log("Successful")
        }
        else{
            console.log("Failed")
        }
    }
}
tryCatch()