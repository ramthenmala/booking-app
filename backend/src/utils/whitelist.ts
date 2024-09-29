const whitelistedUrls = ['http://localhost:5173'];

export const corsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allowed?: boolean) => void) => {
        if (!origin || whitelistedUrls.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    // origin: 'http://localhost:5173',
    credentials: true,
};