// const  notes = "/Users/tscma/Downloads/JD%20__%20Node%20basics%20__%20MERN%20(1).pdf"


// module.exports = notes;

num1 = 20;
num2 = 40;

function add(){
    return(num1+num2);
}

function sub(){
    return(num1-num2);
}

function mult(){
    return(num1*num2);
}

function div(){
    return(num1/num2)
}

module.exports= {
    num1,num2,add,sub,mult,div
}