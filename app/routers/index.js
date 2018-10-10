import express from 'express';
import userRoutes from './user';
import authRoutes from './auth';

const routers = express.Router();

routers.use('/users', userRoutes);
routers.use('/auth', authRoutes);

module.exports = routers;
