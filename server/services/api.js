const { default: axios } = require("axios")

const options = {
    method: 'GET',
    url: 'bikeindex.org/api/v3/search',
    headers: {'content-type': 'application/json', authorization: 'Bearer ACCESS_TOKEN'}
}
  
const getAPI = async () => {
  const res = await axios.request(options)

  console.log(res.data)
}