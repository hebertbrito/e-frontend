import axios from 'axios'
import https from 'https'
const URL_LOCAL = "https://localhost:5001/api/user/create"
export async function CreateUser(body: any){
    try {
        const response = await axios.post(URL_LOCAL, body, {
            httpsAgent: new https.Agent({
                requestCert: false,
                rejectUnauthorized: false
            })
        })
    } catch (error) {
        Promise.reject("error")
    }
}