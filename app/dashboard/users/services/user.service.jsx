const user_service = {
    login: async (form) => {
        return await fetch('http://127.0.0.1:8000/api/user/login', {
            method: 'POST',
            body: form,
        }).then((data) => data.json())
    },
    userByPage: async (page) => {
        return await fetch(`http://127.0.0.1:8000/api/user?page=${page}`, {
            method: "GET"
        }).then(data => data.json())
    }
}

export default user_service;