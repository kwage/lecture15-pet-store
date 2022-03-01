
window.addEventListener('load', function() {
    let myBtn = document.getElementById('rose-adopt-button');
    myBtn.addEventListener('click', function() {
        myBtn.innerText = "Rose is adopted!";
        myBtn.setAttribute('disabled', true);
        myBtn.setAttribute('style', 'background-color: #F13FF2');
    });
    
    let myBtn2 = document.getElementById('pixel-adopt-button');
    myBtn2.addEventListener('click', function() {
        myBtn2.innerText = "Pixel is adopted!";
        myBtn2.setAttribute('disabled', true);
        myBtn2.setAttribute('style', 'background-color: red');
    });
});

