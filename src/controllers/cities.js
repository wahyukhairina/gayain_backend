const axios = require('axios')

exports.all_cities = (req, res) => {
  axios.get('https://api.rajaongkir.com/starter/city', {
    headers: {
      key: '01c67c78ff9e384fdbac1775307db363'
    }
  }).then(response => {
    // console.log(response.data.rajaongkir);
    res.json(response.data.rajaongkir.results)
  }).catch(err => {
    console.log(err)
  })
}

exports.city = (req, res, err) => {
  if (req.params.id === 0) {
    res.status(404).json({ message: 'there is no city' })
  }

  axios.get('https://api.rajaongkir.com/starter/city?id=' + req.params.id, {
    headers: {
      key: '01c67c78ff9e384fdbac1775307db363'
    }
  }).then(response => {
    console.log(response.data.rajaongkir)
    res.status(200).send(response.data.rajaongkir.results)
  }).catch(err => {
    console.log(err)
  })
}
