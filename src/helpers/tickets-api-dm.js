import { APIURL } from "../config"

class Favorites {

    async getTicketForUser (user) {
        try {
            const request = await fetch(APIURL+'/tickets/getTicketForUser/'+user, {
                method: 'GET',
                headers: {"Content-type": "application/json;charset=UTF-8"}
            })
            return await request.json()
        } catch (error) {
            return error.json()
        }
    }

    async changeTicketStatus (ticket, body) {
        try {
            const request = await fetch(APIURL+'/tickets/changeTicketStatus/'+ticket, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {"Content-type": "application/json;charset=UTF-8"}
            })
            return await request.json()
        } catch (error) {
            return error.json()
        }
    }

    async getAllActiveTickets () {
        try {
            const request = await fetch(APIURL+'/tickets/getAllActiveTickets', {
                method: 'GET',
                headers: {"Content-type": "application/json;charset=UTF-8"}
            })
            return await request.json()
        } catch (error) {
            return error.json()
        }
    }

    async getAllTicketsHistory () {
        try {
            const request = await fetch(APIURL+'/tickets/getAllTicketsHistory', {
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