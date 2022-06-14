import { APIURL } from "../config"

class Products {

    async addProduct (body) {
        try {
            const request = await fetch(APIURL+'/products/createProduct', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {"Content-type": "application/json;charset=UTF-8"}
            })
            return await request.json()
        } catch (error) {
            return error.json()
        }
    }

    async getAllProducts () {
        try {
            const request = await fetch(APIURL+'/products/getAllProducts', {
                method: 'GET',
                headers: {"Content-type": "application/json;charset=UTF-8"}
            })
            return await request.json()
        } catch (error) {
            return error.json()
        }
    }

    async getProductsByCategory (id) {
        try {
            const request = await fetch(APIURL+'/products/getProductsByCategory/'+id, {
                method: 'GET',
                headers: {"Content-type": "application/json;charset=UTF-8"}
            })
            return await request.json()
        } catch (error) {
            return error.json()
        }
    }

    async getProductById (id) {
        try {
            const request = await fetch(APIURL+'/products/getProductById/'+id, {
                method: 'GET',
                headers: {"Content-type": "application/json;charset=UTF-8"}
            })
            return await request.json()
        } catch (error) {
            return error.json()
        }
    }

    async deleteProduct (id) {
        try {
            const request = await fetch(APIURL+'/products/deleteProduct/'+id, {
                method: 'DELETE',
                headers: {"Content-type": "application/json;charset=UTF-8"}
            })
            return await request.json()
        } catch (error) {
            return error.json()
        }
    }

}

export default new Products()