import chalk from 'chalk';
import * as http from 'http'
import swaggerData from './data.json'

const PORT = 6666;

http.createServer()
.listen(PORT, () => {
  console.log(chalk.green(`serve start at http://localhost:${PORT}`))
})