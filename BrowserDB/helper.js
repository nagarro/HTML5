
function validateFields()
{
	var lblError = document.getElementById("lblError");
	var txtEmail = document.getElementById("txtEmail");
	var txtWebsite = document.getElementById("txtWebsite");
	var txtPhone = document.getElementById("txtPhone");
	var txtDate = document.getElementById("txtDate");
	var txtQuantity = document.getElementById("txtQuantity");
	
	lblError.innerHTML = '';
	
	if(txtEmail != null && txtEmail != undefined)
	{
		//required validation
		if(txtEmail.value == null || txtEmail.value == undefined || txtEmail.value == '')
		{
			lblError.innerHTML = lblError.innerHTML + "Email is required <br/>";
		}
		
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(!re.test(txtEmail.value))
		{
			lblError.innerHTML = lblError.innerHTML + "Invalid Email <br/>";
		}
	}
	
	if(txtWebsite != null && txtWebsite != undefined)
	{
		//required validation
		if(txtWebsite.value == null || txtWebsite.value == undefined || txtWebsite.value == '')
		{
			lblError.innerHTML = lblError.innerHTML + "Website is required <br/>";
		}
		var RegExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

		if(!RegExp.test(txtWebsite.value)){
			lblError.innerHTML = lblError.innerHTML + "Invalid Website <br/>";
		}
    
	}
	
	if(txtPhone != null && txtPhone != undefined)
	{
		//required validation
		if(txtPhone.value == null || txtPhone.value == undefined || txtPhone.value == '')
		{
			lblError.innerHTML = lblError.innerHTML + "Phone is required <br/>";
		}
		
		var regexObj = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

		if (!regexObj.test(txtPhone.value)) {
			// Invalid phone number
			lblError.innerHTML = lblError.innerHTML + "Invalid Phone <br/>";
		}
	}
	
	if(txtDate != null && txtDate != undefined)
	{
		//required validation
		if(txtDate.value == null || txtDate.value == undefined || txtDate.value == '')
		{
			lblError.innerHTML = lblError.innerHTML + "Date is required <br/>";
		}
		
	}
	
	if(txtQuantity != null && txtQuantity != undefined)
	{
		//required validation
		if(txtQuantity.value == null || txtQuantity.value == undefined || txtQuantity.value == '')
		{
			lblError.innerHTML = lblError.innerHTML + "Quantity is required <br/>";
		}
	}
	
	
	
	if(lblError.innerHTML == '')
		return true
	else
		return false
}

function CheckKeyCode(e)
{
	if(e.KeyCode != null && e.KeyCode != undefined)
	{
		if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode == 8))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	if(e.charCode != null && e.charCode != undefined)	
	{
		if ((e.charCode >= 48 && e.charCode <= 57) || (e.charCode == 0))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}

function PlaceOrder()
{
	debugger;
	if(validateFields())
	{
		var lblError = document.getElementById("lblError");
		lblError.innerHTML = '';
		//save the data by calling webservice
		$.ajax({
		type: "POST",
		url: "http://localhost:17260/WebServiceTest/Service.asmx/HelloWorld",
		data: "{}",
		contentType: "application/json; charset=utf-8",
		datatype: 'json',
		success:function(data, status) {
		debugger;
            alert(data.d);
		}
	});
	}
}

function ComputeQuantity()
{
	var txtMultiplier = document.getElementById("txtMuliplier");
	var txtQuantity = document.getElementById("txtQuantity");
	var txtComputedQuantity = document.getElementById("txtComputedQuantity");
	
	txtComputedQuantity.innerHTML = txtQuantity.value * txtMultiplier.innerHTML;
}