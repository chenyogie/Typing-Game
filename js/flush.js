/**
 * 点击start按钮触发的事件
 */
var creatId = null;
var moveId = null;
function start() {
    creatId = setInterval(creat, 700);
    moveId = setInterval(move, 40);
}

/**
 * 点击stop触发停止游戏事件
 */
function stop(){
    clearInterval(creatId);
    clearInterval(moveId);
    creatId = null;
}

/**
 * 生成div字母块
 */
//定义一个全局的数组，用于保存div字母块
const arr = new Array();

function creat() {
    let div = document.createElement("div");
    div.className = "p";
    div.style.top = 0 + "px";
    let width = screen.width;
    div.style.left = Math.random() * (width * 0.8) + (width * 0.1) + "px";
    div.innerText = String.fromCharCode(Math.random() * 26 + 65);
    document.body.appendChild(div);
    arr.push(div);
}

/**
 * 让div字母块动起来的方法
 */
function move() {
    for (let i in arr) {
        let div = arr[i];
        let oldTop = parseInt(div.style.top);
        //console.log(document.documentElement.clientHeight)
        if (oldTop >= document.documentElement.clientHeight) {
            document.body.removeChild(div);
            arr.splice(parseInt(i), 1);
            return;
        } else {
            div.style.top = parseInt(oldTop) + 5 + "px";
        }
    }
}

/**
 * 监听键盘事件
 * @param e
 */
document.onkeydown = function (e) {
    let keyword = e.key.toUpperCase();
    for (let i in arr) {
        if (keyword == arr[i].innerText) {
            document.body.removeChild(arr[i]);
            arr.splice(parseInt(i), 1);
            document.getElementById("hit").play();
            //计分
            let span = document.getElementById("score");
            let oldScore = span.innerText;
            span.innerText = parseInt(oldScore) + 1;
            span.style.color = "red";
            return;
        } else {
            let span = document.getElementById("score");
            let oldScore = span.innerText;
            if (oldScore > 0) {
                span.innerText = parseInt(oldScore) - 1;
            }
            return;
        }
    }
};
window.onload = function () {
    /*let height = document.documentElement.clientHeight;
    let width = document.documentElement.clientWidth;
    document.body.style.backgroundSize=width+"px "+height+"px";*/

}