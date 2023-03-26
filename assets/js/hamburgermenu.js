$(document).ready(function() {
    $(document).delegate('.open', 'click', function(event){
        $(this).addClass('oppenned');
        document.getElementById("hamburgerDiv").style.position ="fixed"
        event.stopPropagation();
    })
    $(document).delegate('body', 'click', function(event) {
        $('.open').removeClass('oppenned');
        document.getElementById("hamburgerDiv").style.position ="sticky"

    })
    $(document).delegate('.cls', 'click', function(event){
        $('.open').removeClass('oppenned');
        document.getElementById("hamburgerDiv").style.position ="sticky"

        event.stopPropagation();
    });
});