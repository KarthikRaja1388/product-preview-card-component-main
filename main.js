function replaceProductImage(){
    var screen_width = screen.availWidth;
    console.log(screen_width);
    if(screen_width > 640){
        document.getElementById('product-image').setAttribute('src','images/image-product-desktop.jpg');
    }else if(screen_width < 640){
        document.getElementById('product-image').setAttribute('src','images/image-product-mobile.jpg');

    }
}