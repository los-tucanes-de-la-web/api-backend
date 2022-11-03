import nodemailer from 'nodemailer'
const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure: true,
    auth:{
        user:'deliasofia2310@gmail.com',
        pass:'unbosmatsgubfflp'
    }
})

export  {
    transporter
}