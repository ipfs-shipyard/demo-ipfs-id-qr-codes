const qrcode = require('qrcode-generator')

function makeQR (data, id) {
  let qr, base64, el
  
  // Build QR
  qr = qrcode(0, 'L')
  qr.addData(data)
  qr.make()

  // Create Base64
  base64 = btoa(qr.createSvgTag())

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
  if (!window.ipfs) {
    showError(new Error('window.ipfs is undefined'))
    return
  }

  window.ipfs.id((err, data) => {
    if (err) return showError(err)

    // Display and make QRs
    document.getElementById('qrs').classList.remove('dn')
    makeQR(`https://ipfs.io/ipns/${data.id}`, 'id')
    makeQR(data.publicKey, 'pub-key')
  })
})
