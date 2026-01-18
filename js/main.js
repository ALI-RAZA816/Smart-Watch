$(document).ready(function(){

    $(window).on('scroll',function(){
        let scrollTop = scrollY > 500;
        if(scrollTop){
           $('#header').css({
            "position":"sticky",
            "top":0,
            "z-index":999,
            "box-shadow":"0 0 15px #ccc"
           });
        }else{
            $('#header').css({
            "position":"inherit"
           });
        }
    });
    
    $('.btn1').on('click',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('#design-performance .image-container').html(`<img src="./assets/image/Image_Jul_19__2025__12_08_18.png" alt="">`);
    });

    $('.btn2').on('click',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('#design-performance .image-container').html(`<img src="./assets/image/1_06e73fe6-715f-47e5-8aeb-c260f581604f-removebg-preview.png" alt="">`);
    });

    $('.btn3').on('click',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('#design-performance .image-container').html(`<img src="./assets/image/Image_Jul_19__2025__12_11_54.png" alt="">`);
    });

    $('.btn4').on('click',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('#design-performance .image-container').html(`<img src="./assets/image/Image_Jul_19__2025__12_15_15.png" alt="">`);
    });

});