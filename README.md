# IPFS ID and Public Key example

> Simple demo app that connects to API port of IPFS node, reads its PeerID and displays  it as QR code.
> 
> **Note:**  ⚠️ this is just a PoC, not meant for production use. Due to the way browser security model works, this example requires CORS safelisting via `API.HTTPHeaders.Access-Control-Allow-Origin`

> ![2021-06-21--17-57-49](https://user-images.githubusercontent.com/157609/122792237-45b26000-d2ba-11eb-8681-55485692fd72.png)


Demo:  https://bafybeib77af5a2ymrhl2etf4hq2x32o7qs3shkaatznyjxrhnipksjkh4i.ipfs.dweb.link (needs to be appended to `API.HTTPHeaders.Access-Control-Allow-Origin`)

## Install

1. This requires the user to have an [IPFS node running](https://ipfs.io/#install) with the app Origin added to `API.HTTPHeaders.Access-Control-Allow-Origin`
2. Install dependencies `npm install`
3. Build the app `npm run build`
4. Start the app `npm start`
