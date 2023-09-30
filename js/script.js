let condition = true;
let start = 0;
let end = 0;
function forward() {
    anime ({
        targets: '.menu-small',
        translateX: ['-100%','0'],
        easing: 'easeOutCirc',
        duration:1300,
        loop: false,
    });
    anime({
        targets: '.menu_small_icon',
        rotate: 90,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1300,
        loop: false
    });
    anime({
        targets: '.stick',
        rotate: 180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1300,
        loop: false
    });
    condition = false;
}
function backward() {
    anime ({
        targets: '.menu-small',
        translateX: ['0%','-150%'],
        easing: 'easeOutCirc',
        duration:1300,
        loop: false,
    });
    anime({
        targets: '.menu_small_icon',
        rotate: -90,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1300,
        loop: false
    });
    anime({
        targets: '.stick',
        rotate: -180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1300,
        loop: false
    });
    condition = true;
}

$('.menu_small_icon').click(function(){
    if (condition) {
        forward()
    }
    else {
        backward()
    }
})

$('.container').on('touchstart', function(event) {
    start = event.originalEvent.touches[0].pageX;
})

$('.container').on('touchend', function(event) {
    end = event.originalEvent.changedTouches[0].pageX;
    if (end - start >= 110 && condition){
        forward()
    }
    else if (start - end >= 100 && !condition){
        backward()
    }
})

