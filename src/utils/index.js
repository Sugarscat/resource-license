let bodyWidth = document.body.clientWidth;
let bodyHeight = document.body.clientHeight;

function updateBodySize() {
    bodyWidth = document.body.clientWidth;
    bodyHeight = document.body.clientHeight;
}

function setLoadingHeight() {
    const lo = document.getElementById("loading")
    lo.style.height = String(Number(bodyHeight) - 60) + "px";
}

window.addEventListener("mousemove", function(e) {
    updateBodySize();
    setLoadingHeight();
}, false);
// 监听窗口大小变化
window.addEventListener('resize', function (e) {
    updateBodySize();
    setLoadingHeight();
}, false);

