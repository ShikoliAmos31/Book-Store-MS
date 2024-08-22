import express from "express";
import bcrypt from 'bcrypt'
import { Admin } from "./models/Admin"
import './db.js'

async function adminAccount() {
try {
    const adminCount = await Admin.countDocuments()
    if(adminCount === 0){
        const hashPassword = await bcrypt.hash('adminpassword',10)
        const newAdmin = new Admin({
            username: 'admin',
            password: hashPassword
        })
        await newAdmin.save()
        console.log('account created')
    } else {
        console.log('account already existed')
    }
} catch(err){
    console.log('error')
}
}

adminAccount()