> [!IMPORTANT]
> **This demo is no longer maintained and the repository is archived.**
>
> It was a proof of concept and stayed one. It is pinned to `ipfs-http-client`
> 50, which is deprecated in favour of [Helia](https://github.com/ipfs/helia),
> so treat the code as a reference rather than a starting point.
>
> The repository can be unarchived, but only for a named maintainer who commits
> to keeping it up. If that is you, reach out to the
> [IPFS Foundation](https://ipfsfoundation.org/about/). Forking is fine too.

# IPFS ID and Public Key example

> Simple demo app that connects to API port of IPFS node, reads its PeerID and displays  it as QR code.
> 
> **Note:**  ⚠️ this is just a PoC, not meant for production use. Due to the way browser security model works, this example requires CORS safelisting via `API.HTTPHeaders.Access-Control-Allow-Origin`

> ![2021-06-21--17-57-49](https://user-images.githubusercontent.com/157609/122792237-45b26000-d2ba-11eb-8681-55485692fd72.png)


Demo:  https://bafybeib77af5a2ymrhl2etf4hq2x32o7qs3shkaatznyjxrhnipksjkh4i.ipfs.dweb.link (needs to be appended to `API.HTTPHeaders.Access-Control-Allow-Origin`)

## Install

1. This requires the user to have an [IPFS node running](https://docs.ipfs.tech/install/) with the app Origin added to `API.HTTPHeaders.Access-Control-Allow-Origin`
2. Install dependencies `npm install`
3. Build the app `npm run build`
4. Start the app `npm start`
