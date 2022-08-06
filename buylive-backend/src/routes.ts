import express, {Router} from "express";
import {AuthenticatedUser, Login, Logout, Register, UpdateInfo, UpdatePassword} from "./controller/auth.controller";
import {getAllPais} from './controller/pais.controller'
import { getProvinciaById } from "./controller/provincia.controller";
import {AuthMiddleware} from "./middleware/auth.middleware";

import {PermissionMiddleware} from "./middleware/permission.middleware";

export const routes = (router: Router) => {
    router.post('/api/register', Register);
    router.post('/api/login', Login);
    router.get('/api/user', AuthMiddleware, AuthenticatedUser);
    router.post('/api/logout', AuthMiddleware, Logout);
    router.put('/api/users/info', AuthMiddleware, UpdateInfo);
    router.put('/api/users/password', AuthMiddleware, UpdatePassword);
    router.get('/api/pais',getAllPais)
    router.get('/api/provincia/:pais',getProvinciaById)

}
