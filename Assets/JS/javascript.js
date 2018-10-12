// function ChangePhoto(){
// document.getElementById("image1").src="Assets/img/image1_2.jpg";
// document.getElementById("image2").src="Assets/img/image2_2.jpg";
// document.getElementById("image3").src="Assets/img/image3_2.jpg";
// document.getElementById("image4").src="Assets/img/image4_2.jpg";
// document.getElementById("image5").src="Assets/img/image5_2.jpg";
// }
// function RemetPhoto(){
// document.getElementById("image1").src="Assets/img/image1.jpg";
// document.getElementById("image2").src="Assets/img/image2.jpg";
// document.getElementById("image3").src="Assets/img/image3.jpg";
// document.getElementById("image4").src="Assets/img/image4.jpg";
// document.getElementById("image5").src="Assets/img/image5.jpg";
// }

// Image par image
function ChangePhoto(image){
image.src= 'Assets/img/' + image.id + '_2.jpg';
}
function RemetPhoto(image){
image.src= 'Assets/img/' + image.id +'.jpg';
}
