var btn = document.getElementById('btn');
var input = document.getElementById ('input')
var canc = document.getElementById('canc');
var output = document.getElementById('output')
var equal = document.getElementById('equal');

btn.forEach(function(button) {
    button.addEventListener('click', function(e){
        let value = e.target.dataset.num;
        screen.value += value
    }) 
})