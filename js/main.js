/* Author : Vaibhav Bhuva */

$(document).ready(() => {
    var targetElement = "#meta-contents #top-row";
    setTimeout(() => {
        var html = `<button class="extBtn" id="extBtn">Extension Button</button>`;
        $(targetElement).append(html);
    }, 1000);
    
    
    $(targetElement).on('click', '.extBtn', function() {
        alert("Clicked!"); 
    });


});
