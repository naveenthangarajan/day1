var request1 =new XMLHttpRequest();

request1.open('GET','https://raw.githubusercontent.com/rajavasanthan/jsondata/master/pagenation.json',true);

request1.send();


request1.onload=function()
{
    var data=JSON.parse(request1.response);


    for(var i=0; i< data.length;i++)
    {
        console.log(data[i].id+"-"+data[i].name+"-"+data[i].email);
    }
}
