window.onload = function() {
    document.getElementById('testbutton').onclick = function() {
        require('child_process').exec('start cmd');
    }
}