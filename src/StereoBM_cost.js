//cost function 代价函数
//An algorithm that finds best fit line for given training data set
//x and y are array

/*
function gradient_descent(x, y){
    var m_curr = 0;
    var b_curr = 0;
    var iterations = 10000;
    var n = x.length;  //n = len(x)
    var  learning_rate = 0.08;

    for (var i=0; i<=iterations; i++){
        y_predicted = m_curr * x +b_curr;
        var cost = 0;
        for (var j=y; j<=y_predicted; j++){
            cost += (1/n) * j * 2;
        }

        var md = 0;
        for (var k=y; k<=y_predicted; k++){
            md += -(2/n) * x * k;
        }

        var bd = 0;
        for (var l=y; l<=y_predicted; l++){
            bd += -(2/n) * k;
        }

        m_curr = m_curr - learning_rate * md
        b_curr = b_curr - learning_rate * bd
        
        document.write (m_curr + " ");
        document.write (b_curr + " ");
        document.write (cost + " ");
        document.write (i + "<br>");
        
    }
}
var x = [1, 2, 3, 4, 5];
var y = [5, 7, 9, 11, 13];
//x = np.array([1,2,3,4,5])
//y = np.array([5,7,9,11,13])

gradient_descent(x,y);

*/














//转换灰度值
// perform histgram equalization for single channel image
//记录每个像素点的灰度值
//白色为255，黑色为0
var pixelGray = new Array();

//返回一个长度为120000的数组， 从上到下从左到右每个像素点的灰度值
function Convert256toGray()
{
    var c=document.getElementById("canvas");

    //getContext() 方法返回一个用于在画布上绘图的环境。
    //Canvas.getContext(contextID)
    //该对象导出一个二维绘图 API
    var ctx=c.getContext("2d");

    //getImageData
    //复制画布上指定矩形的像素数据 （R G B | 0~255)
    //data：一个 Uint8ClampedArray 类型的一维数组，包含RGBA 顺序的数据，
    //每4个元素表示一个RGBA 值即对应一个像素, 左上角在数组的索引0位置，像素从左到右被处理，然后往下，遍历整个数组
    //data.length = height * width * 4
    //input: 矩形区域的左上角 x 坐标, 矩形区域的左上角 y 坐标, 矩形区域的宽度, 矩形区域的高度)
    var imgData = ctx.getImageData(0,0,c_w,c_h);

    //注意：ImageData 对象不是图像，它规定了画布上一个部分（矩形），并保存了该矩形内每个像素的信息。
    //对于 ImageData 对象中的每个像素，都存在着四方面的信息，即 RGBA 值：
    //R - 红色（0-255）
    //G - 绿色（0-255）
    //B - 蓝色（0-255）
    //A - alpha 通道（0-255; 0 是透明的，255 是完全可见的）

    //120000 iterations (120000 pixel)
    for (var i=0;i<imgData.data.length;i+=4)
    {
        var R = imgData.data[i]; //R(0-255)
        var G = imgData.data[i+1]; //G(0-255)
        var B = imgData.data[i+2]; //G(0-255)
        var Alpha = imgData.data[i+3]; //Alpha(0-255)
        //计算灰度值
        //从左到右 从上到下 每个像素点一个灰度值
        pixelGray[i/4] = R*0.299 + G*0.587 + B*0.114;
        //把像素数据转换为对应的灰度值
        imgData.data[i] = pixelGray[i/4];
        imgData.data[i+1] = pixelGray[i/4]; 
        imgData.data[i+2] = pixelGray[i/4]; 
        imgData.data[i+3] = Alpha;  
     }
    //通过 putImageData() 将图像数据放回画布： （过后删除）
    //ctx.putImageData(imgData,0,0);
    for (var j=0; j< pixelGray.length; j++){
        document.write (pixelGray[j] + " ");
    }
}








//canvas图像的宽高 
var c_w = 400; 
var c_h = 300;

//加载img图像
function loadImg()
{
    var img = document.getElementById("scream");
    var file = document.querySelector('input[type=file]').files[0];

    if(!/image\/\w+/.test(file.type)){
        alert("文件必须为图片！");
        return false;
    }
    var reader = new FileReader();
    reader.addEventListener("load", function () {
        img.src = reader.result;
        }, false);
    if(file) {
        reader.readAsDataURL(file);
        loadCanvas();
    }
}
//加载canvas图像
function loadCanvas(){
    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");
    var img = document.getElementById("scream");
    img.onload = function() {
        ctx.drawImage(img,0,0,c_w,c_h);
    } 
}



