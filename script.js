//  compare two JSON objects without order

var obj1 ={
    name : "Person1",
    age  : 20
}
var obj2 ={
    age : 20,
    name :"Person1"
}
let outPut2 = JSON.stringify(obj2 == obj1 );
console.log(outPut2);

// all contries flags

var request = new XMLHttpRequest();                  
request.open('GET',"https://restcountries.com/v3.1/all");
request.send();
request.onload=function() {
    var details = JSON.parse(this.response)
    console.log(details);
    for (var i=0;i<=details.length;i++){
        console.log(details[i].flags);  
   
//  print the country names,region,sub-region,population
   
    console.log(details[i].name.official,details[i].region,details[i].subregion,details[i].population);
}    
};


//  Declare four variables without assigning values and print them in console

var a;
var b;
var c;
var d;

console.log(a,b,c,d);

let e;
let f;
let g; 
let h;
console.log(e,f,g,h);

// Declare variables to store your first name, last name, marital status, country and age in multiple lines

var arr =["john","son","married","india"];

for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]); 
}

//  Declare variables to store your first name, last name, marital status, country and age in a single line

let temp =[];
for (var index = 0; index < arr.length; index++) {
        temp.push(arr[index]);
}
var t = temp.toString();
console.log(t);

// Declare variables and assign string, boolean, undefined and null data types

var arr1 =["abc",true,undefined,null]
console.log(arr1);


