	
		function checkFlying(){
			var field1=document.getElementById("flyingFrom").value;
			var field2=document.getElementById("flyingTo").value;
			
			if((field1=="")||(field2==""))
					document.getElementById("message1").innerHTML="You must provide input";
			else {
				if (field1!=field2)	
					document.getElementById("message1").innerHTML="";
				else 
					document.getElementById("message1").innerHTML="Values of both field a the same";
			}
		}
		
		function checkDate(){
			var field1=document.getElementById("departing").value;
			var field2=document.getElementById("returning").value;
						
			if((field1=="")||(field2=="")||(field1<Date.now()))
					document.getElementById("message2").innerHTML="Date is not correct";
			else {
				if ((field1<=field2))	
					document.getElementById("message2").innerHTML="";
				else 
					document.getElementById("message2").innerHTML="Date is not correct, departing > returning";
			}
		}
		
		
		function checkRegistration(){
			var field1=document.getElementById("fname").value;
			var field2=document.getElementById("lname").value;
			var field3=document.getElementById("telephone").value;
			var field4=document.getElementById("email").value;
			
			var regex1=/[A-Za-z]/
			var regex2=/^[\+]?[0-9]{12}$/
			var regex3=/[A-Za-z]?[0-9]?[@]?[\.]$/
			
					
			if((regex1.test(field1))&&(regex1.test(field2))){
				document.getElementById("message4").innerHTML="";
			}
			else{
				document.getElementById("message4").innerHTML="Please use only letters Or you must provide input";
			}
			
			if(regex2.test(field3)){
				document.getElementById("message5").innerHTML="";
			}
			else{
				document.getElementById("message5").innerHTML="Enter full telephone number";
			}
			
			if(regex3.test(field4)){
				document.getElementById("message6").innerHTML="";
			}
			else{
				document.getElementById("message6").innerHTML="Enter correct E-mail address";
			}
		}
		
			
		function messageBox() {
			var field1=document.getElementById("flyingFrom").value;
			var field2=document.getElementById("flyingTo").value;
			var field3=document.getElementById("departing").value;
			var field4=document.getElementById("returning").value;
			var field5=document.getElementById("fname").value;
			var field6=document.getElementById("lname").value;
			var field7=document.getElementById("telephone").value;
			var field8=document.getElementById("email").value;
			var field9=document.getElementById("hotel").value;
			var field10=document.getElementById("car").value;
			var field11=document.getElementById("adults").value;
			var field12=document.getElementById("children").value;
						
			if((document.getElementById("hotel").checked==true)&&(document.getElementById("car").checked==true)){			
				window.alert ("Hello "+field5+" "+field6+"!\nTelephone: "+field7+"\nE-mail: "+field8+
			"\nYour ordering is: "+field1+" - "+field2+"\nDeparting: "+field3+" Returning: "+field4+"\nAdults: "+
			field11+"\nChildren: "+field12+"\nAdvanced options: "+field9+","+field10);
			}
			
			if((document.getElementById("hotel").checked==true)&&(document.getElementById("car").checked==false)){			
				window.alert ("Hello "+field5+" "+field6+"!\nTelephone: "+field7+"\nE-mail: "+field8+
			"\nYour ordering is: "+field1+" - "+field2+"\nDeparting: "+field3+" Returning: "+field4+"\nAdults: "
			+field11+"\nChildren: "+field12+"\nAdvanced options: "+field9);
			}
			
			if((document.getElementById("hotel").checked==false)&&(document.getElementById("car").checked==true)){			
				window.alert ("Hello "+field5+" "+field6+"!\nTelephone: "+field7+"\nE-mail: "+field8+
			"\nYour ordering is: "+field1+" - "+field2+"\nDeparting: "+field3+" Returning: "+field4+"\nAdults: "
			+field11+"\nChildren: "+field12+"\nAdvanced options: "+field10);
			}
			if((document.getElementById("hotel").checked==false)&&(document.getElementById("car").checked==false)){			
				window.alert ("Hello "+field5+" "+field6+"!\nTelephone: "+field7+"\nE-mail: "+field8+
			"\nYour ordering is: "+field1+" - "+field2+"\nDeparting: "+field3+" Returning: "+field4+"\nAdults: "
			+field11+"\nChildren: "+field12+"\nThere is no Advanced options");
			}
			
		}
		
	var time = new Date.now(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();

document.getElementById("second-hand").className = "sh-" + seconds;
document.getElementById("minute-hand").className = "mh-" + minutes;
document.getElementById("hour-hand").className = "hh-" + hours;