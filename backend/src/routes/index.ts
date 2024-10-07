import healthHandler from '../controllers/health.controller';
import createUserHandler from '../controllers/user.controller';
import authHandler from '../controllers/auth.controller';
import authValidateHandler from '../controllers/validate.controller';
import logoutUserHandler from '../controllers/logout.handler';
import hotelsHandler from '../controllers/hotels.controller';
import validateResource from '../middleware/validateResource.middleware';
import verifyToken from '../middleware/verifyToken.middleware';
import userValidationSchema from '../schema/user.validation';
import authValidationSchema from '../schema/auth.validation';
import hotelValidationSchema from '../schema/hotel.validation';
// Refactor this line 
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB
    }
})

function routes(app: any) {
    app.get('/health', healthHandler);

    app.post('/api/users/register', validateResource(userValidationSchema), createUserHandler);
    app.post('/api/auth/login', validateResource(authValidationSchema), authHandler);
    app.get('/api/auth/validate-token', verifyToken, authValidateHandler);

    app.post('/api/auth/logout', logoutUserHandler);

    app.post('/api/hotels', verifyToken, validateResource(hotelValidationSchema), upload.array('imageFiles', 6), hotelsHandler);

}

export default routes;
