import chalk from 'chalk';
import * as http from 'http'
import run from './src';

const PORT = 6666;
run();
http.createServer()
.listen(PORT, () => {
  console.log(chalk.green(`serve start at http://localhost:${PORT}`))
})