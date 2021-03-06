import { Context } from '../Interface/Context';
import { DEBUG } from '../modules/logger';

export function ResCache(ctx: Context) {
  const { absolutePath, startTime, res } = ctx
  res.writeHead(304, 'Not Modified')
  res.end('Not Modified')
  DEBUG({
    type: 'RES_CACHE',
    msg: absolutePath! + ' +' + (Date.now() - startTime!) + 'ms'
  })
}