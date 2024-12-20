import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '1a0990c0-daca-4617-b645-dd795b4fa42e'
    }
})

export const authAPI = {
    getAuth() {
        return instance.get('auth/me')
            .then(response => response.data)
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe})
        .then(response => response.data)
    },
    logout() {
        return instance.delete('auth/login')
        .then(response => response.data)
    }
}

export const usersAPI = {
    getUsers(page, pageSize) {
        return instance.get(`users?page=${page}&count=${pageSize}`)
            .then(response => response.data)
    },
    addFollow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    removeFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
            .then(response => response.data)
    },
    sendAvatar(image) {
        return instance.put(`profile/photo`, {image: image})
        .then(response => response.data)
    }
}

