
function getToken() {
  let user = JSON.parse(localStorage.getItem('activeUser'));

  return user ? user.token : null
}


export function headers() {
  let token = getToken();
  return token ? {
    headers: {Authorization: `Token ${token}`}
  } : {}
}