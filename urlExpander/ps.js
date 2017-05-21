const rp = require('request-promise-native')
const oldUrl = 'https://t.co/xT280k8S9l'

const expandUrl = async (short) =>
  rp({
    method: 'HEAD',
    uri: short,
    followAllRedirects: true
  })

const newUrl = await expandUrl(oldUrl).request.href
