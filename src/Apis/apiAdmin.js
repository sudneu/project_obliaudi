export const createBook = (userId, book) => {
    return fetch('http://localhost:9000/books', {
        method: "post",
        headers: {
            Accept: "application/json"
        },
        body: book
    })
        .then(response => response.json())
        .catch( err => {
            console.log(err)
        })
}


export const signup= (values) => {
    const {name, email, password, retype}=values;
    return fetch("http://localhost:9000/users/signup",{
        method: "post",
        headers: {
          Accept: 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({name, email, password, repeatpassword : retype})
    }).then(response => {
      return response.json()
    })
      .then(data => {
        return data
      })
      .catch(err => console.log(err))
  }

  export const login= (values) => {
    const {email, password} = values;
    return fetch("http://localhost:9000/users/login",{
        method: "post",
        headers: {
          Accept: 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({email, password})
    }).then(response => {
      return response.json()
    })
      .then(data => {
        return data
      })
      .catch(err => console.log(err))
  }

  export const signout = (next)=> {
    if(typeof window !== undefined){
      localStorage.removeItem('jwtStorage');
      return fetch('http://localhost:9000/signout',{
              method: 'get'})
              .then(data => JSON.data)
              .then(response => response)
              .catch(err => console.log(err));
    }
  }

  export const authenticate= (values, next) => {
    localStorage.setItem('jwtStorage', JSON.stringify(values) );
    next();
  }

  export const isAuthenticated = () => {
    if(localStorage.getItem('cookieStore')){
      return JSON.parse(localStorage.getItem('jwtStorage') );
    }
  }
  