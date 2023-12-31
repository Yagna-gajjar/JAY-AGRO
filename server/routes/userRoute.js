import express from "express";
import { Dthrig, Dthdetails, allproductparts, oneproductpart, equiryusers, subscribeusers, contactusers, sendEmailOfcontact, sendEmailOfenquiry } from "../controller/dthrig.js";

const route = express.Router();

route.get("/dthrig", Dthrig);
route.get("/dthdetails/:id", Dthdetails);
route.get("/productparts", allproductparts);
route.get("/productparts/:id", oneproductpart);
route.post("/equiry", equiryusers);
route.post("/subscribe", subscribeusers);
route.post("/contact", contactusers);
route.post("/sendEmailOfcontact", sendEmailOfcontact);
route.post("/sendEmailOfEnquiry", sendEmailOfenquiry);

export default route;