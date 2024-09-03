import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "5fea3185-ed34-4853-b752-1f27189b15dd"
    }
})

export const usersAPI = {
    getUsers(page, pageSize) {
        return instance.get(`users?page=${page}&count=${pageSize}`)
            .then(response => {return response.data})
    },
    addFollow(id) {
        return instance.post(`follow/${id}`)
        .then(response => {return response.data})
    },
    removeFollow(id) {
        return instance.delete(`follow/${id}`)
        .then(response => {return response.data})
    }
}

