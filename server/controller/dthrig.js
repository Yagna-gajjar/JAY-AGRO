import mongoose from "mongoose";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import dthrig from "../model/dthrig.js";
import productparts from "../model/productpart.js";
import equiry from "../model/equiry.js";
import subscribe from "../model/subscribe.js";
import contact from "../model/contact.js";

dotenv.config({ path: `./.env` });

const myemail = process.env.emailid;
const mypassword = process.env.emailpassword;

export const Dthrig = async (req, res) => {
    try {
        const dthrigdata = await dthrig.find();

        if (!dthrigdata) {
            return res.status(404).json({ msg: "user data not found" });
        }
        res.status(200).json(dthrigdata);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
}

export const Dthdetails = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await dthrig.findById(id);

        if (!userExist) {
            return res.status(404).json({ msg: "user not found" });
        }
        res.status(200).json(userExist);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
}

export const allproductparts = async (req, res) => {
    try {
        const dthrigdata = await productparts.find();

        if (!dthrigdata) {
            return res.status(404).json({ msg: "user data not found" });
        }
        res.status(200).json(dthrigdata);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
}

export const oneproductpart = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await productparts.findById(id);

        if (!userExist) {
            return res.status(404).json({ msg: "user not found" });
        }
        res.status(200).json(userExist);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
}

export const equiryusers = async (req, res) => {

    try {
        const userData = new equiry({
            _id: new mongoose.Types.ObjectId(),
            nameofproduct: req.body.dthname,
            name: req.body.name,
            Email: req.body.Email,
            PurposeofRequirement: req.body.PurposeofRequirement,
            RequirementDetails: req.body.RequirementDetails,

        });
        if (!userData) {
            return res.status(404).json({ msg: "user data not found" });
        }
        const savedData = await userData.save();
        res.status(200).json({ msg: "enquiry added successfully" });

    }
    catch (error) {
        res.status(500).json({ error: error });
    }
};

export const subscribeusers = async (req, res) => {

    try {
        const userData = new subscribe({
            _id: new mongoose.Types.ObjectId(),
            Email: req.body.Email

        });
        if (!userData) {
            return res.status(404).json({ msg: "user data not found" });
        }
        const savedData = await userData.save();
        res.status(200).json({ msg: "subscribe added successfully" });

    }
    catch (error) {
        res.status(500).json({ error: error });
    }
};

export const contactusers = async (req, res) => {

    try {
        const userData = new contact({
            _id: new mongoose.Types.ObjectId(),
            username: req.body.username,
            Email: req.body.Email,
            number: req.body.number,
            subject: req.body.subject,
            message: req.body.message,

        });
        if (!userData) {
            return res.status(404).json({ msg: "user data not found" });
        }
        const savedData = await userData.save();
        res.status(200).json({ msg: "contact added successfully" });

    }
    catch (error) {
        res.status(500).json({ error: error });
    }
};

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: myemail,
        pass: mypassword,
    },
});

export const sendEmailforcontact = async (req, res) => {

    return new Promise((resolve, reject) => {

        const mail_configs = {
            from: myemail,
            to: req.body.Email,
            subject: req.body.subject,
            text: "username = " + req.body.username + " " + "number = " + req.body.number + " " + "message = " + req.body.message
        };
        transporter.sendMail(mail_configs, function (error, info) {
            if (error) {
                return reject({ message: 'an error has occured' });
            }
            return resolve({ message: 'Email sent succesfuly' });
        });
    })
}

export const sendEmailforenquiry = async (req, res) => {

    return new Promise((resolve, reject) => {

        const mail_configs = {
            from: myemail,
            to: req.body.Email,
            subject: "enquiry from user",
            text: "dthname = " + req.body.dthname + " , " + "username = " + req.body.name + " , " + "PurposeofRequirement = " + req.body.PurposeofRequirement + " , " + "RequirementDetails = " + req.body.RequirementDetails
        };
        transporter.sendMail(mail_configs, function (error, info) {
            if (error) {
                return reject({ message: 'an error has occured' });
            }
            return resolve({ message: 'Email sent succesfuly' });
        });
    })
}

export const sendEmailOfenquiry = async (req, res) => {
    try {
        sendEmailforenquiry(req).then((response) => res.send(response.message))
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
}


export const sendEmailOfcontact = async (req, res) => {
    try {
        sendEmailforcontact(req).then((response) => res.send(response.message))
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
} 
