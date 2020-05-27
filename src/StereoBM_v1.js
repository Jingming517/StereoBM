
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

var c1=document.getElementById("Canvas_leftimg");     
var ctx1=c1.getContext("2d");
var leftimg=document.getElementById("leftimg");
var leftImgData=ctx1.getImageData(0,0,c1.width,c1.height);

var c2=document.getElementById("Canvas_leftimg");     
var ctx2=c2.getContext("2d");
var rightImgData=ctx2.getImageData(0,0,c2.width,c2.height);

var leftPixelGray = new Array();
var rightPixelGray = new Array();  


function Convert256toGray(imgData, pixelGray)
{
    for (var i=0;i<imgData.data.length;i+=4) 
    {
        var R = imgData.data[i]; //R(0-255)
        var G = imgData.data[i+1]; //G(0-255)
        var B = imgData.data[i+2]; //G(0-255)
        var Alpha = imgData.data[i+3]; //Alpha(0-255)
        pixelGray[i/4] = R*0.299 + G*0.587 + B*0.114;
        imgData.data[i] = pixelGray[i/4];
        imgData.data[i+1] = pixelGray[i/4]; 
        imgData.data[i+2] = pixelGray[i/4]; 
        imgData.data[i+3] = Alpha;       
     }
}

//Main function
function StereoBM()
{   
    //0、截取可能匹配的部分
    CutImg();

    //1、转换成灰度
    console.log(leftImgData);
    console.log(leftPixelGray);
    Convert256toGray(leftImgData, leftPixelGray);
    console.log(leftImgData);
    ctx.fillText(leftImgData.data[0],10,50);
    ctx1.putImageData(leftImgData,0,0);   //为！什！么！不！显！示！啊！！！！！！！！！！！！！！！！！
    /*
    for (var i=0;i<leftImgData.data.length;i+=4)
    {
        var R = leftImgData.data[i]; //R(0-255)
        var G = leftImgData.data[i+1]; //G(0-255)
        var B = leftImgData.data[i+2]; //G(0-255)
        var Alpha = leftImgData.data[i+3]; //Alpha(0-255)
        var gray = R*0.299 + G*0.587 + B*0.114;
        
        leftPixelGray.data[i] = R*0.299 + G*0.587 + B*0.114;
        leftPixelGray.data[i+1] = leftPixelGray[i];
        leftPixelGray.data[i+2] = leftPixelGray[i];
        leftPixelGray.data[i+3] = Alpha; 
        
        leftImgData.data[i] = gray;
        leftImgData.data[i+1] = gray; 
        leftImgData.data[i+2] = gray; 
        leftImgData.data[i+3] = Alpha;    
        
     }
     */
    //2、向下进行加权采样并滤波
    //（需要自行设计Kernel，常用的是一个nxn的矩阵，矩阵的内容直接影响采样的效果。可以是专门寻找边缘的kernel，平滑像素的kernel，等等，有很多类型）


    //3、灰度匹配
    //4、收缩
    //5、伸展
    //6、再次滤波（消除相同深度区块内的高频变化，保留区块之间的不连续）
    //7、平滑插值到原图大小

    ctx2.putImageData(rightImgData,0,0);
}














function CutImg(){
}
















