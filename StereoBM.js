function findStereoCorrespondenceBM(left, right, disp, const, state, buf, _dy0, dy1, disp_shift)
{   
    //变量最后改
    var SADWindowSize; //SAD窗口大小
    const ALIGN = 16;
    var x, y, d;
    var wsz = state.SADWindowSize;
    var wsz2 = wsz/2;
    var dy0 = min(_dy0, wsz2+1);
    var dy1 = min(_dy1, wsz2+1); 
    var ndisp = state.numDisparities;
    var mindisp = state.minDisparity;
    var lofs = max(ndisp - 1 + mindisp, 0);
    var rofs = -min(ndisp - 1 + mindisp, 0);
    var width = left.cols, height = left.rows;
    var width1 = width - rofs - ndisp + 1;
    var ftzero = state.preFilterCap; 
    var textureThreshold = state.textureThreshold;
    var uniquenessRatio = state.uniquenessRatio;




    const TABSZ = 256;
    var tab = new Array(); //create Array
    //映射表
    //以之前的x方向的sobel滤波的截断值为中心
    for( x = 0; x < TABSZ; x++ ){
        tab[x] = Math.abs(x-ftzero); //取绝对值
    }






}

function min(a, b){
    return a<b ? a : b;
}

function max(a, b){
    return a>b ? a : b;
}