const images = 
	["image1.png",
	"image2.png",
	"image3.png",
	"image4.png",
	"image5.png"]

let i = 0

function placeImage(x,y) {

	const nextimage=images[i]

	const = document.createElement("img")

	img.setAttribute("src", nextImage)
	img.style.left=x + "px"
	img.style.top=y + "px"

document.body.appendChild(img)

}

// i = i + 1

// if (i >= images.length){
// 	i=0
// }

// document.addEventListener("click",function (event) {

// event.preventDefault()
// placeimage(500,400)
// })