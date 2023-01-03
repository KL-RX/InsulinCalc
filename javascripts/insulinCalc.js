	
function radioCheck(btnradio) {
	//hide glucose fields
	  if (btnradio == 1) {
	  document.getElementById('prevGlu').hidden = true;
	  document.getElementById('prevISC').hidden = true;
	  document.getElementById('gluHold').hidden = true;
	  }
	  
	  if (btnradio == 2) {
	  document.getElementById('prevGlu').hidden = false;
	  document.getElementById('prevISC').hidden = false;
	  }
	  
	  if (btnradio == 3) {
	  document.getElementById('prevGlu').hidden = false;
	  document.getElementById('prevISC').hidden = false;
	  }
	  
	  document.getElementById('displayError').hidden = true;
	  document.getElementById('displayData').hidden = true;
	  document.getElementById('displayISCWarn').hidden = true;
	}

function oneCheck(checkbox) {
	//uncheck values
	
	  if (checkbox == 1) {
		  document.getElementById('btnRange1').checked = true;
		  document.getElementById('btnRange2').checked = false;
		  document.getElementById('btnRange3').checked = false;
		  document.getElementById('btnRange4').checked = false;
		  document.getElementById('btnRange5').checked = false;
		  document.getElementById('btnFifteen1').checked = false;
		  document.getElementById('btnFifteen2').checked = false;
		  document.getElementById('gluHold').hidden = true;
	  }
	  
	  if (checkbox == 2) {
		  document.getElementById('btnRange1').checked = false;
		  document.getElementById('btnRange2').checked = true;
		  document.getElementById('btnRange3').checked = false;
		  document.getElementById('btnRange4').checked = false;
		  document.getElementById('btnRange5').checked = false;
		  document.getElementById('btnFifteen1').checked = false;
		  document.getElementById('btnFifteen2').checked = false;
		  document.getElementById('gluHold').hidden = true;
	  }
	  
	  if (checkbox == 3) {
		  document.getElementById('btnRange1').checked = false;
		  document.getElementById('btnRange2').checked = false;
		  document.getElementById('btnRange3').checked = true;
		  document.getElementById('btnRange4').checked = false;
		  document.getElementById('btnRange5').checked = false;
		  document.getElementById('btnFifteen1').checked = false;
		  document.getElementById('btnFifteen2').checked = false;
		  document.getElementById('gluHold').hidden = true;
	  }
	
	  if (checkbox == 4) {
		  document.getElementById('btnRange1').checked = false;
		  document.getElementById('btnRange2').checked = false;
		  document.getElementById('btnRange3').checked = false;
		  document.getElementById('btnRange4').checked = true;
		  document.getElementById('btnRange5').checked = false;
		  document.getElementById('btnFifteen1').checked = false;
		  document.getElementById('btnFifteen2').checked = false;
		  document.getElementById('gluHold').hidden = true;
	  }

	  if (checkbox == 5) {
		  document.getElementById('btnRange1').checked = false;
		  document.getElementById('btnRange2').checked = false;
		  document.getElementById('btnRange3').checked = false;
		  document.getElementById('btnRange4').checked = false;
		  document.getElementById('btnRange5').checked = true;
		  document.getElementById('btnFifteen1').checked = false;
		  document.getElementById('btnFifteen2').checked = false;
		  document.getElementById('gluHold').hidden = true;
	  }
	  
	  if (checkbox == 6) {
		  document.getElementById('btnFood1').checked = true;
		  document.getElementById('btnFood2').checked = false;
		  document.getElementById('displayDiet').hidden = false;
	  }
	  
	  if (checkbox == 7) {
		  document.getElementById('btnFood1').checked = false;
		  document.getElementById('btnFood2').checked = true;
		  document.getElementById('displayDiet').hidden = true;
	  }
	  
	  if (checkbox == 8) {
		document.getElementById('btnFifteen1').checked = true;
		document.getElementById('btnFifteen2').checked = false;
	  }
	  
	  if (checkbox == 9) {
		document.getElementById('btnFifteen1').checked = false;
		document.getElementById('btnFifteen2').checked = true;
	  }
	
	  document.getElementById('displayError').hidden = true;
	  document.getElementById('displayData').hidden = true;
	}
