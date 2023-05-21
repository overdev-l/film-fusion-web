import { useEffect } from "react"
import { analysisText } from "./apis"

export default function () {

    const main = async () => {
        const result = await analysisText("印第安人是北美洲原住民之一，生活在美洲大陆上数千年，拥有独特的文化和传统。他们以狩猎、捕鱼、采集和农业为生，建造了独特的房屋和社会组织。然而，随着欧洲殖民者的到来，印第安人遭受了极大的压迫和剥削，导致他们的文化和人口遭受了巨大的破坏。今天，印第安人的文化和传统仍然存在，并且他们正在为维护自己的权益和文化遗产而努力。")
        console.log(result)
    }
    useEffect(() => {
        main()
    })
    return <>123</>
}