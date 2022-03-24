import './index.css';
// 專案的路口，預設資料夾就是 src 裡面的 index.js
const btn = document.getElementById('btn')
const num = document.getElementById('num')

btn.addEventListener("click", function () {
    const a = parseInt(num.innerText, 10)
    num.innerText = a+1;
})

// 加上 babel 就可以編譯最新的語法
class Test{
    #a = 1
}

const tt = new Test
console.log('tt.a',tt.a);