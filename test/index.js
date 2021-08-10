import { NFTStorage, File } from 'nft.storage'
import fs from 'fs'

async function main () {
    const client = new NFTStorage({ token: process.env.TOKEN })
    const files = [
        new File([fs.readFileSync('../images-mando/mando1.jpeg')], 'mando1.jpeg', { type: 'image/jpeg' }),
        new File([fs.readFileSync('../images-mando/mando2.jpeg')], 'mando2.jpeg', { type: 'image/jpeg' }),
        new File([fs.readFileSync('../images-mando/mando3.jpeg')], 'mando3.jpeg', { type: 'image/jpeg' }),
        new File([fs.readFileSync('../images-mando/mando4.jpeg')], 'mando4.jpeg', { type: 'image/jpeg' }),
        new File([fs.readFileSync('../images-mando/mando5.jpeg')], 'mando5.jpeg', { type: 'image/jpeg' })
    ]

    const cid = await client.storeDirectory(files)
    console.log(`ipfs://{$cid}`)
}

main()