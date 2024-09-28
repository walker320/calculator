(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = docment.querySelector('btn-clear');
    let equal = document.querySelector('.btn-equal')

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            if (value !== undefined) {
                screen.value += value;
            }
        });
    });
})

equal.addEventListener('click', function(e) {
    if (screen.value === '') {
        screen.value = "please enter";
    } else {
        try {
            let answer = eval(screen.value);
            screen.value = answer;
        } catch (error) {
            screen.value = "error";
        }
    }
})

clear.addEventListener('click', function(e) {
        screen.value = "";
});
