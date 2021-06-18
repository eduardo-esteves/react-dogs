export const API_URL = 'https://dogsapi.origamid.dev/json'

export function TOKEN_POST(body) {
  return {
    url: API_URL + '/jwt-auth/v1/token',
    options: {
      method  : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(body)
    }
  }
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + '/jwt-auth/v1/token/validate',
    options: {
      method  : 'POST',
      headers : {
        'Authorization' : 'Bearer ' + token 
      }
    }
  }
}

export function USER_GET(token) {
  return {
    url: API_URL + '/api/user',
    options: {
      method  : 'GET',
      /**
       * Como não envio conteúdo não tem necessidade de informar o tipo de counteudo. 
       * No authorization antes de passar o token tenho que passar o Bearer para informar que é um token.
      */
      headers : {
        'Authorization' : 'Bearer ' + token 
      }
    }
  }
}

export function CREATE_USER(body){
  return {
    url : API_URL + '/api/user',
    options : {
      method  : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(body)
    }
  }
}

export function PHOTO_POST(token, formData) {
  return {
    url: API_URL + '/api/photo',
    options: {
      method  : 'POST',
      headers : {
        'Authorization' : 'Bearer ' + token 
      },
      body: formData
    }
  }
}

