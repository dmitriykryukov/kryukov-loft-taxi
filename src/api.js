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

export const serverNewCard = async (cardNumber, expiryDate, cardName, cvc, token ) => {
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
  return fetch(`https://loft-taxi.glitch.me/route?${address1}&${address2}`, {
    body: JSON.stringify({ address1, address2 }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  })
  .then(res => res.json()).then(data => data);
}

export const getAddressList = async () => {
  return fetch(`https://loft-taxi.glitch.me/addressList`, {
    body: JSON.stringify(),
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  })
  .then(res => res.json()).then(data => data);
}




