import axios from "axios"

export const axiosInstance=axios.create({
    baseURL: "https://e-learning-platform-daiict.herokuapp.com/api/"
})