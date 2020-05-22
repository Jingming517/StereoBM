<!DOCTYPE html>
<html>
 <head>
 <meta charset="UTF-8">
 <title>ImgBase</title>
 <style type="text/css">
 .scream{
 width:400px;
 height:300px;
 position: absolute;
 top:60px;
 border: 1px solid;
 }
 #canvas{
 position: absolute;
 top:60px;
 left:500px;
 border: 1px dashed;
 }
 </style>
 </head>
 <body>
 <input type="file" onchange="loadImg()"/>
 <input type="button" value="灰度化" onclick="Convert256toGray()"/>
 <br/><br/>
 <div class="scream">
 <img id="scream" width="400px" height="300px" alt="Image preview...">
 </div>
 <canvas id="canvas" width="400px;" height="300px;">
 your browser does not support canvas!
 </canvas>
 <script>
 function Convert256toGray(){
 var c=document.getElementById("canvas");
 var ctx=c.getContext("2d");
 var imgData = ctx.getImageData(0,0,c_w,c_h);
 for (var i=0;i<imgData.data.length;i+=4)
  {
  var R = imgData.data[i]; //R(0-255)
  var G = imgData.data[i+1]; //G(0-255)
  var B = imgData.data[i+2]; //G(0-255)
  var Alpha = imgData.data[i+3]; //Alpha(0-255)
  //浮点算法
  var gray = R*0.299 + G*0.587 + B*0.114;
  //整数算法
//  var gray = (R*299 + G*587 + B*114 + 500) / 1000;　
  //移位算法
//  var gray =(R*76+G*151+B*28)>>8;
  //平均值算法
//   var gray = (R+G+B)/3;
  //仅取绿色
//  var gray=G;
   imgData.data[i] = gray;
   imgData.data[i+1] = gray; 
   imgData.data[i+2] = gray; 
   imgData.data[i+3] = Alpha; 
  }
 ctx.putImageData(imgData,0,0);
 }
 </script>
 <!--base-->
 <script>
 //canvas图像的宽高 
 var c_w = 400; var c_h = 300;
 //加载img图像
 function loadImg(){
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
 </script>
 </body>
</html>

