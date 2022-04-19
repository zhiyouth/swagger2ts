import type { Swagger } from './types/swagger'
import data from './data/data.json'
const run = () => {
  const swaggerData = data as Swagger
  const {    
    basePath,
    swagger,
    host,
    info,
    tags,
    paths,
    definitions
  } = swaggerData;

  const curRequest = paths['/base/queryFormHeader']
  curRequest.post
}
export default run