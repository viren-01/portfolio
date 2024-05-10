import axios from 'axios';
import { BACKEND_URL } from '../appconfig';

class MasterService {
    get(params: any) {
        try {
            let { url } = params
            let path = `${BACKEND_URL}${url}`
            return axios.get(path)
        } catch (error) {
            throw error
        }
    }

    post(params: any) {
        try {
            let { url, data } = params
            let path = `${BACKEND_URL}${url}`
            return axios.post(path, data)
        } catch (error) {
            throw error
        }
    }
}

const MasterServiceObj = new MasterService()

const exportObj = {
    get: MasterServiceObj.get,
    post: MasterServiceObj.post
}
export default exportObj