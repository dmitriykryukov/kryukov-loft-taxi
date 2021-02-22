export const serverLogIn = async (email, password) => {
  return fetch(`https://loft-taxi.glitch.me/auth`, {
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
  .then(res => res.json()).then(data => data)
}
export const serverRegister = async (email, password, name, surname) => {
  return fetch(`https://loft-taxi.glitch.me/register`, {
    body: JSON.stringify({ email, password, name, surname }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
  .then(res => res.json()).then(data => data)
}

export const saveNewCard = async (cardNumber, expiryDate, cardName, cvc, token ) => {
  return fetch(`https://loft-taxi.glitch.me/card`, {
    body: JSON.stringify({ cardNumber, expiryDate, cardName, cvc, token }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
  .then(res => res.json()).then(data => data);
}

export const getRoute = async (address1, address2) => {
  return fetch(`https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`)
  .then(res => res.json()).then(data => data);
}

export const getAddressesList = async () => {
  return fetch(`https://loft-taxi.glitch.me/addressList`)
  .then(res => res.json()).then(data => data);
}




