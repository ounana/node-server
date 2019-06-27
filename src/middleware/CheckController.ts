import { ServerResponse } from 'http';
import CONTROLLER from '../controller';
import { Controller } from '../Interface/Controller';
import { Req } from '../Interface/Req';
import { Middleware } from '../Interface/Middleware';

export const CheckController: Middleware = function (req: Req, res: ServerResponse, next: Function): void {
  const { method, __relativePath } = req

  const controller: Controller | undefined = CONTROLLER.find(c => c.PATH === __relativePath)
  if (!controller || !method || !controller[method]) return next()
  controller[method](req, res)
}