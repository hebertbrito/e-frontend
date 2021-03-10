import axios from 'axios';
import https from 'https';
const url_local = "https://localhost:5001/api/plan/relationship/create"
export async function GetListUserPlan(body: any) {
    try {
        const response = await axios.post(url_local, body, {
            httpsAgent: new https.Agent({
                requestCert: false,
                rejectUnauthorized: false
            })
        })

        return response.data
    } catch (error) {
        console.log(error)
    }
}