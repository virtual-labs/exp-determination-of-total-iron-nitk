var tn=0;
var a,b,c=0;
var n=0;
var op1=0;
var op2=0;
var count=0;
var s1,s2;
//var ab=[[0,0.0268,0.0419,0.0849,0.101,0.121,0.166,0.169,0.006],
		//[0,0.0351,0.06,0.0945,0.1332,0.1626,0.1783,0.2294,0.0036],
		//[0,0.351,0.0592,0.0964,0.1259,0.1624,0.1733,0.1525,0.079],
		//[0,0.0318,0.0345,0.0751,01164,0.1252,0.1451,0.1381,0.0026],
		//[0,0.398,0.682,0.806,0.1188,0.1356,0.2323,0.1637,0.0074],
		//[0,0.0287,0.0605,0.0870,0.1017,0.1332,0.1431,0.1835,0.0116],
		//[0,0.035,0.064,0.100,0.180,0.260,0.290,0.164,0.019],
		//[0,0.033,0.067,0.086,0.106,0.117,0.130,0.144,0.019],
		//[0,0.038,0.051,0.069,0.115,0.154,0.170,0.134,0.019]];
  var ab=[[0,0.0268,0.0499,0.0759,0.1008,0.1312,0.1663,0.149,0.009],
		[0,0.0351,0.06,0.0945,0.1332,0.1626,0.1783,0.164,0.0078],
		[0,0.0351,0.0662,0.0964,0.1259,0.1524,0.1791,0.1525,0.079],
		[0,0.0114,0.0389,0.0751,0.104,0.1252,0.1451,0.1381,0.015],
		[0,0.0338,0.0462,0.0586,0.0698,0.0816,0.0963,0.0737,0.0074],
		[0,0.0287,0.0605,0.087,0.107,0.1332,0.1481,0.1235,0.0116],
		[0,0.025,0.064,0.12,0.18,0.24,0.31,0.164,0.019],
		[0,0.033,0.052,0.071,0.089,0.111,0.128,0.095,0.019],
		[0,0.025,0.051,0.079,0.115,0.154,0.19,0.134,0.019]];
//to generate random numbers
var p=Math.floor(Math.random()*(9));

//to prevent entering non-integer values and alphabets
$(function()
{
	$('input').on('input', function() {
		this.value = this.value.match(/\d*(\.\d*)?/)[0];
	});
});

function navNext()
{
	for(temp=0;temp<=12;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

var ca;
var questions=["Potassium Thiocyanate is added to the sample </br>for adsorption of iodine on precipitate?",
				"Wavelength used in colorimetric</br> determination of iron content is  ",
				"What is the formula to </br>calculate transmittance, if</br> the absorbance value is given?",
				"Ferric iron combines with thiocyanate ions to</br> form a ______ coloured ferric thiocyanate.",
				"In iron test, amount of light</br> absorbed depends upon"];
var options2=[["True","False"],//True
			  ["310nm","410nm","510nm","610nm"],//510nm
			  ["%T = log(2–absorbance)"," %T = antilog(2–absorbance)"," %T = antilog(2+absorbance)","%T = antilog(2*absorbance)"],//%T = antilog(2–absorbance)
			  ["Orange","Yellow","Blue","Red"],//Red
			  ["the wavelength","the path length","the concentration","All of the above"]];//All of the above
			  
function validateAnswer(qn,ans,left,top)
{
	 $("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);
  
	for(j=0;j<options2[qn].length;j++)
	{
		opt = options2[qn][j];

		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{
				document.getElementById("questDiv").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			},1500);
		});
	}
}


