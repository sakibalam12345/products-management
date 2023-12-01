import axios from "axios";

const axiouspublic = axios.create({
    baseURL : 'http://localhost:5000'
})
const Useaxiouspublic = () => {
    return axiouspublic;
};

export default Useaxiouspublic;