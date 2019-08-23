const weatherForm = document.querySelector('form') //Tomo lo que estoy ingresando en el form recien creado
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1') //Lo hacemos apuntar al que tiene el id con message 1
const messageTwo = document.querySelector('#message-2') 
//messageOne.textContent = 'From JavaScript'


weatherForm.addEventListener('submit' , (e)=>{
    e.preventDefault() //Hago que no se refresque el browser para poder usar el dato ingresado
    const location = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch('/weather?address=' + location).then((response) => {
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent = data.error
            messageTwo.textContent = ''
        }else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
        })
    })
})