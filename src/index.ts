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
}
export default run