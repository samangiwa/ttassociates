function showImgs()
{
	/*var imgLength=$("img").length;
	for(var iLoop=1;iLoop<=imgLength;iLoop++)
	{	
		//$("#img"+iLoop.toString()).fadeIn(800);
		if(iLoop<=(imgLength-1))
		{
			$("#img"+iLoop.toString()).fadeIn(800,function(){
				$("#img"+(iLoop++).toString()).fadeIn(800);
			});
		}
		return;
	}*/
	
	
	
	/*for(var p in $("img"))
	{
		p.fadeIn(900);
	}*/
	
	//$("img").fadeIn(1000);
	
	$("#img1").fadeIn(800,function(){
		$("#img2").fadeIn(800,function(){
			$("#img3").fadeIn(800,function(){
				$("#img4").fadeIn(800,function(){
					$("#img5").fadeIn(800,function(){
						$("#img6").fadeIn(800,function(){
							$("#img7").fadeIn(800,function(){
								$("#img8").fadeIn(800,function(){
									$("#img9").fadeIn(800,function(){
										$("#img10").fadeIn(800,function(){
											$("#img11").fadeIn(800,function(){
												$("#img12").fadeIn(800,function(){
													$("#img13").fadeIn(800,function(){
														$("#img14").fadeIn(800,function(){
															$("#img15").fadeIn(800,function(){
																$("#img16").fadeIn(800,function(){
																	$("#img17").fadeIn(800);
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
}