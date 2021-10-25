import { Request, Response } from 'express';
import { DELETE, GET, POST, PUT, route } from 'awilix-express';
import { SubscriptionService } from '../services/subscription.service';
import { BaseController } from '../common/controllers/base.controller';

// decorador
@route('/subscriptions')
export class SubscriptionController extends BaseController{

    constructor(
        private readonly subscriptionService: SubscriptionService
    ){
        super();
    }

    @GET()
    public async all(req: Request, res:Response){

        try{

            res.send(  await this.subscriptionService.all()  );

        }catch( error ){
            this.handleException( error, res );
        }
    
    }

    // Ex: subcriptions/1
    @route('/:id')
    @GET()
    public async find(req: Request, res:Response){

        try{

            const {id} = req.params;
            
            const result =  await this.subscriptionService.find( parseInt( id ) );

            if( result ){
                res.send( result );
            }else {
                res.status( 404 );
                res.send();
            }
            
        }catch( error ){
            this.handleException( error, res );
        }
    }

    @POST()
    public async store(req: Request, res:Response){
        try{

            await this.subscriptionService.store({
                user_id: req.body.user_id,
                code: req.body.code,
                amount: req.body.amount,
                cron: req.body.cron
            } as SubscriptionCreateDto)
            res.send();

        }catch( error ){
            this.handleException( error, res );
        }
    }
    

    // Ex: subcriptions/1
    @route('/:id')
    @PUT()
    public async update(req: Request, res:Response){

        try{

            const {id} = req.params;
            
            await this.subscriptionService.update(
                parseInt( id ),
                {
                    user_id: req.body.user_id,
                    code: req.body.code,
                    amount: req.body.amount,
                    cron: req.body.cron
                } as SubscriptionUpdateDto)
                res.send();
        }catch( error ){
            this.handleException( error, res );
        }
    }


    // Ex: subcriptions/1
    @route('/:id')
    @DELETE()
    public async delete(req: Request, res:Response){

        try{
            const {id} = req.params;
            
            await this.subscriptionService.remove(
                parseInt( id ),
                )
                res.send();
        }catch( error ){
            this.handleException( error, res );
        }
    }

}