const images =
	["image6.jpg","image7.jpg"]

let i = 0

function placeImage(x,y) {

const nextimage=images[i]

const img = document.createElement("img")
	img.setAttribute("src", nextImage)
	img.style.left=x + "px"
	img.style.top=y + "px"

document.body.appendChild(img)

}

// i = i + 1

// if (i >= images.length){
// 	i=0
// }

// document.getElementbyId("images")

// document.addEventListerner("click",function(event){
// 	event.preventdefault()
// 	placeimage(400,500)
// 	placeimage(200,100)
// 	placeimage(300,200)

// }