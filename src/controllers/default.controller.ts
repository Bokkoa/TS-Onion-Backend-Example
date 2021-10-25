import { Request, Response } from 'express';
import { GET, route } from 'awilix-express';
import { TestService } from '../services/test.service';
import { AwilixResolutionError } from 'awilix';

// decorador
@route('/')
export class DefaultController {

    @GET()
    public index( req: Request, res: Response): void{
      res.send('Running...');
    }

}