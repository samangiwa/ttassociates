function loadImages()
{	
	var imgCount=parseInt($("#hdnImgCount").val());
	var maxImg=$("#hdnMaxImg").val();
	var prValue=$("#hdnPrValue").val();
	disableBtn("#divImgBck");	
	disableBtn("#divImgFwd");	
	$("#imgMain").attr("src","../projects/"+prValue+"/1.jpg");
	$("#imgMain").fadeIn(800);
	hideAllImgDivs();
	$("#imgDiv1").css('display','block');
	$("#thumb1").attr('class','imgThumb_border');
	$("#imgDiv2").css('display','block');	
	$("#hdnCurrImg").val("1");
	if(imgCount>2)
	{
		enableBtn("#divImgFwd");
	}
	
	$("#divImgContainer").css('display','block');
}

function fwdClick()
{	
	var currImg=$("#hdnCurrImg").val();
	var maxImg=parseInt($("#hdnMaxImg").val());
	
	if(currImg!=maxImg)
	{
		enableBtn("#divImgBck");		
		var newImg=parseInt(currImg)+1;
		var prValue=$("#hdnPrValue").val();	

		if($("#imgDiv"+newImg.toString()).css('display')=='block')
		{		
			setImg(newImg.toString(),prValue);
		}
		else
		{
			hideAllImgDivs();
			$("#imgDiv"+newImg.toString()).css('display','block');
			if(maxImg>=(newImg+1))
			{
				$("#imgDiv"+(newImg+1).toString()).css('display','block');
			}
			else
			{
				disableBtn("#divImgFwd");
			}		
			setImg(newImg.toString(),prValue);
		}
	}
}

function setImg(id,project)
{
	removeImgBorder();
	$("#imgMain").hide();
	$("#thumb"+id).attr('class','imgThumb_border');
	$("#imgMain").attr("src","../projects/"+project+"/"+id+".jpg");
	$("#imgMain").fadeIn(800);
	$("#hdnCurrImg").val(id);
}

function backImgClick()
{
	var currImg=$("#hdnCurrImg").val();
	if(currImg!="1")
	{
		enableBtn("#divImgFwd");	
		var maxImg=parseInt($("#hdnMaxImg").val());
		var newImg=parseInt(currImg)-1;	
		var prValue=$("#hdnPrValue").val();	
		if((newImg==1))
		{
			disableBtn("#divImgBck");
		}
		if($("#imgDiv"+newImg.toString()).css('display')=='block')
		{		
			setImg(newImg.toString(),prValue);
		}
		else
		{
			hideAllImgDivs();
			$("#imgDiv"+newImg.toString()).css('display','block');
			$("#imgDiv"+(newImg-1).toString()).css('display','block');					
			setImg(newImg.toString(),prValue);
		}	
	}
}

function disableBtn(divImg)
{
	$(divImg).css({opacity:0.3});
}

function enableBtn(divImg)
{
	$(divImg).css({opacity:1});		
}


function selectTab()
{	
	var query = window.location.search.substring(1);
	var parms = query.split('&');
	var text="";
	var src="";
	if(parms[1]!=null)
	{		
		//selected projects
		if(parms[1]=="prt=1")
		{	
			text="Back to Selected Projects";
			src="selectedprojects.php";
		}
		else
		{
			text="Back to Selected Projects";
			src="gallery.php.php";
		}
		
	}
	else
	{
			text="Back to Selected Projects";
			src="selectedprojects.php";
	}
	
	$("#lnkBack").attr("src",src);
}

function hideAllImgDivs()
{
	$("#divImgContainer").find("div").css('display','none');
}

function removeImgBorder()
{
	$("#divImgContainer").find("img").removeClass('imgThumb_border');
}

