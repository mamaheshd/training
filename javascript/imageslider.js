const imgArray = ['0.JPG', '1.jpg', '2.jpg', '3.JPG', '4.JPG', '5.JPG', '6.JPG', '7.JPG'];
const arrayLength = imgArray.length
let i = 0
let set = setInterval(() => {
    i++
    i = i % arrayLength
    // i=0%5=0,1%5=1,2%5=2,3%5=3,4%5=4,5%5=0
    document.querySelector('img').src = `../images/${imgArray[i]}`
}, 5000)

const next = () => {
    i++
    i = i % arrayLength
    // i=0%5=0,1%5=1,2%5=2,3%5=3,4%5=4,5%5=0
    document.querySelector('img').src = `../images/${imgArray[i]}`

}

const prev = () => {
    i--
    if (i < 0) {
        i = arrayLength - 1
    }
    document.querySelector('img').src = `../images/${imgArray[i]}`
}

const stops = () => {
    clearInterval(set)
}

const start = () => {
    setInterval(() => {
        i++
        i = i % arrayLength
        // i=0%5=0,1%5=1,2%5=2,3%5=3,4%5=4,5%5=0
        document.querySelector('img').src = `../images/${imgArray[i]}`
    }, 5000)
}