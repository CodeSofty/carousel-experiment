const image = document.getElementById('image');
const button = document.getElementById('button');

button.addEventListener("click", () => {


	if (image.getAttribute('src') == "https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Mint-Patty-Cake_exps140673_CMT2426390C08_17_2b_RMS.jpg")
	{
		image.src = "https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg";
	}
	else
	{
		image.src = "https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg";
	}

})