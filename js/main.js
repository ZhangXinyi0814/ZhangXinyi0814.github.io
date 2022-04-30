/*——————点击改变自我介绍————————*/
// var img = document.getElementById('zxy-photo');
// function changeImage(){
//     if(img.src.match('image/zxy.png')){
//         img.src = 'image/zxy-visited.png';
//     }else{
//         img.src = 'image/zxy.png';
//     }
// }

// function myFunction() {
//
//     x = document.getElementById("text-hello-1");
//
//     x.innerHTML = "🤫Listen to me👂";
//
//     x = document.getElementById("text-hello-2");
//
//     x.innerHTML = "这里是一个非典型广告学生，平时喜欢播客、综艺和戏剧，"+"喜欢尝试很多事情，未必能尽善尽美，但希望能尽力而为～"
// }

/*——————图片切换开始————————*/
    window.onload = function(){
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var txt1 = document.getElementById('txt1');
    var span1 = document.getElementById('span1');
    var img1 = document.getElementById('img1');

    var arrUrl = ['image/C2-1.jpg','image/C2-2.jpg','image/C2-3.jpg','image/C2-4.jpg'];
    var arrTxt = ['实习 (于浙江卫视《听说很好吃》节目)','杭州戏剧节志愿者','学生组织和日常生活','其他日常学习和生活碎片'];

    var num = 0;
    // 初始化显示内容
    function fnTab(){//重复的代码要用函数包起来
    span1.innerHTML = num+1 +'/' + arrUrl.length;// 1/4，因为计数是从1开始，所以num要加1
    img1.src = arrUrl[num];//动态获取数组中图片，先加载第一张图片，因为num是0
    txt1.innerHTML = arrTxt[num];//动态获取数组中文字，先显示数组中第一个文字，因为num是0
}
    fnTab();//调用函数，fnTab()代表执行函数里面的三行代码

    next.onclick = function(){
    num ++;//num自增1
    if(num == arrUrl.length){//如果num的值超过数组的长度
    num = 0;//恢复到第一张图片（数组中是从0 开始数）
}
    fnTab();// 然后相应加载的内容进行变动
}
    prev.onclick = function(){
    num --;
    if(num == -1){
    num = arrUrl.length - 1;//如果图片已经在第一张，还点击上一张，那么让图片显示最后一张，即数组长度减1为数组最后一张图片
}
    fnTab();
}
}

/*——————图片切换结束————————*/
function nameForm(){
    var x=document.forms["myForm"]["fname"].value;
    var x1=document.forms["myForm"]["email"].value;
    var atpos=x1.indexOf("@");
    var dotpos=x1.lastIndexOf(".");
    if (x==null || x==""){
        alert("✍️需要输入名字");
        return false;
    }
    else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x1.length){
        alert("🧐似乎不是一个有效的e-mail地址");
        return false;
    }
    else alert("💐留言成功！");
    }

