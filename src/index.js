const qrcode = require('qrcode-generator')

function makeQR (data, id) {
  let qr, base64, tag, el

  // Build QR
  qr = qrcode(0, 'L')
  qr.addData(data)
  qr.make()

  // Create Base64
  tag = qr.createSvgTag()
  tag = tag.replace('black', '#0b3a53', -1)
  base64 = window.btoa(tag)

  // Fill element
  el = document.getElementById(id)
  el.innerHTML = `<img src="data:image/svg+xml;base64,${base64}"/>`
}

function showError (e) {
  console.error(e)
  const el = document.getElementById('error')
  el.classList.remove('dn')
  el.innerHTML = e.message
}

document.addEventListener('DOMContentLoaded', () => {
  require('window.ipfs-is-required')()

  if (!window.ipfs) {
    showError(new Error('window.ipfs is undefined'))
    return
  }

  window.ipfs.id((err, data) => {
    if (err) return showError(err)

    const ipnsLink = `https://ipfs.io/ipns/${data.id}`

    // Display and make QRs
    document.getElementById('qrs').classList.remove('dn')
    makeQR(ipnsLink, 'ipns-link')
    makeQR(data.publicKey, 'pub-key')

    // Display peer info
    document.getElementById('infos').classList.remove('dn')
    document.getElementById('id').innerHTML = data.id
    document.getElementById('ipns-link-raw').innerHTML = ipnsLink 
  })
})
