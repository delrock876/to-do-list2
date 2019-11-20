document.getElementById('button').addEventListener('click', e =>{
    e.preventDefault()

    let something = {
       chore: document.getElementById('message').value
    }

    document.getElementById('message').value = ''

    console.log(something)
})