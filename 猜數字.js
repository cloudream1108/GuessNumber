const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0FF33', '#FF33A6', '#33FFF4'];
const oppositeColors = ['#00A8CC', '#CC00A8', '#CCA800', '#0F00CC', '#00CC59', '#CC000B'];
let min = 0, max = -1;
let time = -1;
let ans;
let inner = document.getElementById('text');
inner.innerHTML = `請輸入範圍最大值`;

let body = document.body;
body.addEventListener('keydown', key, false);
function key(e) {
    if (e.keyCode == 13) send();
}

function random() {
    return Math.floor(Math.random() * (max+1));
}

function send() {
    // changeColor();
    let Num = document.getElementById('num');
    let num = Num.value;

    if (time == 0) {
        Num.value = "";
        inner.innerHTML = `你死了`;
        return;
    }

    if (max == -1) {
        if (num > 0 && num == Math.floor(num)) {
            max = num - 1 + 1;
            ans = random();
            inner.innerHTML = `請輸入最高挑戰次數`;
        }
        else {
            inner.innerHTML = `請輸入大於 0 的整數`;
        }
    }
    else if (time == -1) {
        if (num > 0 && num == Math.floor(num)) {
            time = num - 1 + 1;
            if (num >= max) inner.innerHTML = `你好菜，請輸入 ${min}-${max} 的整數`;
            else inner.innerHTML = `請輸入 ${min}-${max} 的整數`;
        }
        else {
            inner.innerHTML = `請輸入大於 0 的整數`;
        }
    }
    else {
        if (num != Math.floor(num)) {
            inner.innerHTML = `請輸入 ${min}-${max} 的『整數』<br>整數：不帶有分數或小數的數。`;
        }
        else if (num < min || num > max) {
            time--;
            inner.innerHTML = `挑戰次數 -1 ，請輸入『${min}-${max}』的整數`;
        }
        else {
            if (num == ans) {
                inner.innerHTML = `正確！答案是 ${ans}`;
            }
            else if (num < ans) {
                time--;
                min = num - 1 + 2;
                inner.innerHTML = `太小了，請輸入 ${min}-${max} 的整數`;
            }
            else if (num > ans) {
                time--;
                max = num - 1;
                inner.innerHTML = `太大了，請輸入 ${min}-${max} 的整數`;
            }
        }
    }

    Num.value = "";

    if (time == 0) {
        inner.innerHTML = `你死了`;
        return;
    }
}

function start() {
    // changeColor();
    min = 0, max = -1, time = -1;
    inner.innerHTML = `請輸入範圍最大值`;
}

/*
function changeColor() {
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColor];
    inner.style.color = oppositeColors[randomColor];
}
*/