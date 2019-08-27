// event事件对象 事件的冒泡、捕获、委托; 为什么传输对象是e; 什么是面向对象编程，函数的封装，要案例 ;
function sayBox3() {
    //e.stopPropagation();阻止事件冒泡
    console.log('你点了最里面的box');
}
function sayBox2(e) {
    e.stopPropagation()
    console.log('你点了最中间的box');
}
function sayBox1() {
    console.log('你点了最外面的box');
}
// 事件监听，第三个参数是布尔值，默认false，false是事件冒泡，true是事件捕获
document.getElementById('box3').addEventListener('click', sayBox3, false);
document.getElementById('box2').addEventListener('click', sayBox2, false);
document.getElementById('box1').addEventListener('click', sayBox1, false);

// document.getElementById('box3').onclick = sayBox3;
// document.getElementById('box2').onclick = sayBox2;
// document.getElementById('box1').onclick = sayBox1;  

//事件委托：，通过监听一个父元素，来给不同的子元素绑定事件，减少监听次数，从而提升速度。

//如果没有事件委托那么我需要给box1和box2和box3绑定事件呢，就要用到for循环，
// let _li = document.getElementsByTagName('div');
// //console.log(_li)
//     for(let i = 0; i<_li.length; i++){
//         _li[i].onclick = (e) => {
//             console.log('我点击了盒子')
//         }
//     }

// let box1 = document.getElementById('box1').onclick = (e) => {
//    //console.log(e.target.id)
//    if(e.target.id === 'box2'){
//       console.log('嘤嘤嘤')
//    }
//     console.log('我点击了盒子')
// }

// let box1 = document.getElementById('box3').onclick = (e) => {
//     //console.log(e.target.id)
//     if(e.target.id === 'box2'){
//        console.log('嘤嘤嘤')
//     }
//      console.log('我点击了盒子')
//  }

/* 
    什么是的对象
    面向对象编程
*/

//函数的封装，其实就是加大代码的利用率，大大节省代码量，节省空间，比如我现在要做数组的便利输出

let arr_1 = ['嘤嘤嘤', '难受受', '香菇菇']
let arr_2 = ['abc', 'def', 'ggg']

arr_1.forEach(item => {
    console.log(item)
})

arr_2.forEach(item => {
    console.log(item)
})

//如果我有一百一万个数组呢，数组特别庞大呢，做的解析很复杂呢。这个时候就是将过程封装成一个放啊，下次需要的操作数组直接调用方法就可以了。

function writeAarr(arr){
    arr.forEach(item => {
        console.log(item)
    })
}

//封装一次，多次使用

writeAarr(arr_1);
writeAarr(arr_2); //大大节省代码量，而且简便利于书写。看起来也特别方便。










