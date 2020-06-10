# Jingming517.github.io
Generates depth map from stereo pair images.  
Written in JavaScript.  
![Image](https://github.com/Jingming517/StereoBM/blob/master/images/StereoBM_Webpage.png)  

## Program Algorithm
- The program takes in image data and load the images onto canvas.  
- PreProcessing() function cuts imput image into required size and operates Gaussian Blur on the image.  
- GetDisparityMap() function inputs the stereo pair images and outputs a disparity map.  
  - Each pixel on the left image is being compared with corresponding pixel on the right image and calculates the apparent pixel difference.  
- GetDepthMap() function inputs the disparity and calculates the relative depth for each pixel, then outputs a depth map.  