function magic()
{
	if(simsubscreennum==1) 
	{
		$("#1-1").fadeIn(2000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},2000);
	}
	if(simsubscreennum==2)
	{
		tn=2;
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:650px; top:300px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";
		document.getElementById(tn+"-3b").onclick=function()
		{
			myStopFunction();
			document.getElementById(tn+"-3b").onclick="";
			$("#"+tn+"-3b").animate({"position":"absolute","top":"267px"},150,
			function()
			{
				$("#"+tn+"-3b").animate({"position":"absolute","left":"670px"},150,
				function()
				{
					$("#"+tn+"-3b").animate({"position":"absolute","top":"415px"},500,
					function()
					{
						$("#"+tn+"-4").fadeIn(100);
						setTimeout(function()
						{
							myInt = setInterval(function(){ animatearrow(); }, 500);
							document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:620px; top:120px; height: 30px; z-index: 10;";
							document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
							// Code for IE9
							document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
							// Standard syntax
							document.getElementById("arrow1").style.transform = "rotate(180deg)";
							document.getElementById(tn+"-4").onclick=function()
							{
								myStopFunction();
								document.getElementById(tn+"-4").onclick="";
								$("#"+tn+"-4").animate({"position":"absolute","top":"150px"},300);
								$("#"+tn+"-5").css({"visibility":"visible"});
								$("#"+tn+"-5a").css({"visibility":"visible"});
								$("#"+tn+"-5b").css({"visibility":"visible"});
								myInt = setInterval(function(){ animatearrow(); }, 500);
								document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:310px; top:245px; height: 30px; z-index: 10;";
								document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
								// Code for IE9
								document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
								// Standard syntax
								document.getElementById("arrow1").style.transform = "rotate(180deg)";
								$("#"+tn+"-5a").click(function()
								{
									myStopFunction();
									$("#"+tn+"-5a").off("click");
									$("#"+tn+"-5").css({"visibility":"hidden"});
									$("#"+tn+"-5a").css({"visibility":"hidden"});
									$("#"+tn+"-5b").css({"visibility":"hidden"});
									$("#"+tn+"-3c").animate({"position":"absolute","top":"345px"},250);
									$("#"+tn+"-4a").animate({"position":"absolute","top":"242px"},300,
									function()
									{
										$("#"+tn+"-4a").animate({"position":"absolute","top":"151px"},200);
										$("#"+tn+"-4").animate({"position":"absolute","top":"60px"},200,
										function()
										{
											$("#"+tn+"-4a").animate({"position":"absolute","left":"100px"},900);
											$("#"+tn+"-4").animate({"position":"absolute","left":"85px"},900,
											function()
											{
												$("#"+tn+"-5").css({"visibility":"visible","position":"absolute","left":"420px"});
												$("#"+tn+"-5a").css({"visibility":"visible","position":"absolute","left":"472px"});
												$("#"+tn+"-5b").css({"visibility":"visible","position":"absolute","left":"484px"});
												// $("#p2-2").css({"visibility":"visible"});
												myInt = setInterval(function(){ animatearrow(); }, 500);
												document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:257.5px; height: 30px; z-index: 10;";
												document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
												// Code for IE9
												document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
												// Standard syntax
												document.getElementById("arrow1").style.transform = "rotate(180deg)";
												$("#"+tn+"-5b").click(function()
												{
													myStopFunction();
													$("#"+tn+"-5b").off("click");
													$("#"+tn+"-5").css({"visibility":"hidden"});
													$("#"+tn+"-5a").css({"visibility":"hidden"});
													$("#"+tn+"-5b").css({"visibility":"hidden"});
													$("#drop"+tn+"-1").css({"visibility":"visible","position":"absolute","left":"101px","top":"282px"});
													document.getElementById("drop"+tn+"-1").style.animation="drop1 1s 4";
													$("#"+tn+"-22b").animate({"position":"absolute","top":"415.5px"},4000);
													$("#"+tn+"-4a").animate({"position":"absolute","top":"156px"},4000,
													function()
													{
														document.getElementById("drop"+tn+"-1").style.visibility="hidden";
														myInt = setInterval(function(){ animatearrow(); }, 500);
														document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:90px; top:150px; height: 30px; z-index: 10;";
														document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
														// Code for IE9
														document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
														// Standard syntax
														document.getElementById("arrow1").style.transform = "rotate(180deg)";
														$("#"+tn+"-4").click(function()
														{
															myStopFunction();
															$("#"+tn+"-4").off("click");
															$("#"+tn+"-4a").animate({"position":"absolute","left":"150px"},300);
															$("#"+tn+"-4").animate({"position":"absolute","left":"135px"},300,
															function()
															{
																$("#"+tn+"-5").css({"visibility":"visible","position":"absolute","left":"420px"});
																$("#"+tn+"-5a").css({"visibility":"visible","position":"absolute","left":"472px"});
																$("#"+tn+"-5b").css({"visibility":"visible","position":"absolute","left":"484px"});
																// $("#p2-2").css({"visibility":"visible"});
																myInt = setInterval(function(){ animatearrow(); }, 500);
																document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:257.5px; height: 30px; z-index: 10;";
																document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
																// Code for IE9
																document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
																// Standard syntax
																document.getElementById("arrow1").style.transform = "rotate(180deg)";
																$("#"+tn+"-5b").click(function()
																{
																	myStopFunction();
																	$("#"+tn+"-5b").off("click");
																	$("#"+tn+"-5").css({"visibility":"hidden"});
																	$("#"+tn+"-5a").css({"visibility":"hidden"});
																	$("#"+tn+"-5b").css({"visibility":"hidden"});
																	$("#drop"+tn+"-2").css({"visibility":"visible","position":"absolute","left":"151px","top":"282px"});
																	document.getElementById("drop"+tn+"-2").style.animation="drop1 1s 4";
																	$("#"+tn+"-22c").animate({"position":"absolute","top":"415px"},4000);
																	$("#"+tn+"-4a").animate({"position":"absolute","top":"170px"},4000,
																	function()
																	{
																		document.getElementById("drop"+tn+"-2").style.visibility="hidden";
																		document.getElementById(tn+"-4").style.visibility="hidden";
																		document.getElementById(tn+"-4a").style.visibility="hidden";
																		document.getElementById(tn+"-3a").style.visibility="hidden";
																		document.getElementById(tn+"-3b").style.visibility="hidden";
																		document.getElementById(tn+"-3c").style.visibility="hidden";
																		document.getElementById(tn+"-3name").style.visibility="hidden";
																		$("#"+tn+"-6").fadeIn(250);
																		document.getElementById("b"+tn+"-6").onclick=function()
																		{
																			$("#"+tn+"-6").fadeOut(250);
																			$("#"+tn+"-22d").animate({"position":"absolute","top":"414.5px"},1000);
																			$("#"+tn+"-22e").animate({"position":"absolute","top":"414px"},1000);
																			$("#"+tn+"-22f").animate({"position":"absolute","top":"413.5px"},1000);
																			$("#b"+tn+"-6").css({"visibility":"hidden"});
																			$("#"+tn+"-7").css({"visibility":"visible"});
																			document.getElementById("nextButton").style.visibility="visible";
																		}
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
						},100);
					});
				});
			});
		}
	}
	if(simsubscreennum==3)
	{
		document.getElementById("2-7").style.visibility="hidden";
		tn=3;
		setTimeout(function()
		{
			//Open distilled water bottle
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:530px; top:315px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
			 // Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(270deg)";
			$("#"+tn+"-1").click(function()
			{
				myStopFunction();
				$("#"+tn+"-1").off("click");	
				$("#"+tn+"-1").animate({"position":"absolute","top":"285px"},250,
				function()
				{
					$("#"+tn+"-1").animate({"position":"absolute","left":"540px"},300,
					function()
					{
						$("#"+tn+"-1").animate({"position":"absolute","top":"400px"},750,
						function()
						{
							$("#"+tn+"-5").fadeIn(500,
							function()
							{
								myInt = setInterval(function(){ animatearrow(); }, 500);
								document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:490px; top:140px; height: 30px; z-index: 10;";
								document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
								// Code for IE9
								document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
								 // Standard syntax
								document.getElementById("arrow1").style.transform = "rotate(180deg)";
								$("#"+tn+"-5").click(function()
								{
									myStopFunction();
									$("#"+tn+"-5").off("click");	
									$("#"+tn+"-5").animate({"position":"absolute","top":"150px"},750,
									function()
									{
										$("#"+tn+"-61").css({"visibility":"visible"});
										$("#"+tn+"-62").css({"visibility":"visible"});
										$("#"+tn+"-63").css({"visibility":"visible"});
										$("#p"+tn+"-1").css({"visibility":"visible"});
										myInt = setInterval(function(){ animatearrow(); }, 500);
										document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:310px; top:245px; height: 30px; z-index: 10;";
										document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
										// Code for IE9
										document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
										 // Standard syntax
										document.getElementById("arrow1").style.transform = "rotate(180deg)";
										$("#"+tn+"-62").click(function()
										{
											myStopFunction();
											$("#"+tn+"-62").off("click");
											$("#"+tn+"-61").css({"visibility":"hidden"});
											$("#"+tn+"-62").css({"visibility":"hidden"});
											$("#"+tn+"-63").css({"visibility":"hidden"});
											$("#p"+tn+"-1").css({"visibility":"hidden"});	
											$("#"+tn+"-51").animate({"position":"absolute","top":"295px"},750);
											$("#"+tn+"-3").animate({"position":"absolute","top":"370px"},750,
											function()
											{
												//fill flask with 100ml of distilled water
												myInt = setInterval(function(){ animatearrow(); }, 500);
												document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:490px; top:210px; height: 30px; z-index: 10;";
												document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
												// Code for IE9
												document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
												 // Standard syntax
												document.getElementById("arrow1").style.transform = "rotate(180deg)";
												$("#"+tn+"-5").click(function()
												{
													myStopFunction();
													$("#"+tn+"-5").off("click");	
													$("#"+tn+"-5").animate({"position":"absolute","top":"50px"},750);
													$("#"+tn+"-51").animate({"position":"absolute","top":"195px"},750,//top=320px here top=260px 60 difference
													function()
													{
														$("#"+tn+"-5").animate({"position":"absolute","left":"60px"},1200);
														$("#"+tn+"-51").animate({"position":"absolute","left":"77px"},1200,
														function()
														{
															$("#"+tn+"-5").animate({"position":"absolute","top":"100px"},750);
															$("#"+tn+"-51").animate({"position":"absolute","top":"245px"},750,
															function()
															{
																$("#"+tn+"-61").css({"visibility":"visible","position":"absolute","left":"420px"});
																$("#"+tn+"-62").css({"visibility":"visible","position":"absolute","left":"472px"});
																$("#"+tn+"-63").css({"visibility":"visible","position":"absolute","left":"484px"});
																$("#p"+tn+"-2").css({"visibility":"visible"});
																myInt = setInterval(function(){ animatearrow(); }, 500);
																document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:257.5px; height: 30px; z-index: 10;";
																document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
																// Code for IE9
																document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
																 // Standard syntax
																document.getElementById("arrow1").style.transform = "rotate(180deg)";
																$("#"+tn+"-63").click(function()
																{
																	myStopFunction();
																	$("#"+tn+"-63").off("click");
																	$("#"+tn+"-61").css({"visibility":"hidden"});
																	$("#"+tn+"-62").css({"visibility":"hidden"});
																	$("#"+tn+"-63").css({"visibility":"hidden"});
																	$("#p"+tn+"-2").css({"visibility":"hidden"});	
																	document.getElementById("p"+tn+"-1").innerHTML=" ";
																	$("#"+tn+"-51").animate({"position":"absolute","top":"418px"},1250);
																	setTimeout(function()
																	{
																		$("#"+tn+"-51").css({"visibility":"hidden"});
																		$("#"+tn+"-411").animate({"position":"absolute","top":"420px"},1000,
																		function()
																		{
																			$("#"+tn+"-5").fadeOut(500,
																			function()
																			{
																				//close distilled water bottle
																				myInt = setInterval(function(){ animatearrow(); }, 500);
																				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:595px; top:405px; height: 30px; z-index: 10;";
																				document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																				// Code for IE9
																				document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
																				// Standard syntax
																				document.getElementById("arrow1").style.transform = "rotate(270deg)";
																				$("#"+tn+"-1").click(function()
																				{
																					myStopFunction();
																					$("#"+tn+"-1").off("click");
																					$("#"+tn+"-1").animate({"position":"absolute","top":"285px"},750,
																					function()
																					{
																						$("#"+tn+"-1").animate({"position":"absolute","left":"472.5px"},300,
																						function()
																						{
																							$("#"+tn+"-1").animate({"position":"absolute","top":"310px"},750,
																							function()
																							{
																								$("#"+tn+"-1").css({"visibility":"hidden"});
																								$("#"+tn+"-2").css({"visibility":"hidden"});
																								$("#"+tn+"-3").css({"visibility":"hidden"});
																								$("#"+tn+"-8").css({"visibility":"hidden"});
																								//pour 100ml of water sample to flask
																								setTimeout(function()
																								{
																									pourWaterSampletoFalsk();		
																								},700);
																							});
																						});
																					});
																				});
																			});
																		});
																	},800);
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
		},500);
	}
	
	if(simsubscreennum==4) //add dilute hydrochloric acid
	{
		document.getElementById("3-1").style.visibility="hidden";
		document.getElementById("3-2").style.visibility="hidden";
		document.getElementById("3-3").style.visibility="hidden";
		document.getElementById("3-8b").style.visibility="hidden";
		document.getElementById("p3-10").style.visibility="hidden";
		document.getElementById("3-42").style.visibility="hidden";
		document.getElementById("3-421").style.visibility="hidden";
		tn=4;
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:652.5px; top:270px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";
		document.getElementById(tn+"-3b").onclick=function()
		{
			myStopFunction();
			document.getElementById(tn+"-3b").onclick="";
			$("#"+tn+"-3b").animate({"position":"absolute","top":"230px"},200,
			function()
			{
				$("#"+tn+"-3b").animate({"position":"absolute","left":"670px"},150,
				function()
				{
					$("#"+tn+"-3b").animate({"position":"absolute","top":"396px"},500,
					function()
					{
						$("#"+tn+"-4").fadeIn(100);
						setTimeout(function()
						{
							myInt = setInterval(function(){ animatearrow(); }, 500);
							document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:620px; top:120px; height: 30px; z-index: 10;";
							document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
							// Code for IE9
							document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
							// Standard syntax
							document.getElementById("arrow1").style.transform = "rotate(180deg)";
							document.getElementById(tn+"-4").onclick=function()
							{
								myStopFunction();
								document.getElementById(tn+"-4").onclick="";
								$("#"+tn+"-4").animate({"position":"absolute","top":"150px"},300);
								$("#"+tn+"-5").css({"visibility":"visible"});
								$("#"+tn+"-5a").css({"visibility":"visible"});
								$("#"+tn+"-5b").css({"visibility":"visible"});
								myInt = setInterval(function(){ animatearrow(); }, 500);
								document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:310px; top:245px; height: 30px; z-index: 10;";
								document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
								// Code for IE9
								document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
								// Standard syntax
								document.getElementById("arrow1").style.transform = "rotate(180deg)";
								$("#"+tn+"-5a").click(function()
								{
									myStopFunction();
									$("#"+tn+"-5a").off("click");
									$("#"+tn+"-5").css({"visibility":"hidden"});
									$("#"+tn+"-5a").css({"visibility":"hidden"});
									$("#"+tn+"-5b").css({"visibility":"hidden"});
									$("#"+tn+"-3c").animate({"position":"absolute","top":"345px"},250);
									$("#"+tn+"-4a").animate({"position":"absolute","top":"242px"},300,
									function()
									{
										$("#"+tn+"-4a").animate({"position":"absolute","top":"151px"},200);
										$("#"+tn+"-4").animate({"position":"absolute","top":"60px"},200,
										function()
										{
											$("#"+tn+"-4a").animate({"position":"absolute","left":"50px"},1000);
											$("#"+tn+"-4").animate({"position":"absolute","left":"35px"},1000,
											function()
											{
												$("#"+tn+"-5").css({"visibility":"visible","position":"absolute","left":"420px"});
												$("#"+tn+"-5a").css({"visibility":"visible","position":"absolute","left":"472px"});
												$("#"+tn+"-5b").css({"visibility":"visible","position":"absolute","left":"484px"});
												// $("#p2-2").css({"visibility":"visible"});
												myInt = setInterval(function(){ animatearrow(); }, 500);
												document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:257.5px; height: 30px; z-index: 10;";
												document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
												// Code for IE9
												document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
												// Standard syntax
												document.getElementById("arrow1").style.transform = "rotate(180deg)";
												$("#"+tn+"-5b").click(function()
												{
													myStopFunction();
													$("#"+tn+"-5b").off("click");
													$("#"+tn+"-5").css({"visibility":"hidden"});
													$("#"+tn+"-5a").css({"visibility":"hidden"});
													$("#"+tn+"-5b").css({"visibility":"hidden"});
													$("#drop"+tn+"-1").css({"visibility":"visible","position":"absolute","left":"51px","top":"282px"});
													document.getElementById("drop"+tn+"-1").style.animation="drop1 1.25s 4";
													$("#"+tn+"-22a").animate({"position":"absolute","top":"416.5px"},5000);
													$("#"+tn+"-4a").animate({"position":"absolute","top":"162px"},5000,
													function()
													{
														document.getElementById("drop"+tn+"-1").style.visibility="hidden";
														myInt = setInterval(function(){ animatearrow(); }, 500);
														document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:40px; top:150px; height: 30px; z-index: 10;";
														document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
														// Code for IE9
														document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
														// Standard syntax
														document.getElementById("arrow1").style.transform = "rotate(180deg)";
														$("#"+tn+"-4").click(function()
														{
															myStopFunction();
															$("#"+tn+"-4").off("click");
															$("#"+tn+"-4a").animate({"position":"absolute","left":"100px"},300);
															$("#"+tn+"-4").animate({"position":"absolute","left":"85px"},300,
															function()
															{
																$("#"+tn+"-5").css({"visibility":"visible","position":"absolute","left":"420px"});
																$("#"+tn+"-5a").css({"visibility":"visible","position":"absolute","left":"472px"});
																$("#"+tn+"-5b").css({"visibility":"visible","position":"absolute","left":"484px"});
																// $("#p2-2").css({"visibility":"visible"});
																myInt = setInterval(function(){ animatearrow(); }, 500);
																document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:257.5px; height: 30px; z-index: 10;";
																document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
																// Code for IE9
																document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
																// Standard syntax
																document.getElementById("arrow1").style.transform = "rotate(180deg)";
																$("#"+tn+"-5b").click(function()
																{
																	myStopFunction();
																	$("#"+tn+"-5b").off("click");
																	$("#"+tn+"-5").css({"visibility":"hidden"});
																	$("#"+tn+"-5a").css({"visibility":"hidden"});
																	$("#"+tn+"-5b").css({"visibility":"hidden"});
																	$("#drop"+tn+"-2").css({"visibility":"visible","position":"absolute","left":"101px","top":"282px"});
																	document.getElementById("drop"+tn+"-2").style.animation="drop1 1.25s 4";
																	$("#"+tn+"-22b").animate({"position":"absolute","top":"415.5px"},5000);
																	$("#"+tn+"-4a").animate({"position":"absolute","top":"175px"},5000,
																	function()
																	{
																		document.getElementById("drop"+tn+"-2").style.visibility="hidden";
																		$("#"+tn+"-4").fadeOut(10);
																		$("#"+tn+"-4a").fadeOut(5);
																		document.getElementById(tn+"-3a").style.visibility="hidden";
																		document.getElementById(tn+"-3b").style.visibility="hidden";
																		document.getElementById(tn+"-3c").style.visibility="hidden";
																		document.getElementById(tn+"-3name").style.visibility="hidden";
																		$("#"+tn+"-6").fadeIn(250);
																		document.getElementById("b"+tn+"-6").onclick=function()
																		{
																			$("#"+tn+"-6").fadeOut(250);
																			$("#"+tn+"-22c").animate({"position":"absolute","top":"414.5px"},1000);
																			$("#"+tn+"-22d").animate({"position":"absolute","top":"413.5px"},1000);
																			$("#"+tn+"-22e").animate({"position":"absolute","top":"412.5px"},1000);
																			$("#"+tn+"-22f").animate({"position":"absolute","top":"411.5px"},1000);
																			$("#b"+tn+"-6").css({"visibility":"hidden"});
																			document.getElementById("nextButton").style.visibility="visible";
																		}
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
						},100);
					});
				});
			});
		}
	}
	
	if(simsubscreennum==5)
	{
		tn=5;
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:652.5px; top:270px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";
		document.getElementById(tn+"-3b").onclick=function()
		{
			myStopFunction();
			document.getElementById(tn+"-3b").onclick="";
			$("#"+tn+"-3b").animate({"position":"absolute","top":"230px"},200,
			function()
			{
				$("#"+tn+"-3b").animate({"position":"absolute","left":"670px"},150,
				function()
				{
					$("#"+tn+"-3b").animate({"position":"absolute","top":"396px"},500,
					function()
					{
						$("#"+tn+"-4").fadeIn(100);
						setTimeout(function()
						{
							myInt = setInterval(function(){ animatearrow(); }, 500);
							document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:620px; top:120px; height: 30px; z-index: 10;";
							document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
							// Code for IE9
							document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
							// Standard syntax
							document.getElementById("arrow1").style.transform = "rotate(180deg)";
							document.getElementById(tn+"-4").onclick=function()
							{
								myStopFunction();
								document.getElementById(tn+"-4").onclick="";
								$("#"+tn+"-4").animate({"position":"absolute","top":"150px"},300);
								$("#"+tn+"-5").css({"visibility":"visible"});
								$("#"+tn+"-5a").css({"visibility":"visible"});
								$("#"+tn+"-5b").css({"visibility":"visible"});
								myInt = setInterval(function(){ animatearrow(); }, 500);
								document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:310px; top:245px; height: 30px; z-index: 10;";
								document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
								// Code for IE9
								document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
								// Standard syntax
								document.getElementById("arrow1").style.transform = "rotate(180deg)";
								$("#"+tn+"-5a").click(function()
								{
									myStopFunction();
									$("#"+tn+"-5a").off("click");
									$("#"+tn+"-5").css({"visibility":"hidden"});
									$("#"+tn+"-5a").css({"visibility":"hidden"});
									$("#"+tn+"-5b").css({"visibility":"hidden"});
									$("#"+tn+"-3c").animate({"position":"absolute","top":"345px"},250);
									$("#"+tn+"-4a").animate({"position":"absolute","top":"242px"},300,
									function()
									{
										$("#"+tn+"-4a").animate({"position":"absolute","top":"151px"},200);
										$("#"+tn+"-4").animate({"position":"absolute","top":"60px"},200,
										function()
										{
											$("#"+tn+"-4a").animate({"position":"absolute","left":"50px"},1000);
											$("#"+tn+"-4").animate({"position":"absolute","left":"35px"},1000,
											function()
											{
												$("#"+tn+"-5").css({"visibility":"visible","position":"absolute","left":"420px"});
												$("#"+tn+"-5a").css({"visibility":"visible","position":"absolute","left":"472px"});
												$("#"+tn+"-5b").css({"visibility":"visible","position":"absolute","left":"484px"});
												// $("#p2-2").css({"visibility":"visible"});
												myInt = setInterval(function(){ animatearrow(); }, 500);
												document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:257.5px; height: 30px; z-index: 10;";
												document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
												// Code for IE9
												document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
												// Standard syntax
												document.getElementById("arrow1").style.transform = "rotate(180deg)";
												$("#"+tn+"-5b").click(function()
												{
													myStopFunction();
													$("#"+tn+"-5b").off("click");
													$("#"+tn+"-5").css({"visibility":"hidden"});
													$("#"+tn+"-5a").css({"visibility":"hidden"});
													$("#"+tn+"-5b").css({"visibility":"hidden"});
													$("#drop"+tn+"-1").css({"visibility":"visible","position":"absolute","left":"51px","top":"282px"});
													document.getElementById("drop"+tn+"-1").style.animation="drop1 1.25s 4";
													$("#"+tn+"-22a").animate({"position":"absolute","top":"414.5px"},5000);
													$("#"+tn+"-4a").animate({"position":"absolute","top":"162px"},5000,
													function()
													{
														document.getElementById("drop"+tn+"-1").style.visibility="hidden";
														myInt = setInterval(function(){ animatearrow(); }, 500);
														document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:40px; top:150px; height: 30px; z-index: 10;";
														document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
														// Code for IE9
														document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
														// Standard syntax
														document.getElementById("arrow1").style.transform = "rotate(180deg)";
														$("#"+tn+"-4").click(function()
														{
															myStopFunction();
															$("#"+tn+"-4").off("click");
															$("#"+tn+"-4a").animate({"position":"absolute","left":"100px"},300);
															$("#"+tn+"-4").animate({"position":"absolute","left":"85px"},300,
															function()
															{
																$("#"+tn+"-5").css({"visibility":"visible","position":"absolute","left":"420px"});
																$("#"+tn+"-5a").css({"visibility":"visible","position":"absolute","left":"472px"});
																$("#"+tn+"-5b").css({"visibility":"visible","position":"absolute","left":"484px"});
																// $("#p2-2").css({"visibility":"visible"});
																myInt = setInterval(function(){ animatearrow(); }, 500);
																document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:257.5px; height: 30px; z-index: 10;";
																document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
																// Code for IE9
																document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
																// Standard syntax
																document.getElementById("arrow1").style.transform = "rotate(180deg)";
																$("#"+tn+"-5b").click(function()
																{
																	myStopFunction();
																	$("#"+tn+"-5b").off("click");
																	$("#"+tn+"-5").css({"visibility":"hidden"});
																	$("#"+tn+"-5a").css({"visibility":"hidden"});
																	$("#"+tn+"-5b").css({"visibility":"hidden"});
																	$("#drop"+tn+"-2").css({"visibility":"visible","position":"absolute","left":"101px","top":"282px"});
																	document.getElementById("drop"+tn+"-2").style.animation="drop1 1.25s 4";
																	document.getElementById(tn+"-22b").style.animation="colourChange1 12.5 forwards";
																	$("#"+tn+"-22b").animate({"position":"absolute","top":"413.5px"},5000);
																	$("#"+tn+"-4a").animate({"position":"absolute","top":"175px"},5000,
																	function()
																	{
																		document.getElementById("drop"+tn+"-2").style.visibility="hidden";
																		$("#"+tn+"-4").fadeOut(10);
																		$("#"+tn+"-4a").fadeOut(5);
																		document.getElementById(tn+"-3a").style.visibility="hidden";
																		document.getElementById(tn+"-3b").style.visibility="hidden";
																		document.getElementById(tn+"-3c").style.visibility="hidden";
																		document.getElementById(tn+"-3name").style.visibility="hidden";
																		$("#"+tn+"-6").fadeIn(250);
																		document.getElementById("b"+tn+"-6").onclick=function()
																		{
																			$("#"+tn+"-6").fadeOut(250);
																			$("#"+tn+"-22c").animate({"position":"absolute","top":"412.5px"},1000);
																			$("#"+tn+"-22d").animate({"position":"absolute","top":"411.5px"},1000);
																			$("#"+tn+"-22e").animate({"position":"absolute","top":"410.5px"},1000);
																			$("#"+tn+"-22f").animate({"position":"absolute","top":"409.5px"},1000);
																			document.getElementById(tn+"-22c").style.backgroundImage="linear-gradient(#DCDCDC,#fa3121 2.5%)";
																			document.getElementById(tn+"-22d").style.backgroundImage="linear-gradient(#f91a08 ,#f91a08)";
																			document.getElementById(tn+"-22e").style.backgroundImage="linear-gradient(#e31505 ,#e31505)";
																			document.getElementById(tn+"-22f").style.backgroundImage="linear-gradient(#ca1305 ,#ca1305)";
																			$("#b"+tn+"-6").css({"visibility":"hidden"});
																			//document.getElementById("nextButton").style.visibility="visible";
																			// fill distilled water
																			setTimeout(function()
																			{	
																			    addDistilledWater();
																			},1000);
																		}
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
						},100);
					});
				});
			});
		}
	}
	
	if(simsubscreennum==6) 
	{
		$("#6-1").fadeIn(2000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},2000);
	}	
	if(simsubscreennum==7)
	{
		tn=7;
		fillCuvette();
	}
	if(simsubscreennum==8) 
	{
		$("#7-3").css({"visibility":"hidden"});
		$("#7-4").css({"visibility":"hidden"});
		$("#7-5a").css({"visibility":"hidden"});
		$("#7-5b").css({"visibility":"hidden"});
		$("#7-5c").css({"visibility":"hidden"});
		$("#7-5d").css({"visibility":"hidden"});
		$("#7-5e").css({"visibility":"hidden"});
		$("#7-5f").css({"visibility":"hidden"});
		$("#7-6a").css({"visibility":"hidden"});
		$("#7-6b").css({"visibility":"hidden"});
		$("#7-6off").css({"visibility":"hidden"});
		$("#7blank").css({"visibility":"hidden"});
		$("#7-7mt").css({"visibility":"hidden"});
		$("#7-7ma").css({"visibility":"hidden"});
		$("#7-7mc").css({"visibility":"hidden"});
		$("#7-7mf").css({"visibility":"hidden"});
		$("#7-7W").css({"visibility":"hidden"});
		$("#7-7D").css({"visibility":"hidden"});
		$("#7-10").css({"visibility":"hidden"});
		$("#8-1").fadeIn(2000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},2000);
	}
	if(simsubscreennum==9)
	{
		tn=9;
		fillCuvette();
	}
	if(simsubscreennum==10)
	{
		$("#9-3").css({"visibility":"hidden"});
		$("#9-4").css({"visibility":"hidden"});
		$("#9-5a").css({"visibility":"hidden"});
		$("#9-5b").css({"visibility":"hidden"});
		$("#9-5c").css({"visibility":"hidden"});
		$("#9-5d").css({"visibility":"hidden"});
		$("#9-5e").css({"visibility":"hidden"});
		$("#9-5f").css({"visibility":"hidden"});
		$("#9-6a").css({"visibility":"hidden"});
		$("#9-6b").css({"visibility":"hidden"});
		$("#9-6off").css({"visibility":"hidden"});
		$("#9-6on").css({"visibility":"hidden"});
		$("#9blank").css({"visibility":"hidden"});
		$("#9-7mt").css({"visibility":"hidden"});
		$("#9-7ma").css({"visibility":"hidden"});
		$("#9-7mc").css({"visibility":"hidden"});
		$("#9-7mf").css({"visibility":"hidden"});
		$("#9-10").css({"visibility":"hidden"});
		$("#9-7D").css({"visibility":"hidden"});
		$("#9-7W").css({"visibility":"hidden"});
		
		var tab10=document.getElementById("t10-1");
		for(i=1;i<=8;i++)
		{
			var rows=tab10.insertRow(i);
			var cell0=rows.insertCell(0);
			var cell1=rows.insertCell(1);
			var cell2=rows.insertCell(2);
			var cell3=rows.insertCell(3);
			rows.style="font-size:14px; text-align:center; border:1px solid black; padding:7px;";
			cell0.style="border:1px solid black; padding:10px;"
			cell1.style="border:1px solid black; padding:10px;"
			cell2.style="border:1px solid black; padding:10px;"
			cell3.style="border:1px solid black; padding:10px;"
			cell0.innerHTML=i;
			cell1.innerHTML=i-0.5;
			cell2.innerHTML=ab[p][i];
			cell3.innerHTML=(Math.pow(10, 2 - ab[p][i])).toFixed(2);
			if(i==7)
			{
				cell0.innerHTML="Water Sample";
				cell1.innerHTML="--";
				cell2.innerHTML=ab[p][i];
				cell3.innerHTML=(Math.pow(10, 2 - ab[p][i])).toFixed(2);
			}
			if(i==8)
			{
				cell0.innerHTML="Tap Water";
				cell1.innerHTML="--";
				cell2.innerHTML=ab[p][i];
				cell3.innerHTML=(Math.pow(10, 2 - ab[p][i])).toFixed(2);
			}		
		}
		validateAnswer(2,1,"530px","200px");
	}
	if(simsubscreennum==11)
	{

		var h1=0,h2=0,h;
		var ytitle="";
		var headtitle="";
	  if(p==0)
	  {
		s1=2.76;
		s2=0.16;
	  }
	  if(p==1)
	  {
		s1=2.53;
		s2=0.09;
	  } 
	  if(p==2)
	  {
		s1=2.512;
		s2=1.218;
	  }
	  if(p==3)
	  {
		s1=2.83;
		s2=0.58;
	  }
	  if(p==4)
	  {
		s1=2.19;
		s2=0.08;
	  }
	  if(p==5)
	  {
		s1=2.31;
		s2=0.19;
	  }
	  if(p==6)
	  {
		s1=1.87;
		s2=0.4;
	  }
	  if(p==7)
	  {
		s1=2.148;
		s2=0.268;
	  }
	  if(p==8)
	  {
		s1=2.25;
		s2=0.38;
	  }
	  function displayGraph(headtitle,h,ytitle) 
	  {
		var chart = new CanvasJS.Chart("chartContainer",
		{      
		zoomEnabled: true,
		zoomType: "xy",
		exportEnabled: true,
		  title:{
			text: headtitle,
			fontSize:18,
			fontFamily:"verdana"
		  },
		   axisX: {
			title:"Concentration of Iron (mg/l)",
			titleFontSize:16,
			interval: 0.5,
			intervalType: "Number"
		  },
		  axisY :{
			title: ytitle,
			titleFontSize:16,
			includeZero: false
		  },
		  data: [
		  {      
			type: "spline",  
			indexLabelFontColor: "orangered",      
			dataPoints: type1DataPoints(),
			cursor: "pointer"
		  },
		  {        
			type: "line",
			lineDashType: "dash",
			lineColor:"#ea3f49",
			dataPoints: [
			{ x:0, y: h[7] },
			{ x:s1, y: h[7], indexLabel:"Water Sample" },
			{ x:s1, y: 0 }
		  ]
		  },
		  {        
			type: "line",
			lineDashType: "dash",
			lineColor:"#33cb6b",
			dataPoints: [
			{ x:0, y: h[8] },
			{ x:s2, y: h[8], indexLabel:"Tap Water" },
			{ x:s2, y: 0 }
		  
			]
		  }
		  ]
		});
		chart.render();
	}
		function type1DataPoints(){
			var dataPoints = [];
			for(var w = 0; w <= 6 ; w ++){
				dataPoints.push({x: w/2 , y: h[w]});
			}
			return dataPoints
		}
	document.getElementById("g1").onclick=function()
	{
		h =  ab[p];
		displayGraph("Concentration of Iron vs Absorbance",h,"Absorbance");
		if(count==0)
		{
			document.getElementById("q11").style.visibility="visible";
		}
		count++;
	}
	document.getElementById("g2").onclick=function()
	{
		var trans=[];
		for(var i = 0; i <= 8 ; i ++){
			trans[i] = Math.pow(10, 2 - ab[p][i]);
			trans[i]=trans[i];
		}
		h=trans;
		displayGraph("Concentration of Iron vs Transmittance",h,"Transmittance");
		if(count==0)
		{
			document.getElementById("q11").style.visibility="visible";
		}
		count++;
	}
	
	document.getElementById("check1").onclick=function()
	{
		if(!document.getElementById("wa").value  || !document.getElementById("wa").value!=" " || !document.getElementById("tw").value  || !document.getElementById("tw").value!=" ")
		{
			alert("Enter the value to proceed ");
		}
		else
		{
				n1 = document.getElementById("wa").value;
				n2 = document.getElementById("tw").value;
				
				if(Math.round(n1) == Math.round(s1))
				{
					document.getElementById("r1").style.visibility="visible";
					document.getElementById("w1").style.visibility="hidden";
					document.getElementById("wa").style="border:none; background-color:white; color:black;"
					document.getElementById("wa").disabled="true";
				}
				if(Math.round(n2) == Math.round(s2))
				{
					document.getElementById("r2").style.visibility="visible";
					document.getElementById("w2").style.visibility="hidden";
					document.getElementById("tw").style="border:none; background-color:white; color:black;"
					document.getElementById("tw").disabled="true";
				}
				else if(Math.round(n1) != Math.round(s1))
				{
					document.getElementById("check1").style.visibility="visible";
					document.getElementById("w1").style.visibility="visible";
				}
				else if(Math.round(n2) != Math.round(s2))
				{
					document.getElementById("check1").style.visibility="visible";
					document.getElementById("w2").style.visibility="visible";
				}
				if(Math.round(n1) == Math.round(s1) && Math.round(n2) == Math.round(s2))
				{
					document.getElementById("check1").style.visibility="hidden";
					document.getElementById("nextButton").style.visibility="visible";
				}
			}	
		}
	}
	if(simsubscreennum==12)
	{
		document.getElementById("chartContainer").style.visibility="hidden";
		document.getElementById("check1").style.visibility="hidden";
		document.getElementById("p11-1").style.visibility="hidden";
		document.getElementById("p11-2").style.visibility="hidden";
		document.getElementById("r1").style.visibility="hidden";
		document.getElementById("w1").style.visibility="hidden";
		document.getElementById("r2").style.visibility="hidden";
		document.getElementById("w2").style.visibility="hidden";
		document.getElementById("wa").style.visibility="hidden";
		document.getElementById("tw").style.visibility="hidden";
	}
}

function checkInference()
{
	var str;
	document.getElementById("ans").style.visibility="visible";
	console.log($("input[name='inf']:checked").val());
	if($("input[name='inf']:checked").val()==2)
	{
		document.getElementById("ans").innerHTML="Correct answer!";
	}
	else
	{
		document.getElementById("ans").innerHTML="Wrong! Answer is &lt;0.3mg/l";
	}

	setTimeout(function()
	{
		document.getElementById("inference").style.visibility="hidden";
		str1="can be used";
		str1=str1.fontcolor("green");
		str2="not";
		str2=str2.fontcolor("red");
		if(s1<=0.3)
		{
			if(s2<=0.3)
			{

				document.getElementById("infAns").innerHTML="Acceptable range of Iron in drinking water is &lt;0.3mg/l. Iron concentration of given water sample is "+s1+"mg/l, since it is in the acceptable range it "+str1+" for drinking. Iron concentration of tap water obtained is "+s2+"mg/l, as it is in the acceptable range it "+str1+" for drinking.";
			}
			else
			{
				document.getElementById("infAns").innerHTML="Acceptable range of Iron in drinking water is &lt;0.3mg/l. Iron concentration of given water sample is "+s1+"mg/l, since it is in the acceptable range it "+str1+" for drinking. Iron concentration of tap water obtained is "+s2+"mg/l, so it is "+str2+" in the acceptable range.";
			}
		}
		else if(s1>0.3)
		{
			if(s2<=0.3)
			{
				document.getElementById("infAns").innerHTML="Acceptable range of Iron in drinking water is &lt;0.3mg/l. Iron concentration of given water sample is "+s1+"mg/l, so it is "+str2+" in the acceptable range. Iron concentration of tap water obtained is "+s2+"mg/l, as it is in the acceptable range it "+str1+" for drinking.";
			}
			else
			{
				document.getElementById("infAns").innerHTML="Acceptable range of Iron in drinking water is &lt;0.3mg/l. Iron concentration of given water sample is "+s1+"mg/l, since it is "+str2+" in the acceptable range. Iron concentration of tap water obtained is "+s2+"mg/l, so it is "+str2+" in the acceptable range.";
			}
		}
		$("#infAns").fadeIn(750);
	},1000);
}


function fillCuvette()
{
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:400px; top:390px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById(tn+"-1").onclick=function()
		{
			myStopFunction();
			document.getElementById(tn+"-1").onclick="";
			$("#"+tn+"-1").animate({"position":"absolute","left":"228px","top":"260px"},1505);
			$("#"+tn+"-2a").animate({"position":"absolute","left":"245.5px","top":"275px"},1500,
			function()
			{
				$("#"+tn+"-1").css({"transform":"rotate(-90deg)"});
				$("#"+tn+"-2a").css({"visibility":"hidden"});
				$("#"+tn+"-2b").css({"visibility":"visible"});
				$("#"+tn+"-2c").css({"visibility":"visible"});
				setTimeout(function()
				{
					$("#"+tn+"-2b").animate({"position":"absolute","top":"342px"},1500);
					$("#"+tn+"-4").animate({"position":"absolute","top":"355px"},1500,
					function()
					{
						$("#"+tn+"-1").css({"transform":"rotate(0deg)"});
						$("#"+tn+"-2a").css({"visibility":"visible","position":"absolute","top":"327.5px"});
						$("#"+tn+"-2b").css({"visibility":"hidden"});
						$("#"+tn+"-2c").css({"visibility":"hidden"});
						setTimeout(function()
						{
							$("#"+tn+"-1").animate({"position":"absolute","left":"440px","top":"330px"},1500);
							$("#"+tn+"-2a").animate({"position":"absolute","left":"452.5px","top":"400.5px"},1500,
							function()
							{
								setTimeout(function()
								{
									if(tn==7)
									{
										calibrate();
									}
									if(tn==9)
									{
										placeCuvette();
									}
								},300);
							});
						},250);
					});
				},500);
			});
		}			
	},500);
}

var next=0;
function calibrate()
{
	next=1;
	$("#"+tn+"-1").css({"visibility":"hidden"});
	$("#"+tn+"-2a").css({"visibility":"hidden"});
	$("#"+tn+"-5a").css({"visibility":"visible"});
	$("#"+tn+"-5b").css({"visibility":"visible"});
	$("#"+tn+"-5c").css({"visibility":"visible"});
	$("#"+tn+"-5d").css({"visibility":"visible"});
	$("#"+tn+"-5e").css({"visibility":"visible"});
	$("#"+tn+"-5f").css({"visibility":"visible"});
	$("#"+tn+"-6a").css({"visibility":"visible"});
	$("#"+tn+"-6b").css({"visibility":"visible"});
	$("#"+tn+"-6off").css({"visibility":"visible"});
	$("#"+tn+"blank").css({"visibility":"visible"});
	$("#"+tn+"-7mt").css({"visibility":"visible"});
	$("#"+tn+"-7ma").css({"visibility":"visible"});
	$("#"+tn+"-7mc").css({"visibility":"visible"});
	$("#"+tn+"-7mf").css({"visibility":"visible"});

	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:560px; top:170px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(0deg)";
		document.getElementById(tn+"-6off").onclick=function()
		{
			myStopFunction();
			document.getElementById(tn+"-6off").onclick="";
			$("#"+tn+"-6off").css({"transform":"rotate(180deg)"});
			$("#"+tn+"-7mt").css({"background-color":"#ff0000","border":"solid 1px #ff0000"});
			$("#"+tn+"-7W").css({"visibility":"visible"});
			$("#"+tn+"-7D").css({"visibility":"visible"});
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:590px; top:362.5px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(180deg)";
			document.getElementById(tn+"-5e").onclick=function()
			{
				myStopFunction();
				document.getElementById(tn+"-5e").onclick="";
				counter("#"+tn+"-7W",510,4000);
			}
		}
	},500);
}

function counter(id,dataCount,time)
{
	var $this = $(id),
    countTo = dataCount;
	$({ countNum: $this.text()}).animate({
		countNum: countTo
		},
		{
			duration: time,
			easing:'linear',
			step: function() {
			  $this.text(Math.floor(this.countNum));
		},
		complete: function() {
		  $this.text(this.countNum);
		  //alert('finished');
		  setTimeout(function()
		  {
			  if(next==1)
				setZero();
			  if(next==3)
			  {
				  $("#"+tn+"-8").css({"visibility":"hidden"});
				  removeCuvette();
			  }
		  },250);
		}

	}); 
}

function setZero()
{
	next=2;
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:400px; top:420px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById(tn+"-5c").onclick=function()
	{
		myStopFunction();
		document.getElementById(tn+"-5c").onclick="";
		$("#"+tn+"-8").css({"visibility":"visible"});
		setTimeout(function()
		{
			$("#"+tn+"-8").css({"transform":"rotate(-4deg)"});
			var z=0;
			$("#"+tn+"-7D").text(z.toFixed(2));
			setTimeout(function()
			{
				$("#"+tn+"-8").css({"visibility":"hidden"});
				placeCuvette();
			},300);
		},350);
	}
}

function placeCuvette()
{
	if(tn==9)
	{
		$("#"+tn+"-1").css({"visibility":"hidden"});
		$("#"+tn+"-2a").css({"visibility":"hidden"});
		$("#"+tn+"-5a").css({"visibility":"visible"});
		$("#"+tn+"-5b").css({"visibility":"visible"});
		$("#"+tn+"-5c").css({"visibility":"visible"});
		$("#"+tn+"-5d").css({"visibility":"visible"});
		$("#"+tn+"-5e").css({"visibility":"visible"});
		$("#"+tn+"-5f").css({"visibility":"visible"});
		$("#"+tn+"-6a").css({"visibility":"visible"});
		$("#"+tn+"-6b").css({"visibility":"visible"});
		$("#"+tn+"-6on").css({"visibility":"visible"});
		$("#"+tn+"blank").css({"visibility":"visible"});
		$("#"+tn+"-7mt").css({"visibility":"visible"});
		$("#"+tn+"-7ma").css({"visibility":"visible"});
		$("#"+tn+"-7mc").css({"visibility":"visible"});
		$("#"+tn+"-7mf").css({"visibility":"visible"});
		$("#"+tn+"-7W").css({"visibility":"visible"});
		$("#"+tn+"-7W").text("510");
		$("#"+tn+"-7D").css({"visibility":"visible"});
		var a=0;
		$("#"+tn+"-7D").text(a.toFixed(2));
		$("#"+tn+"-7mt").css({"background-color":"#ff0000","border":"solid 1px #ff0000"});
	}
	//Open the spectrophotometer cap
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:430px; top:330px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(270deg)";
	document.getElementById(tn+"-5f").onclick=function()
	{
		myStopFunction();
		document.getElementById(tn+"-5f").onclick="";
		$("#"+tn+"-5f").css({"visibility":"hidden"});
		$("#"+tn+"-8ca").css({"visibility":"visible"});
		$("#"+tn+"-8ca").animate({"position":"absolute","top":"220px"},200,
		function()
		{
			$("#"+tn+"-8ca").animate({"position":"absolute","left":"220px","top":"315px"},1000,
			function()
			{
				$("#"+tn+"-5f").css({"visibility":"visible","position":"absolute","left":"220.5px","top":"400px"});
				$("#"+tn+"-8ca").css({"visibility":"hidden"});
			
				setTimeout(function()
				{
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:150px; top:410px; height: 30px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(180deg)";
					document.getElementById(tn+"-3").onclick=function()
					{
						myStopFunction();
						document.getElementById(tn+"-3").onclick="";
						$("#"+tn+"-3").css({"visibility":"hidden"});
						$("#"+tn+"-4").css({"visibility":"hidden"});
						$("#"+tn+"-9a").css({"visibility":"visible"});
						$("#"+tn+"-9a").animate({"position":"absolute","left":"280px","top":"200px"},900,
						function()
						{
							$("#"+tn+"-9a").animate({"position":"absolute","left":"367px","top":"200px"},900,
							function()
							{
								$("#"+tn+"-9a").animate({"position":"absolute","top":"280px"},500,
									function()
									{
										$("#"+tn+"-9a").css({"visibility":"hidden"});
										$("#"+tn+"-9b").css({"visibility":"visible"});
										end=false;
										placeCuvetteCap();
									}
								);
							});
						});
					}
				},1600);
			});
		});
	}
}

function placeCuvetteCap()
{
	//close the spectrophotometer cap
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:280px; top:410px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(270deg)";
	document.getElementById(tn+"-5f").onclick=function()
	{
		myStopFunction();
		document.getElementById(tn+"-5f").onclick="";
		$("#"+tn+"-5f").css({"visibility":"hidden"});
		$("#"+tn+"-8ca").css({"visibility":"visible"});
		$("#"+tn+"-8ca").animate({"position":"absolute","left":"370.5px","top":"208px"},1200,
		function()
		{
		// $("#"+tn+"-8ca").animate({"position":"absolute","left":"370.5px","top":"208px"},1000,
		$("#"+tn+"-8ca").animate({"position":"absolute","top":"228px"},200,
			function()
			{
				$("#"+tn+"-5f").css({"visibility":"visible","position":"absolute","left":"371px","top":"314px"});
				$("#"+tn+"-8ca").css({"visibility":"hidden"});
				if(tn==7)
				{
					if(stop)
					{
						setHundred();
					}
					else
					{
						//document.getElementById("nextButton").style.visibility="visible";
						validateAnswer(4,3,"50px","150px");
					}
				}
				if(tn==9)
				{
					if(!end)
					{
						displayTransmittance();
					}
					else if(end)
					{
						displayTransmittanceAll();
					}
				}
			});
		});	
	}	
}

function setHundred()
{
	next=3;
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:567.5px; top:420px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById(tn+"-5d").onclick=function()
	{
		myStopFunction();
		document.getElementById(tn+"-5d").onclick="";
		$("#"+tn+"-8").css({"visibility":"visible","position":"absolute","left":"560px"});
		setTimeout(function()
		{
			document.getElementById(tn+"-8").style.animation="set100 2s forwards";
			counter("#"+tn+"-7D",100,2000);
			
		},350);
	}
}

function removeCuvette()
{
	//Open the spectrophotometer cap
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:430px; top:330px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(270deg)";
	document.getElementById(tn+"-5f").onclick=function()
	{
		myStopFunction();
		document.getElementById(tn+"-5f").onclick="";
		$("#"+tn+"-5f").css({"visibility":"hidden"});
		$("#"+tn+"-8ca").css({"visibility":"visible"});
		$("#"+tn+"-8ca").animate({"position":"absolute","top":"220px"},200,
		function()
		{
			$("#"+tn+"-8ca").animate({"position":"absolute","left":"220px","top":"315px"},1000,
			function()
			{
				$("#"+tn+"-5f").css({"visibility":"visible","position":"absolute","left":"220.5px","top":"400px"});
				$("#"+tn+"-8ca").css({"visibility":"hidden"});
				$("#"+tn+"-10").css({"visibility":"visible"});
				//Taking cuvette out
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:430px; top:335px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
				// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
				// Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(270deg)";
				document.getElementById(tn+"-10").onclick=function()
				{
					myStopFunction();
					document.getElementById(tn+"-10").onclick="";
					$("#"+tn+"-10").css({"visibility":"hidden"});
					$("#"+tn+"-9a").css({"visibility":"visible"});
					$("#"+tn+"-9b").css({"visibility":"hidden"});
					$("#"+tn+"-9a").animate({"position":"absolute","top":"220px"},600,
					function()
					{
						$("#"+tn+"-9a").animate({"position":"absolute","left":"250px"},900,
						function()
						{
							$("#"+tn+"-9a").animate({"position":"absolute","left":"135px","top":"319px"},1100,
							function()
							{
								$("#"+tn+"-9a").css({"visibility":"hidden"});
								$("#"+tn+"-3").css({"visibility":"visible"});
								$("#"+tn+"-4").css({"visibility":"visible"});
								stop=false;
								placeCuvetteCap();
							});
						});
					});
				}
			});
		});
	}
}

function displayTransmittance()
{
	$("#"+tn+"-7D").text(Math.pow(10,2-ab[p][1]));
	$("#"+tn+"-11").css({"visibility":"visible"});
	myInt = setInterval(function(){ animatearrow(); }, 500);
	setTimeout(function()
	{
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:577.55px; top:316px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(90deg)";
		document.getElementById(tn+"-11").onclick=function()
		{
			myStopFunction();
			document.getElementById(tn+"-11").style.visibility="hidden";
			$("#"+tn+"-7ma").css({"background-color":"#ff0000","border":"solid 1px #ff0000"});
			$("#"+tn+"-7mt").css({"background-color":"#800000","border":"solid 1px #000000"});
			$("#"+tn+"-7D").text(ab[p][1]);
			setTimeout(function()
			{
				end=true;
				removeCuvette();
			},300);
		}
	},300);
}

function displayTransmittanceAll()
{
	$("#"+tn+"-3").css({"visibility":"hidden"});
	$("#"+tn+"-4").css({"visibility":"hidden"});
	$("#"+tn+"-12").fadeIn(500);
	$("#b"+tn+"-1").click(function()
	{
		$("#"+tn+"-12").css({"visibility":"hidden"});
		validateAnswer(1,2,"50px","150px");
		// $("#nextButton").css({"visibility":"visible"});
	});
}


//canvas 3
function pourWaterSampletoFalsk()
{
	$("#"+tn+"-42").css({"visibility":"visible"});
	$("#"+tn+"-421").css({"visibility":"visible"});
	$("#p"+tn+"-10").css({"visibility":"visible"});
	setTimeout(function()
	{
		$("#"+tn+"-1").css({"visibility":"visible"});
		$("#"+tn+"-2").css({"visibility":"visible"});
		$("#"+tn+"-3").css({"visibility":"visible","position":"absolute","top":"360px"});
		$("#"+tn+"-8b").css({"visibility":"visible"});
		$("#"+tn+"-5").css({"position":"absolute","left":"477px","top":"80px"});
		//Open distilled water bottle
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:530px; top:315px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		 // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";
		$("#"+tn+"-1").click(function()
		{
			myStopFunction();
			$("#"+tn+"-1").off("click");	
			$("#"+tn+"-1").animate({"position":"absolute","top":"285px"},250,
			function()
			{
				$("#"+tn+"-1").animate({"position":"absolute","left":"540px"},300,
				function()
				{
					$("#"+tn+"-1").animate({"position":"absolute","top":"400px"},750,
					function()
					{
						$("#"+tn+"-5").fadeIn(500,
						function()
						{
							myInt = setInterval(function(){ animatearrow(); }, 500);
							document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:490px; top:140px; height: 30px; z-index: 10;";
							document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
							// Code for IE9
							document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
							// Standard syntax
							document.getElementById("arrow1").style.transform = "rotate(180deg)";
							$("#"+tn+"-5").click(function()
							{
								myStopFunction();
								$("#"+tn+"-5").off("click");	
								$("#"+tn+"-5").animate({"position":"absolute","top":"150px"},750,
								function()
								{
									$("#"+tn+"-61").css({"visibility":"visible","position":"absolute","left":"250px","top":"100px"});
									$("#"+tn+"-62").css({"visibility":"visible","position":"absolute","left":"302px","top":"208px"});
									$("#"+tn+"-63").css({"visibility":"visible","position":"absolute","left":"314px","top":"220px"});
									$("#p"+tn+"-1").css({"visibility":"visible"});
									myInt = setInterval(function(){ animatearrow(); }, 500);
									document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:310px; top:245px; height: 30px; z-index: 10;";
									document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
									// Code for IE9
									document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
									// Standard syntax
									document.getElementById("arrow1").style.transform = "rotate(180deg)";
									$("#"+tn+"-62").click(function()
									{
										myStopFunction();
										$("#"+tn+"-62").off("click");
										$("#"+tn+"-52").css({"visibility":"visible"});
										$("#"+tn+"-61").css({"visibility":"hidden"});
										$("#"+tn+"-62").css({"visibility":"hidden"});
										$("#"+tn+"-63").css({"visibility":"hidden"});
										$("#p"+tn+"-1").css({"visibility":"hidden"});	
										$("#"+tn+"-52").animate({"position":"absolute","top":"295px"},750);
										$("#"+tn+"-3").animate({"position":"absolute","top":"370px"},750,
										function()
										{
											myInt = setInterval(function(){ animatearrow(); }, 500);
											document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:490px; top:240px; height: 30px; z-index: 10;";
											document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
											// Code for IE9
											document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
											// Standard syntax
											document.getElementById("arrow1").style.transform = "rotate(180deg)";
											$("#"+tn+"-5").click(function()
											{
												myStopFunction();
												$("#"+tn+"-5").off("click");	
												$("#"+tn+"-5").animate({"position":"absolute","top":"80px"},750);
												$("#"+tn+"-52").animate({"position":"absolute","top":"225px"},750,
												function()
												{
													$("#"+tn+"-5").animate({"position":"absolute","left":"190px"},1200);
													$("#"+tn+"-52").animate({"position":"absolute","left":"208px"},1200,
													function()
													{
														$("#"+tn+"-5").animate({"position":"absolute","top":"120px"},750);
														$("#"+tn+"-52").animate({"position":"absolute","top":"265px"},750,
														function()
														{
															$("#"+tn+"-61").css({"visibility":"visible","position":"absolute","left":"420px"});
															$("#"+tn+"-62").css({"visibility":"visible","position":"absolute","left":"472px"});
															$("#"+tn+"-63").css({"visibility":"visible","position":"absolute","left":"484px"});
															myInt = setInterval(function(){ animatearrow(); }, 500);
															document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:257.5px; height: 30px; z-index: 10;";
															document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
															// Code for IE9
															document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
															// Standard syntax
															document.getElementById("arrow1").style.transform = "rotate(180deg)";
															$("#"+tn+"-63").click(function()
															{
																myStopFunction();
																$("#"+tn+"-63").off("click");
																$("#"+tn+"-61").css({"visibility":"hidden"});
																$("#"+tn+"-62").css({"visibility":"hidden"});
																$("#"+tn+"-63").css({"visibility":"hidden"});
																document.getElementById("p"+tn+"-1").innerHTML=" ";
																$("#"+tn+"-52").animate({"position":"absolute","top":"415px"},1250);
																setTimeout(function()
																{
																	$("#"+tn+"-421").animate({"position":"absolute","top":"420px"},750,
																	function()
																	{
																		$("#"+tn+"-5").fadeOut(500);
																		$("#"+tn+"-52").css({"visibility":"hidden"});
																		//close distilled water bottle
																		myInt = setInterval(function(){ animatearrow(); }, 500);
																		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:595px; top:405px; height: 30px; z-index: 10;";
																		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																		// Code for IE9
																		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
																		// Standard syntax
																		document.getElementById("arrow1").style.transform = "rotate(270deg)";
																		$("#"+tn+"-1").click(function()
																		{
																			myStopFunction();
																			$("#"+tn+"-1").off("click");
																			$("#"+tn+"-1").animate({"position":"absolute","top":"285px"},750,
																			function()
																			{
																				$("#"+tn+"-1").animate({"position":"absolute","left":"472.5px"},300,
																				function()
																				{
																					$("#"+tn+"-1").animate({"position":"absolute","top":"310px"},750,
																					function()
																					{
																						$("#nextButton").css({"visibility":"visible"});
																					});
																				});
																			});
																		});
																	});
																},700);
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
	},500);
}

function addPotassiumThiocyanate()
{
	document.getElementById(tn+"-3a").style.visibility="visible";
	document.getElementById(tn+"-4a").style="position:absolute; left:615px; top:335px; ";
	document.getElementById(tn+"-4").style="position:absolute; left:600px; top:50px; ";
	document.getElementById(tn+"-3b").style="visibility:visible; position:absolute; left:602px; top:257px; ";
	document.getElementById(tn+"-3c").style="visibility:visible; position:absolute; left:580px; top:335px;";
	document.getElementById(tn+"-3name").style.visibility="visible";
	document.getElementById(tn+"-3name").innerHTML="Potassium Thiocyanate solution ";
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:652.5px; top:270px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(270deg)";
	document.getElementById(tn+"-3b").onclick=function()
	{
		myStopFunction();
		document.getElementById(tn+"-3b").onclick="";
		$("#"+tn+"-3b").animate({"position":"absolute","top":"230px"},200,
		function()
		{
			$("#"+tn+"-3b").animate({"position":"absolute","left":"670px"},150,
			function()
			{
				$("#"+tn+"-3b").animate({"position":"absolute","top":"396px"},500,
				function()
				{
					$("#"+tn+"-4").fadeIn(100);
					setTimeout(function()
					{
						myInt = setInterval(function(){ animatearrow(); }, 500);
						document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:620px; top:120px; height: 30px; z-index: 10;";
						document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
						// Code for IE9
						document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
						// Standard syntax
						document.getElementById("arrow1").style.transform = "rotate(180deg)";
						document.getElementById(tn+"-4").onclick=function()
						{
							myStopFunction();
							document.getElementById(tn+"-4").onclick="";
							$("#"+tn+"-4").animate({"position":"absolute","top":"150px"},300);
							$("#"+tn+"-5").css({"visibility":"visible"});
							$("#"+tn+"-5a").css({"visibility":"visible"});
							$("#"+tn+"-5b").css({"visibility":"visible"});
							myInt = setInterval(function(){ animatearrow(); }, 500);
							document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:310px; top:245px; height: 30px; z-index: 10;";
							document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
							// Code for IE9
							document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
							// Standard syntax
							document.getElementById("arrow1").style.transform = "rotate(180deg)";
							$("#"+tn+"-5a").click(function()
							{
								myStopFunction();
								$("#"+tn+"-5a").off("click");
								$("#"+tn+"-5").css({"visibility":"hidden"});
								$("#"+tn+"-5a").css({"visibility":"hidden"});
								$("#"+tn+"-5b").css({"visibility":"hidden"});
								$("#"+tn+"-3c").animate({"position":"absolute","top":"345px"},250);
								$("#"+tn+"-4a").animate({"position":"absolute","top":"242px"},300,
								function()
								{
									$("#"+tn+"-4a").animate({"position":"absolute","top":"151px"},200);
									$("#"+tn+"-4").animate({"position":"absolute","top":"60px"},200,
									function()
									{
										$("#"+tn+"-4a").animate({"position":"absolute","left":"50px"},1000);
										$("#"+tn+"-4").animate({"position":"absolute","left":"35px"},1000,
										function()
										{
											$("#"+tn+"-5").css({"visibility":"visible","position":"absolute","left":"420px"});
											$("#"+tn+"-5a").css({"visibility":"visible","position":"absolute","left":"472px"});
											$("#"+tn+"-5b").css({"visibility":"visible","position":"absolute","left":"484px"});
											// $("#p2-2").css({"visibility":"visible"});
											myInt = setInterval(function(){ animatearrow(); }, 500);
											document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:257.5px; height: 30px; z-index: 10;";
											document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
											// Code for IE9
											document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
											// Standard syntax
											document.getElementById("arrow1").style.transform = "rotate(180deg)";
											$("#"+tn+"-5b").click(function()
											{
												myStopFunction();
												$("#"+tn+"-5b").off("click");
												$("#"+tn+"-5").css({"visibility":"hidden"});
												$("#"+tn+"-5a").css({"visibility":"hidden"});
												$("#"+tn+"-5b").css({"visibility":"hidden"});
												$("#drop"+tn+"-1").css({"visibility":"visible","position":"absolute","left":"51px","top":"282px"});
												document.getElementById("drop"+tn+"-1").style.animation="drop1 1.25s 4";
												$("#"+tn+"-22a").animate({"position":"absolute","top":"416.5px"},5000);
												$("#"+tn+"-4a").animate({"position":"absolute","top":"162px"},5000,
												function()
												{
													document.getElementById("drop"+tn+"-1").style.visibility="hidden";
													myInt = setInterval(function(){ animatearrow(); }, 500);
													document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:40px; top:150px; height: 30px; z-index: 10;";
													document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
													// Code for IE9
													document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
													// Standard syntax
													document.getElementById("arrow1").style.transform = "rotate(180deg)";
													$("#"+tn+"-4").click(function()
													{
														myStopFunction();
														$("#"+tn+"-4").off("click");
														$("#"+tn+"-4a").animate({"position":"absolute","left":"100px"},300);
														$("#"+tn+"-4").animate({"position":"absolute","left":"85px"},300,
														function()
														{
															$("#"+tn+"-5").css({"visibility":"visible","position":"absolute","left":"420px"});
															$("#"+tn+"-5a").css({"visibility":"visible","position":"absolute","left":"472px"});
															$("#"+tn+"-5b").css({"visibility":"visible","position":"absolute","left":"484px"});
															// $("#p2-2").css({"visibility":"visible"});
															myInt = setInterval(function(){ animatearrow(); }, 500);
															document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:257.5px; height: 30px; z-index: 10;";
															document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
															// Code for IE9
															document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
															// Standard syntax
															document.getElementById("arrow1").style.transform = "rotate(180deg)";
															$("#"+tn+"-5b").click(function()
															{
																myStopFunction();
																$("#"+tn+"-5b").off("click");
																$("#"+tn+"-5").css({"visibility":"hidden"});
																$("#"+tn+"-5a").css({"visibility":"hidden"});
																$("#"+tn+"-5b").css({"visibility":"hidden"});
																$("#drop"+tn+"-2").css({"visibility":"visible","position":"absolute","left":"101px","top":"282px"});
																document.getElementById("drop"+tn+"-2").style.animation="drop1 1.25s 4";
																$("#"+tn+"-22b").animate({"position":"absolute","top":"415.5px"},5000);
																$("#"+tn+"-4a").animate({"position":"absolute","top":"175px"},5000,
																function()
																{
																	document.getElementById("drop"+tn+"-2").style.visibility="hidden";
																	document.getElementById(tn+"-4").style.visibility="hidden";
																	document.getElementById(tn+"-4a").style.visibility="hidden";
																	document.getElementById(tn+"-3a").style.visibility="hidden";
																	document.getElementById(tn+"-3b").style.visibility="hidden";
																	document.getElementById(tn+"-3c").style.visibility="hidden";
																	document.getElementById(tn+"-3name").style.visibility="hidden";
																	$("#"+tn+"-6").fadeIn(250);
																	document.getElementById("b"+tn+"-6").onclick=function()
																	{
																		$("#"+tn+"-6").fadeOut(250);
																		$("#"+tn+"-22c").animate({"position":"absolute","top":"414.5px"},1000);
																		$("#"+tn+"-22d").animate({"position":"absolute","top":"413.5px"},1000);
																		$("#"+tn+"-22e").animate({"position":"absolute","top":"412.5px"},1000);
																		$("#"+tn+"-22f").animate({"position":"absolute","top":"411.5px"},1000);
																		$("#b"+tn+"-6").css({"visibility":"hidden"});
																	}
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
					},100);
				});
			});
		});
	}
}

function addDistilledWater()
{
	document.getElementById(tn+"-7a").style.visibility="visible";
	document.getElementById(tn+"-7b").style.visibility="visible";
	document.getElementById(tn+"-7c").style.visibility="visible";
	//First Nessler tube
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:570px; top:390px; height: 35px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById(tn+"-7a").onclick=function()
	{
		myStopFunction();
		document.getElementById(tn+"-7a").onclick="";
		$("#"+tn+"-7a").animate({"position":"absolute","left":"65px"},1000);
		$("#"+tn+"-7c").animate({"position":"absolute","left":"65px"},1000);
		$("#"+tn+"-7b").animate({"position":"absolute","left":"132px"},1000,
		function()
		{
			$("#"+tn+"-7d").fadeIn(100);	
			setTimeout(function()
			{
				$("#"+tn+"-7b").animate({"position":"absolute","top":"360px"},600);
				$("#"+tn+"-22a").animate({"position":"absolute","top":"319px"},900,
				function()
				{
					$("#"+tn+"-7d").fadeOut(10);
					//2nd Nessler tube
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:190px; top:500px; height: 35px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(90deg)";
					document.getElementById(tn+"-7a").onclick=function()
					{
						myStopFunction();
						document.getElementById(tn+"-7a").onclick="";
						$("#"+tn+"-7a").animate({"position":"absolute","left":"107.5px"},200);
						$("#"+tn+"-7c").animate({"position":"absolute","left":"107.5px"},200);
						$("#"+tn+"-7b").animate({"position":"absolute","left":"175px"},200,
						function()
						{
							$("#"+tn+"-7d").css({"position":"absolute", "left":"97.5px"});
							$("#"+tn+"-7d").fadeIn(100);
							setTimeout(function()
							{
								$("#"+tn+"-7b").animate({"position":"absolute","top":"382.5px"},1200);
								document.getElementById(tn+"-22b").style.animation="colourChange2 1.5s forwards";
								$("#"+tn+"-22b").animate({"position":"absolute","top":"319px"},1500,
								function()
								{
									$("#"+tn+"-7d").fadeOut(10);
									document.getElementById(tn+"-7a").style.visibility="hidden";
									document.getElementById(tn+"-7b").style.visibility="hidden";
									document.getElementById(tn+"-7c").style.visibility="hidden";
									
									$("#p"+tn+"-6").text("Add distilled water to remaining Nessler tubes upto 100ml mark");
									$("#"+tn+"-6").fadeIn(250);
									$("#b"+tn+"-6").css({"visibility":"visible"});
									document.getElementById("b"+tn+"-6").onclick=function()
									{
										$("#"+tn+"-6").fadeOut(250);
										$("#"+tn+"-22c").animate({"position":"absolute","top":"319px"},1000);
										$("#"+tn+"-22d").animate({"position":"absolute","top":"319px"},1000);
										$("#"+tn+"-22e").animate({"position":"absolute","top":"319px"},1000);
										$("#"+tn+"-22f").animate({"position":"absolute","top":"319px"},1000,
										function()
										{
											//document.getElementById("nextButton").style.visibility="visible";
											validateAnswer(0,0,"200px","150px");
										});
										document.getElementById(tn+"-22c").style.backgroundImage="linear-gradient(#ffffcc,#ffffcc)";
										document.getElementById(tn+"-22d").style.backgroundImage="linear-gradient(#ffffb2,#ffffb2)";
										document.getElementById(tn+"-22e").style.backgroundImage="linear-gradient(#ffff99,#ffff99)";
										document.getElementById(tn+"-22f").style.backgroundImage="linear-gradient(#ffff7f,#ffff7f)";
										$("#b"+tn+"-6").css({"visibility":"hidden"});
										
									}
								});
							},400);
						});
					}
				});
			},400);
		});
	}
}