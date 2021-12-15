const BASE_URL = 'https://thatcopy.pw/catapi/rest/'
const catImg = document.querySelector('img#cats')

const getData = async () => {
  try {
    const data = await fetch(BASE_URL)
    const json = await data.json()

    return json.webpurl
  } catch (error) {
    console.log(error.message)
  }
}

const loadImg = async () => {
  catImg.src = await getData()
}

loadImg()