function hideData(iscChk){
     	  
	  document.getElementById('displayError').hidden = true;
	  document.getElementById('displayData').hidden = true;
	  document.getElementById('gluHold').hidden = true;
	  document.getElementById('displayISCWarn').hidden = true
	 
	  
}

function allValuesFilled(){
	let passedCheck = 0;
	
	let curGlucose;
	let prevGlucose;
	let prevISC;
	let gluFifteenCheck = 0;
	
	//get radios and checks
	let x = document.getElementsByClassName('range');
	let rate_value;
		for(var i = 0; i < x.length; i++){
			  if(x[i].checked){
				  rate_value = x[i].value;
			  }
		}
		
	let y = document.getElementsByClassName('protocol-action');
	let protocol_value;
			for(var j = 0; j < y.length; j++){
			  if(y[j].checked){
				  protocol_value = y[j].value;
			  }
		}

	//final logic
	if (protocol_value > 0  && rate_value > 0) {
		if (protocol_value == 1) {
			curGlucose = document.getElementById('curGluVal').value;
			if (curGlucose > 0) { passedCheck = 1;}
		}else{
			curGlucose = 	document.getElementById('curGluVal').value;
			prevGlucose = 	document.getElementById('prevGluVal').value;
			prevISC = 		document.getElementById('prevISCVal').value;
			if (curGlucose > 0  && prevGlucose > 0 && prevISC > 0) { 
				if (document.getElementById('gluHold').hidden == true){
					passedCheck = 1;
				}else{
					if ((document.getElementById('btnFifteen1').checked == true) || (document.getElementById('btnFifteen2').checked == true)){
						passedCheck = 1;
					}
				}
			}
		}
	}else{ 
		passedCheck = 0;
	}
	//do the check here for the check of the glucose hold 
    
	if(document.getElementById('btnradio1').checked == false){
		  let pg = document.getElementById('prevGluVal').value;
		  let cg = document.getElementById('curGluVal').value;
		  let lowerValtmp = getLowerBound();
		
		if(lowerValtmp > 0){
			//if ((cg >= 70) && (pg >= 70)){
				 if ((cg < lowerValtmp) && (pg < lowerValtmp)){
					if (document.getElementById('gluHold').hidden == true){
					document.getElementById('gluHold').hidden = false;
					document.getElementById('btnFifteen1').checked = false;
					document.getElementById('btnFifteen2').checked = false;
					passedCheck = 0;
					}
				}
			//}
		}
	  }
	
	return passedCheck;
}


function getLowerBound(){
	let output;
	let x = document.getElementsByClassName('range');
	let rate_value;
		for(var i = 0; i < x.length; i++){
			  if(x[i].checked){
				  rate_value = x[i].value;
			  }
		}
		
	if (rate_value == 1) { output = 100 };
	if (rate_value == 2) { output = 110 };
	if (rate_value == 3) { output = 150 };
	if (rate_value == 4) { output = 200 };
	if (rate_value == 5) { output = 140 };
	
	return output;
}

function getUpperBound(){
	let output;
	let x = document.getElementsByClassName('range');
	let rate_value;
		for(var i = 0; i < x.length; i++){
			  if(x[i].checked){
				  rate_value = x[i].value;
			  }
		}
		
	if (rate_value == 1) { output = 130 };
	if (rate_value == 2) { output = 150 };
	if (rate_value == 3) { output = 200 };
	if (rate_value == 4) { output = 300 };
	if (rate_value == 5) { output = 180 };
	
	return output;
}

