import express from 'express';
import mongoose from 'mongoose';



mongoose.connect('mongodb+srv://luisgcostaguedes:Batatinha123@testlgcg.dlehg.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        const app = express();
        const port = 3002;

        app.listen(port, () => {
            console.log(`🚀 Server is running on http:localhost:${port}`);
        });
    })
    .catch(() => console.log('Erro ao se conectar ao mongodb'));