import MasterService from "./MasterService"

class CommonService {
    async sendEmail(data: any) {
        try {
            const response = await MasterService.post({ url: '/common/sendMail', data })
            return response
        } catch (error) {
            throw error
        }
    }
}

const CommonServiceObj = new CommonService()

const exportObj = {
    sendEmail: CommonServiceObj.sendEmail
}
export default exportObj