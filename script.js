
//step1:create an XHR object
// request has to be used in whole program

var request =new XMLHttpRequest();

//step2:create a connection
request.open('GET','https://restcountries.com/v3.1/all',true);
//step3:create a path
request.send();

//step4 :once data successfully received fron server

request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    //all logic return
    for(var i=0;i<data.length;i++)
    {
        console.log(data[i].country+"-"+data[i].capital+"-"+data[i].population);
    }
}