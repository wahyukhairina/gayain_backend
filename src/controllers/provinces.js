const axios = require('axios')

exports.all_provinces = async (req, res) => {
  await axios.get('https://api.rajaongkir.com/starter/province', {
    headers: {
      key: '01c67c78ff9e384fdbac1775307db363'
    }
  }).then(response => {
    res.json(response.data.rajaongkir.results)
  }).catch(err => {
    console.log(err)
  })
}

exports.province = async (req, res) => {
  if (req.params.id > 34 || req.params.id === 0) {
    res.status(404).json({ message: 'there is no province' })
  }

  await axios.get('https://api.rajaongkir.com/starter/province?id=' + req.params.id, {
    headers: {
      key: '01c67c78ff9e384fdbac1775307db363'
    }
  }).then(response => {
    res.status(200).send(response.data.rajaongkir.results)
  }).catch(err => {
    console.log(err)
  })
}
