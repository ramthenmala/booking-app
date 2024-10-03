import healthHandler from '../controllers/health.controller';
import createUserHandler from '../controllers/user.controller';
import authHandler from '../controllers/auth.controller';
import authValidateHandler from '../controllers/validate.controller';
import validateResource from '../middleware/validateResource.middleware';
import verifyToken from '../middleware/verifyToken.middleware';
import userValidationSchema from '../schema/user.validation';
import authValidationSchema from '../schema/auth.validation';

function routes(app: any) {
    app.get('/health', healthHandler);

    app.post('/api/users/register', validateResource(userValidationSchema), createUserHandler);
    app.post('/api/auth/login', validateResource(authValidationSchema), authHandler);
    app.get('/api/auth/validate-token', verifyToken, authValidateHandler);

}

export default routes;
