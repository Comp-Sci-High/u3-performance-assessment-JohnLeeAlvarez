// Good luck!

const express = require('express')
const app = express()








const catsAPI = {
  catPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgBt0_0qVRw1_IMMpgp_cfsaZ7D7PnciQMMw&s",
  breeds: [
    { name: "Siamese", origin: "Thailand", personality: "Affectionate and talkative", hypoallergenic: false },
    { name: "Maine Coon", origin: "United States", personality: "Gentle and playful", hypoallergenic: false },
    { name: "Bengal", origin: "United States", personality: "Active and curious", hypoallergenic: true },
    { name: "Persian", origin: "Iran", personality: "Quiet and sweet", hypoallergenic: false },
    { name: "Russian Blue", origin: "Russia", personality: "Reserved and loyal", hypoallergenic: true },
    { name: "Ragdoll", origin: "United States", personality: "Laid-back and affectionate", hypoallergenic: false },
    { name: "British Shorthair", origin: "United Kingdom", personality: "Calm and independent", hypoallergenic: false },
    { name: "Scottish Fold", origin: "Scotland", personality: "Sweet and gentle", hypoallergenic: false },
    { name: "Abyssinian", origin: "Ethiopia", personality: "Energetic and playful", hypoallergenic: false },
    { name: "Sphynx", origin: "Canada", personality: "Affectionate and mischievous", hypoallergenic: true },
    { name: "Burmese", origin: "Myanmar", personality: "Loving and friendly", hypoallergenic: false },
    { name: "Oriental Shorthair", origin: "United States", personality: "Curious and vocal", hypoallergenic: false },
    { name: "Norwegian Forest Cat", origin: "Norway", personality: "Independent and intelligent", hypoallergenic: false },
    { name: "Birman", origin: "Myanmar", personality: "Affectionate and social", hypoallergenic: false },
    { name: "Exotic Shorthair", origin: "United States", personality: "Playful and calm", hypoallergenic: false },
    { name: "Turkish Angora", origin: "Turkey", personality: "Energetic and playful", hypoallergenic: false },
    { name: "American Shorthair", origin: "United States", personality: "Independent and calm", hypoallergenic: false },
    { name: "Devon Rex", origin: "United Kingdom", personality: "Social and playful", hypoallergenic: true },
    { name: "Cornish Rex", origin: "United Kingdom", personality: "Active and affectionate", hypoallergenic: true },
    { name: "Manx", origin: "Isle of Man", personality: "Playful and intelligent", hypoallergenic: false },
    { name: "Savannah", origin: "United States", personality: "Adventurous and active", hypoallergenic: false },
    { name: "Singapura", origin: "Singapore", personality: "Affectionate and playful", hypoallergenic: false },
    { name: "Cymric", origin: "Isle of Man", personality: "Affectionate and playful", hypoallergenic: false },
    { name: "Australian Mist", origin: "Australia", personality: "Affectionate and easygoing", hypoallergenic: false },
    { name: "Russian Blue", origin: "Russia", personality: "Reserved and loyal", hypoallergenic: true },
    { name: "Himalayan", origin: "United States", personality: "Quiet and calm", hypoallergenic: false },
    { name: "LaPerm", origin: "United States", personality: "Affectionate and playful", hypoallergenic: true },
    { name: "Korat", origin: "Thailand", personality: "Loyal and affectionate", hypoallergenic: false },
    { name: "Turkish Van", origin: "Turkey", personality: "Active and playful", hypoallergenic: false },
    { name: "Somali", origin: "Ethiopia", personality: "Curious and energetic", hypoallergenic: false },
    { name: "Burmilla", origin: "United Kingdom", personality: "Gentle and affectionate", hypoallergenic: false },
    { name: "Tiffanie", origin: "United States", personality: "Affectionate and gentle", hypoallergenic: false },
    { name: "American Curl", origin: "United States", personality: "Playful and social", hypoallergenic: false },
    { name: "Selkirk Rex", origin: "United States", personality: "Affectionate and easygoing", hypoallergenic: false },
    { name: "Peterbald", origin: "Russia", personality: "Curious and affectionate", hypoallergenic: true },
    { name: "Chartreux", origin: "France", personality: "Gentle and quiet", hypoallergenic: false },
    { name: "Egyptian Mau", origin: "Egypt", personality: "Active and intelligent", hypoallergenic: false },
    { name: "Khao Manee", origin: "Thailand", personality: "Playful and friendly", hypoallergenic: false },
    { name: "Nebelung", origin: "Russia", personality: "Calm and loyal", hypoallergenic: false },
    { name: "Javanese", origin: "United States", personality: "Playful and affectionate", hypoallergenic: false },
    { name: "Munchkin", origin: "United States", personality: "Playful and affectionate", hypoallergenic: false },
    { name: "Balinese", origin: "United States", personality: "Affectionate and talkative", hypoallergenic: false },
    { name: "Coon", origin: "United States", personality: "Gentle and friendly", hypoallergenic: false },
    { name: "American Wirehair", origin: "United States", personality: "Affectionate and playful", hypoallergenic: false },
    { name: "Sokoke", origin: "Kenya", personality: "Active and friendly", hypoallergenic: false },
    { name: "Chausie", origin: "United States", personality: "Active and playful", hypoallergenic: false },
    { name: "Ragamuffin", origin: "United States", personality: "Gentle and affectionate", hypoallergenic: false },
    { name: "Mau", origin: "Egypt", personality: "Active and intelligent", hypoallergenic: false },
    { name: "Oriental Longhair", origin: "United States", personality: "Curious and affectionate", hypoallergenic: false }
  ]
};




app.get("/", (request, response) => {
  response.status(200).json("<h1>Welcome To My Cat API</h1>    <h2> This API will be about cats and the different breeds of cats. It will contain information like there name, origin, personality, and hypoallergenic. To learn mroe about how to use this API, on the link type in /docs. </h2>")
})



app.use((request, response, next) => {
  console.log(request.method + "" + request.url)
  next()
})



app.get("/catsAPI/breeds", (req, res) => {
  res.status(200).json(catsAPI.breeds)
})





app.get("/catsAPI/:breeds", (request, response) => {
  const id = request.params.breeds
  response.status(200).json(catsAPI.breeds[id])
})

app.get("/catsAPI/:breeds/origin", (request, response) => {
  const breeds = request.params.breeds
  response.status(200).json(catsAPI.breeds[breeds].origin)
})

app.get("/catsAPI/:breeds/personality", (request, response) => {
  const breeds = request.params.breeds
  response.status(200).json(catsAPI.breeds[breeds].personality)
})

app.get("/catsAPI/:breeds/hypoallergenic", (request, response) => {
  const breeds = request.params.breeds
  response.status(200).json(catsAPI.breeds[breeds].hypoallergenic)
})





app.get("/docs", (request, response) => {
  response.status(200).json(`<h2>"/" = Home page/Introduction</h2>
<h2>/catsAPI/breeds = List of all breeds and information</h2>
<h2>/catsAPI/:breeds = Gives you a specific cat breed that is align to it's number</h2>
<h2>/catsAPI/:breeds/origin = Gives you a specific cat breed origin that is align to it's number</h2>
<h2>/catsAPI/:breeds/personality = Gives you a specific cat breed personality that is align to it's number</h2>
<h2>/catsAPI/:breeds/hypoallergenic = Gives you a specific cat breed information if it's hypoallergenic  that is align to it's number</h2>
<h2>/docs = Shows you the endpoints.</h2>`)
})






app.use((req, res, next) => {
  res.status(404).send("404 NOT FOUND")
})




app.listen(3000, () => {
  console.log("Server running")
})

