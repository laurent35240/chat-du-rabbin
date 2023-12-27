$(document).ready(function(){
    //Remove default value on connexion input
    $("#connexionBox .inputText").click(function(){
        this.value = "";
    }).focus(function(){
        this.value = "";
    });

    //Switch default value in search box
    $("#searchBox #searchText").focusin(function(){
        if(this.value == txtSearch)
            this.value = "";
    }).focusout(function(){
        if(this.value == "")
            this.value = txtSearch;
    });
  
    //lightbox on comic pages and cover    
    $("a#cover").add("#planches a").lightBox({
        txtImage: txtPage,
        txtOf: txtOf,
        imageLoading: srcImageLoading,
        imageBtnPrev: srcImageBtnPrev,
        imageBtnNext: srcImageBtnNext,
        imageBtnClose: srcImageBtnClose,
        imageBlank: srcImageBlank
    });
  
    //Toggle album comments
    //Not displayed in beginning
    $("a#toggleComment").html(txtShowComments);
    $("#comments").hide();
    $("a#toggleComment").click(function(event){
        $("#comments").slideToggle();
        event.preventDefault();
    }).toggle(function(){
        $(this).html(txtHideComments);
    },function(){
        $(this).html(txtShowComments);
    });
  
    //lightbox on perso gallery
    $("#galeriePerso a").lightBox({
        txtImage: txtImage,
        txtOf: txtOf,
        imageLoading: srcImageLoading,
        imageBtnPrev: srcImageBtnPrev,
        imageBtnNext: srcImageBtnNext,
        imageBtnClose: srcImageBtnClose,
        imageBlank: srcImageBlank
    });
  
    //lightbox on dedicaces gallery
    $("#dedicaces a").lightBox({
        txtImage: txtDedicace,
        txtOf: txtOf,
        imageLoading: srcImageLoading,
        imageBtnPrev: srcImageBtnPrev,
        imageBtnNext: srcImageBtnNext,
        imageBtnClose: srcImageBtnClose,
        imageBlank: srcImageBlank
    });
  
    //lightbox on fake cover gallery
    $("#fakeCover > div > a").lightBox({
        txtImage: txtFakeCover,
        txtOf: txtOf,
        imageLoading: srcImageLoading,
        imageBtnPrev: srcImageBtnPrev,
        imageBtnNext: srcImageBtnNext,
        imageBtnClose: srcImageBtnClose,
        imageBlank: srcImageBlank
    });
    $("#fakeCover > div > p > a").lightBox({
        txtImage: txtFakeCover,
        txtOf: txtOf,
        imageLoading: srcImageLoading,
        imageBtnPrev: srcImageBtnPrev,
        imageBtnNext: srcImageBtnNext,
        imageBtnClose: srcImageBtnClose,
        imageBlank: srcImageBlank
    });
  
    //screen resolution for wallpapers
    if(screen.width){
        $("#wallpaper").prepend('<p>' + txtScreenDisplay + '<span>'+ screen.width +' x '+ screen.height +'</span></p>');
    }
  
    //toggling for left menu
    var imagePlus = '<img src="' + srcImagePlus + '" alt="+" />';
    var imageLess = '<img src="' + srcImageMoins + '" alt="-" />';
    $("ul.menuLeft > li").not(".current").children("ul").hide();
    $("ul.menuLeft > li").each(function(){
        if($(this).children("ul").length > 0){
            $(this).prepend('<a href="" title="' + txtShowSubMenu +'" class="toggleMenu">'+ imagePlus +'</a> ');
            $(this).addClass('noIndent');
        }
    });
    $("ul.menuLeft > li.current > a.toggleMenu").html(imageLess).attr("title", txtHideSubMenu);
    $("ul.menuLeft > li > a.toggleMenu").click(function(event){
        if($(this).nextAll("ul:visible").length != 0){
            $(this).html(imagePlus);
            $(this).attr("title", txtShowSubMenu);
            $(this).nextAll("ul").slideUp();
        }
        else{
            $(this).html(imageLess);
            $(this).attr("title", txtHideSubMenu);
            $(this).nextAll("ul").slideDown();
        }
        event.preventDefault();
    });

    //Lightbox on all link with rel="lightbox"
    $('a[rel*="lightbox"]').lightBox({
        txtImage: txtImage,
        txtOf: txtOf,
        imageLoading: srcImageLoading,
        imageBtnPrev: srcImageBtnPrev,
        imageBtnNext: srcImageBtnNext,
        imageBtnClose: srcImageBtnClose,
        imageBlank: srcImageBlank
    });
});