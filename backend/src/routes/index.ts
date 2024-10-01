import healthController from '../controllers/health.controller';
import createUserController from '../controllers/user.controller';
import userValidationSchema from '../schema/user.validation';
import validateResource from '../middleware/middleware';
import authValidationSchema from '../schema/auth.validation';
import authController from '../controllers/auth.controller';

function routes(app: any) {
    app.get('/health', healthController);
    app.post('/api/users/register', validateResource(userValidationSchema), createUserController);
    app.post('/api/auth/login', validateResource(authValidationSchema), authController);
}

export default routes;
