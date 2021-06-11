const { getIpfs, providers } = require('ipfs-provider')
const qrcode = require('qrcode-generator')

function makeQR (data, id) {
  // Build QR
  const qr = qrcode(0, 'L')
  qr.addData(data)
  qr.make()

  // Create Base64
  let tag = qr.createSvgTag()
  tag = tag.replace('black', '#0b3a53', -1)
  const base64 = window.btoa(tag)

  // Fill element
  const el = document.getElementById(id)
  el.innerHTML = `<img src="data:image/svg+xml;base64,${base64}"/>`
}

function showError (e) {
  console.error(e)
  const el = document.getElementById('error')
  el.classList.remove('dn')
  el.innerHTML = e.message
}

document.addEventListener('DOMContentLoaded', async () => {
  const { ipfs, provider } = await getIpfs({
    loadHttpClientModule: () => require('ipfs-http-client').create,
    providers: [
      providers.httpClient({
        apiAddress: '/ip4/127.0.0.1/tcp/5001'
      }),
      providers.httpClient()
    ]
  })

  if (!ipfs || !provider) {
    showError(new Error('Could not find an active IPFS instance.'))
    return
  }

  try {
    const { id, publicKey } = await ipfs.id()
    const ipnsLink = `https://gateway.ipfs.io/ipns/${id}`

    // Display and make QRs
    document.getElementById('qrs').classList.remove('dn')
    makeQR(ipnsLink, 'ipns-link')
    makeQR(publicKey, 'pub-key')

    // Display peer info
    document.getElementById('infos').classList.remove('dn')
    document.getElementById('id').innerHTML = id
    document.getElementById('ipns-link-raw').innerHTML = ipnsLink
  } catch (err) {
    showError(err)
  }
})
