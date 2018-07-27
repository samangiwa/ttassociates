
function showGallery(tblID)
{
	$(tblID).css('display','block');
	$("#trLoading").css('display','none');
}

function showImage(imgUrl,widthVal,heightVal)
{
//alert(imgUrl);
var newImg = '<img src='+ imgUrl + '></img>';
$("#imgViewLarge").html($(newImg).animate({ height: widthVal, width: heightVal }, 1500));
//$("#imgViewLarge").html($(newImg).show( 1500));
$("#imgViewLarge").dialog({modal:true});

}