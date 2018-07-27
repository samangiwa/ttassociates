function selectTab(pageId)
{
	//if(pageId!=3)
	//{
		$("#tabTd"+pageId).attr('class','LinktabSelected');
		$("#tabTd"+pageId+" a").attr('class','LinktabSelected');
	//}
	/*else
	{

		$("#divSel").attr('class','LinktabSelected');
		$("#divSel a").attr('class','LinktabSelected');
		$("#divSel").css('display','block');
	}*/
}