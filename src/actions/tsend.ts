import axios from "axios";

interface IData {
    name?: string,
    email?: string,
    text?: string
}

export const sendMessage = (data: IData) => {
    const {name, email, text} = data;
    return axios.get(`https://api.telegram.org/bot1589442093:AAG1iR7K_MlGRJOn7-nI_V5zczDDUBkmDgs/sendMessage?chat_id=893064608&text=name: ${name}, email: ${email}, description: ${text}`)
        .then((resp: any) => resp)
        .catch((err: any) => console.log(err))
}