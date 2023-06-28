import axios from "axios";

export const getProfileImage = () => {
    return new Promise(async (resolve, reject) => {
        let access_token = localStorage.getItem('vishalisted');

        await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
                Accept: 'application/json'
            }
        })
        .then((response) => {
            resolve(response.data.picture);
        })
        .catch((error) => {
            reject(error);
        });
    });
}