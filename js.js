let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
referch();
function referch() {
for (let i = 0; i != 150; i++) {
    let div = document.createElement('div');
    div.textContent = arr[i];
    document.querySelector('.container').appendChild(div);
}
};

function add() {
    arr.push(document.querySelector('INPUT').value);
    document.querySelector('.container').textContent = '';
    referch();
};
document.querySelector('.button').addEventListener("click", add);