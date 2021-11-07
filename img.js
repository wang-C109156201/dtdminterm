$(document).ready(function () {
    var curIndex=0;
    //時間間隔 單位毫秒
    var timeInterval=1000;
    var arr=new Array();
    arr[0]="推薦.jpg";
    arr[1]="2000x(1).jpg";
    arr[2]="2000x.jpg";
    arr[3]="長條.jpg";
    setInterval(changeImg,timeInterval);
    function changeImg()
    {
    var obj=document.getElementById("obj");
    if (curIndex==arr.length-1)
    {
    curIndex=0;
    }
    else
    {
    curIndex+=1;
    }
    obj.src=arr[curIndex];
    }
    <img id ="obj" src ="推薦.jpg" border ="0" />
});