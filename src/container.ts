import express = require('express');
import { asClass, createContainer } from "awilix";
import { scopePerRequest } from 'awilix-express';
import { TestService } from './services/test.service';
import { SubscriptionMySQLRepository } from './services/repositories/impl/mysql/subscription.repository';
import { SubscriptionService } from './services/subscription.service';
import { MovementMySQLRepository } from './services/repositories/impl/mysql/movement.repository';
import { MovementService } from './services/movement.service';

export default(app: express.Application) => {

    const container = createContainer({
        injectionMode: 'CLASSIC'
    });

    container.register({

        // repositories
        subscriptionRepository: asClass( SubscriptionMySQLRepository ).scoped(),
        movementRepository: asClass( MovementMySQLRepository).scoped(),
        // services
        movementService: asClass( MovementService).scoped(),
        subscriptionService: asClass(SubscriptionService).scoped(),
        testService: asClass( TestService ).scoped()
    });

    app.use( scopePerRequest(container) );

};
