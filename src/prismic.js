import * as prismic from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'

const endpoint = prismic.getEndpoint('pretux')
const accessToken = 'MC5ZdTczX1JBQUFDRUFvRjk0.YD_vv73vv70v77-977-9Tg5rOu-_vQDvv73vv73vv73vv73vv73vv73vv73vv70W77-9EO-_vUnvv73vv73vv73vv73vv70M'

const client = prismic.createClient(endpoint, { accessToken })

export const init = async (pageId) => {
    const response = await client.getSingle(pageId)
    // console.log(response.data.body)
    return response.data.body
}
