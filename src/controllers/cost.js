const axios = require('axios')

exports.cost = (req, res) => {
  const data = ({
    origin: req.body.origin,
    destination: req.body.destination,
    weight: req.body.weight,
    courier: req.body.courier
  })
  axios.post('https://api.rajaongkir.com/starter/cost', data, {
    headers: {
      key: '01c67c78ff9e384fdbac1775307db363'
    }
  }).then(response => {
    console.log(response.data.rajaongkir)
    res.json(response.data.rajaongkir.results)
  }).catch(err => {
    console.log(err)
  })
}
