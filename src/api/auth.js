export const setAuthToken = user => {
    const currentUser = {
        email: user.email
    }

    //get jwt token
    fetch('https://genius-car-server-lac-sigma.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            //local storage is the easiest but not the best place to store token
            localStorage.setItem('geniusToken', data.token)            
        })
}