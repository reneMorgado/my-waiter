import { APIURL } from "../config"

class Categories {

    async addCategory (body) {
        try {
            const request = await fetch(APIURL+'/categories/createCategory', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {"Content-type": "application/json;charset=UTF-8"}
            })
            return await request.json()
        } catch (error) {
            return error.json()
        }
    }

    async getAllCategories () {
        try {
            const request = await fetch(APIURL+'/categories/getAllCategories', {
                method: 'GET',
                headers: {"Content-type": "application/json;charset=UTF-8"}
            })
            return await request.json()
        } catch (error) {
            return error.json()
        }
    }

    async deleteCategory (id) {
        try {
            const request = await fetch(APIURL+'/categories/deleteCategory/'+id, {
                method: 'DELETE',
                headers: {"Content-type": "application/json;charset=UTF-8"}
            })
            return await request.json()
        } catch (error) {
            return error.json()
        }
    }

}

export default new Categories()