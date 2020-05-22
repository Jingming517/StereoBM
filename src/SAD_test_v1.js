//SAD(Sum of absolute differences)
//（1）构造一个小窗口,类似于卷积核；
//（2）用窗口覆盖左边的图像,选择出窗口覆盖区域内的所有像素点；
//（3）同样用窗口覆盖右边的图像并选择出覆盖区域的像素点；
//（4）左边覆盖区域减去右边覆盖区域，并求出所有像素点灰度差的绝对值之和；
//（5）移动右边图像的窗口，重复（3）-（4）的处理（这里有个搜索范围,超过这个范围跳出）；
//（6）找到这个范围内SAD值最小的窗口,即找到了左图锚点的最佳匹配的像素块。


//Simplified version
//Using matrix to represent gray scale value of each pixel

//初始化左右视图
//var _TheArray = [["0-1","0-2"],["1-1","1-2"],["2-1","2-2"]]    JS二维数组初始
var right_image = [[0, 0, 0, 0, 1, 2, 3],[0, 0, 0, 0, 4, 5, 6],[0, 0, 0, 0, 7, 8, 9]]; //length=3
var left_image  = [[1, 2, 3, 0, 0, 0, 0],[4, 5, 6, 0, 0, 0, 0],[7, 8, 9, 0, 0, 0, 0]];



function SAD_test(right_image, left_image)
{
    //
    var count = new Array();
    //计算素点灰度差的绝对值之和
    

    //右图左移5次
    for (var cnt = 0; cnt<5; cnt++)   //5 iterations
    {
        var sum = 0; //每覆盖一次所有像素点灰度值的绝对值之和
        for (var i=0; i<3; i++){
            for (var j=0; j<6; j++){
                if(j-cnt < 0) sum = sum + Math.abs(0 - left_image[i][j]);
                else sum = sum + Math.abs(right_image[i][j-cnt] - left_image[i][j]);
            }
        }
        count[cnt] =  sum;
    }

    //右图右移5次
    for (var cnt = 0; cnt<5; cnt++)   //5 iterations
    {
        var sum = 0; //每覆盖一次所有像素点灰度值的绝对值之和
        for (var i=0; i<3; i++){
            for (var j=0; j<6; j++){
                if (j+cnt+1 > 6) sum = sum + Math.abs(0 - left_image[i][j]);
                else sum = sum + Math.abs(right_image[i][j+cnt+1] - left_image[i][j]);
            }
        }
        count[cnt+5] =  sum;
    }


    var min = 306000;
    var position = 0;
    var k;
    for (k=0; k<10; k++){
        document.write(count[k]+" ");
        /*
        if(min > count[k]) {
            min = count[k];
            position = k;
        }
        */
        //min = (min<count[k] ? min : count[k]);
        //position = (min<count[k] ? position : k);
    }

    
}


SAD_test(right_image, left_image);










/*
//JS 二维数组
//方法二：未知长度的二维数组
var tArray = new Array(); //先声明一维
for(var k=0;k<i;k++){ //一维长度为i,i为变量，可以根据实际情况改变
tArray[k]=new Array(); //声明二维，每一个一维数组里面的一个元素都是一个数组；
for(var j=0;j<p;j++){ //一维数组里面每个元素数组可以包含的数量p，p也是一个变量；
tArray[k][j]=""; //这里将变量初始化，我这边统一初始化为空，后面在用所需的值覆盖里面的值
 }
}
*/