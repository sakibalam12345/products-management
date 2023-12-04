import axios from "axios";

const axiouspublic = axios.create({
    baseURL : 'https://assignment12-psi.vercel.app'
})
const Useaxiouspublic = () => {
    return axiouspublic;
};

export default Useaxiouspublic;