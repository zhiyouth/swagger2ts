import chalk from 'chalk';
import * as http from 'http'
import data from './data.json'
import { SwaggerPath } from './src/types/swagger';

const PORT = 6666;
const pathItem = data.paths
const a = pathItem as SwaggerPath

http.createServer()
.listen(PORT, () => {
  console.log(chalk.green(`serve start at http://localhost:${PORT}`))
})