import { APIURL } from "../config"

class Favorites {

    async addFavoriteToUser (user, body) {
        try {
            const request = await fetch(APIURL+'/favorites/addFavoriteToUser/'+user, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {"Content-type": "application/json;charset=UTF-8"}
            })
            return await request.json()
        } catch (error) {
            return error.json()
        }
    }

    async getFavoritesByUser (user) {
        try {
            const request = await fetch(APIURL+'/favorites/getFavoritesByUser/'+user, {
                method: 'GET',
                headers: {"Content-type": "application/json;charset=UTF-8"}
            })
            return await request.json()
        } catch (error) {
            return error.json()
        }
    }

    async deleteFavoriteFromUser (user, body) {
        try {
            const request = await fetch(APIURL+'/favorites/removeFavoriteFromUser/'+user, {
                method: 'DELETE',
                body: JSON.stringify(body),
                headers: {"Content-type": "application/json;charset=UTF-8"}
            })
            return await request.json()
        } catch (error) {
            return error.json()
        }
    }

}

export default new Favorites()