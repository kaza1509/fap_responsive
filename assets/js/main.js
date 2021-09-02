var tagLink = document.querySelectorAll('a');
for (element of tagLink) {
    element.setAttribute('href','https://www.facebook.com/kaza15092001/');
    element.addEventListener( 'click',() => {
        alert('Mài đã bị bắt');
    })
    element.setAttribute('target','_blank')
}