function runCalc(){
	let validateFields = allValuesFilled();
	let lowerVal;
	let upperVal;
	let glucVal;
	let bolusVal;
	let fmtBolus;
	let doseVal;
	let fmtDose;
	let curISCVal;
	let largeDrop;
	let resetISC;
	let resetISChyp;
	let stopInf;
	let tempVal;
	stopInf = "<br><p style='font-size: small'>DISCONTINUE saline IV fluid using Per Protocol order mode. Start dextrose IV fluid previously ordered CONTINUOUS PRN. DO NOT restart saline infusion if subsequent BG returns above 250.</p>";
	
	//check prev ISC validateFields
	if (document.getElementById('prevISCVal').value >= 0.2){
		document.getElementById('displayISCWarn').hidden = false;
	}else{
		document.getElementById('displayISCWarn').hidden = true;
	}
	//hide values if missing data
	if (validateFields == 1){
	  document.getElementById('displayError').hidden = true;
	  document.getElementById('displayData').hidden = false;
	  glucVal = document.getElementById('curGluVal').value;
	  upperVal = getUpperBound();
	  lowerVal = getLowerBound();
	  largeDrop = "";
	  resetISC = "";
	  resetISChyp = "";
	  //do the calculation  
	  if (document.getElementById('btnradio1').checked == true){
		//for initials only
		if (glucVal > upperVal) {
			curISCVal = 0.02;
		}else if (glucVal < lowerVal){
			curISCVal = 0.005;
		}else{
			curISCVal = 0.01;
		}
		
		if(glucVal>600){
			tempVal=601;
		}else{
			tempVal=glucVal;	
		}
		
		doseVal = curISCVal*(tempVal - 60);
		fmtDose = parseFloat(doseVal.toFixed(4));
		
		//bolus info
		if (glucVal >= 240){
			bolusVal = 0.03 *(glucVal - 60);
			fmtBolus = parseFloat(bolusVal.toFixed(4));
			if (fmtBolus > 20){ fmtBolus = 20}
			document.getElementById('bolus').innerHTML = fmtBolus + " Units ";
		}else{
			document.getElementById('bolus').innerHTML = "No Bolus";
		}
		//dose info
		if (glucVal < lowerVal) {
			if (glucVal < 70) {
				document.getElementById('dose').innerHTML = "Pause Infusion and Recheck Glucose in 15 min<br>Follow Hypoglycemia Protocol<br><br>Restart infusion when BG above lower end of goal range ";
			}else { 
				if ((glucVal < 250) && (document.getElementById('btnRange3').checked == true || document.getElementById('btnRange4').checked == true)){
					if (fmtDose < 0.05){
						document.getElementById('dose').innerHTML = "Pause Infusion " + stopInf;
					}else{
						document.getElementById('dose').innerHTML = fmtDose + " Units/hr " + stopInf;
					}
				}else{
					if (fmtDose < 0.05){
						document.getElementById('dose').innerHTML = "Pause Infusion ";
					}else{
						document.getElementById('dose').innerHTML = fmtDose + " Units/hr ";
					}
				}
			}
		}else{
			if ((glucVal < 250) && (document.getElementById('btnRange3').checked == true || document.getElementById('btnRange4').checked == true)){
				if (fmtDose < 0.05){
					document.getElementById('dose').innerHTML = "Pause Infusion " + stopInf;
				}else{
					document.getElementById('dose').innerHTML = fmtDose + " Units/hr " + stopInf;
				}
			}else{
				if (fmtDose < 0.05){
					document.getElementById('dose').innerHTML = "Pause Infusion ";
				}else{
					document.getElementById('dose').innerHTML = fmtDose + " Units/hr ";
				}
			}
		}
		
		document.getElementById('ISCDisp').innerHTML = curISCVal;
		
	  }else{
		// for adjustments
		let pISC = document.getElementById('prevISCVal').value;
			if (glucVal > upperVal) {
				curISCVal = parseFloat(pISC) + 0.01;
			}else if (glucVal < lowerVal){
				if (glucVal < 70) {
					//if current glu is < 70 then it will at least be a initial 15 min pause, otherwise it will stay the same
					if (document.getElementById('prevGluVal').value >= lowerVal){
						
						if (pISC <= 0.01){
							curISCVal = parseFloat(pISC)/2;
						}else if (pISC > 0.05){
							curISCVal = parseFloat(pISC) * 0.8;
						}else{
							curISCVal = parseFloat(pISC) - 0.01;
						}
					}else{
					//if the button is checked
						if (document.getElementById('gluHold').hidden == true){
							if (pISC <= 0.01){
								curISCVal = parseFloat(pISC)/2;
							}else if (pISC > 0.05){
								curISCVal = parseFloat(pISC) * 0.8;
							}else{
								curISCVal = parseFloat(pISC) - 0.01;
							}
						}else{
							if (document.getElementById('btnFifteen2').checked == true){
								if (pISC <= 0.01){
									curISCVal = parseFloat(pISC)/2;
								}else if (pISC > 0.05){
									curISCVal = parseFloat(pISC) * 0.8;
								}else{
									curISCVal = parseFloat(pISC) - 0.01;
								}
							}else{
								curISCVal = parseFloat(pISC);
							}
						}
					}
				}else{
					//if the button is checked
					if (document.getElementById('gluHold').hidden == true){
						if (pISC <= 0.01){
							curISCVal = parseFloat(pISC)/2;
						}else if (pISC > 0.05){
							curISCVal = parseFloat(pISC) * 0.8;
						}else{
							curISCVal = parseFloat(pISC) - 0.01;
						}
					}else{
						if (document.getElementById('btnFifteen2').checked == true){
							if (pISC <= 0.01){
								curISCVal = parseFloat(pISC)/2;
							}else if (pISC > 0.05){
								curISCVal = parseFloat(pISC) * 0.8;
							}else{
								curISCVal = parseFloat(pISC) - 0.01;
							}
						}else{
							curISCVal = parseFloat(pISC);
						}
					}
				}
			}else{
				curISCVal = parseFloat(pISC);
			}
		//check for drop > 75
		
		let diffVal = parseFloat(document.getElementById('prevGluVal').value) - parseFloat(glucVal);
		
		
		if ((glucVal >= lowerVal) && (glucVal < 525)){
			if(diffVal >= 75) {
				largeDrop = "<br>Glucose decreased by >= 75";
				if (pISC <= 0.01){
					curISCVal = parseFloat(pISC)/2;
				}else{
					curISCVal = parseFloat(pISC) - 0.01;
				}
			}
			


		}
		
		//do reset
		
		if(glucVal>600){
			tempVal=601;
		}else{
			tempVal=glucVal;
			
		}
		doseVal = curISCVal*(tempVal - 60);
		fmtDose = parseFloat(doseVal.toFixed(4));
		
		//dose info
		if (glucVal < lowerVal) {
			if (glucVal < 70) {
				document.getElementById('dose').innerHTML = "Pause Infusion and Recheck Glucose in 15 min<br>Follow Hypoglycemia Protocol<br><br>Restart infusion when BG above lower end of goal range " + resetISChyp;
			}else { 
				if (document.getElementById('btnFifteen1').checked == true){
					document.getElementById('dose').innerHTML = "Pause Infusion and Recheck Glucose in 15 min<br><br>Restart infusion when BG above lower end of goal range " + resetISC;
				}else{
					if ((glucVal < 250) && (document.getElementById('btnRange3').checked == true || document.getElementById('btnRange4').checked == true)){
						if (fmtDose < 0.05){
							document.getElementById('dose').innerHTML = "Pause Infusion " + largeDrop + stopInf;
						}else{
							document.getElementById('dose').innerHTML = fmtDose + " Units/hr " + largeDrop + stopInf;
						}
					}else{
						if (fmtDose < 0.05){
							document.getElementById('dose').innerHTML = "Pause Infusion " + largeDrop;
						}else{
							document.getElementById('dose').innerHTML = fmtDose + " Units/hr " + largeDrop;
						}
					}
				}
			}
		}else{
			if ((glucVal < 250) && (document.getElementById('btnRange3').checked == true || document.getElementById('btnRange4').checked == true)){
				if (fmtDose < 0.05){
					document.getElementById('dose').innerHTML = "Pause Infusion " + largeDrop + stopInf;
				}else{
					document.getElementById('dose').innerHTML = fmtDose + " Units/hr " + largeDrop + stopInf;
				}
			}else{
				if (fmtDose < 0.05){
					document.getElementById('dose').innerHTML = "Pause Infusion " + largeDrop;
				}else{
					document.getElementById('dose').innerHTML = fmtDose + " Units/hr " + largeDrop;
				}
			}
		}
		document.getElementById('bolus').innerHTML = "No Bolus";
		document.getElementById('ISCDisp').innerHTML = parseFloat(curISCVal.toFixed(4));
		
	  }
	}else{
	  document.getElementById('displayError').hidden = false;
	  document.getElementById('displayData').hidden = true;
	}
}