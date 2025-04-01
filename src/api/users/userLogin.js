import axios from "../axios/axios"


const login = async (user) => {
    // try logging in
    try {
        const res = await axios.post("/users/login", user);
        return res
    } catch (error) {
        return error
    }

}

export { login }