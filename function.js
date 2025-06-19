function hello() {
    console.log("Hello Js");
}
hello();

function add(a,b){
    console.log(a+b)
};
add(5,10);
function displayAnotherFuntion(add){       
    add(8,2)
};
displayAnotherFuntion(add);


let varFunc = add;
varFunc(1,4);

let newFuncVar = function() {
    console.log("variable Function");
};

newFuncVar();

const arrowFuncVar = () =>
{
    console.log("Arrow Functions");
};

arrowFuncVar();