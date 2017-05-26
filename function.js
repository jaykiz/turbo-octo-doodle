var zipcode;
function getZip(zipcode){
	
	if (zipcode > 20000){
		return true;
	}
	
	else{
		return false;
	}
	
}


	


var style = 0;
function calculateStyle(value){
	var styleType = document.getElementById("style");
	var x = value;
	
	
		if(x=="classic"){
			style =3.00;
		}
		
		else if(x=="premium"){
			style=5.00;
		}
		
		else if(x=="royal"){
			style=10.00;
		}
		
	calculateTotal(style, tip);
}


var tip =0.10;
function calculateTip(value){
	var tipType = document.getElementById("tip");
	var y = value;
	
	if(y == "10"){
		tip=0.10;
	}
	else if(y=="15"){
		tip=0.15;
	}
	else if(y=="20"){
		tip=0.20;
	}
	
	calculateTotal(style, tip);
}


function calculateTotal(style, tip){
	var temp= style*tip;
	var total = style+temp;
	
	var totalDiv=document.getElementById("total");

	totalDiv.innerHTML = "Total: "+total;
	
}