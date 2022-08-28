import * as prismic from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'

const endpoint = prismic.getEndpoint('pretux')
const accessToken = 'MC5ZdTczX1JBQUFDRUFvRjk0.YD_vv73vv70v77-977-9Tg5rOu-_vQDvv73vv73vv73vv73vv73vv73vv73vv70W77-9EO-_vUnvv73vv73vv73vv73vv70M';

const routes = [
  { type: 'home', path: '/' },
  { type: 'page', path: '/quero-ajudar' },
  { type: 'page', path: '/servicos' },
  { type: 'page', path: '/sobre' },
];

const client = prismic.createClient(endpoint, { routes, accessToken });

export const getSingleType = async (id) => {
  const response = await client.getSingle(id)
  return response.data
};

export const getPage = async (uid) => {
  const response = await client.getByUID('page',uid)
  return response.data
};

export const getSlice = (slice, database) => database.find(element => element.slice_type == slice );