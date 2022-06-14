import { APIURL } from "../config"

class Users {

    async registerUser (body) {
        try {
            const request = await fetch(APIURL+'/users/createUser', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {"Content-type": "application/json;charset=UTF-8"}
            })
            return await request.json()
        } catch (error) {
            return error.json()
        }
    }

    async getAllUsers () {
        try {
            const request = await fetch(APIURL+'/users/getAllUsers', {
                method: 'GET',
                headers: {"Content-type": "application/json;charset=UTF-8"}
            })
            return await request.json()
        } catch (error) {
            return error.json()
        }
    }

    async deleteUser (id) {
        try {
            const request = await fetch(APIURL+'/users/deleteUser/'+id, {
                method: 'DELETE',
                headers: {"Content-type": "application/json;charset=UTF-8"}
            })
            return await request.json()
        } catch (error) {
            return error.json()
        }
    }

}

export default new Users()