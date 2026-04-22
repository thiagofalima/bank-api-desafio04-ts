const user = {
    user_id: "12345",
    name: "Thiago",
    email: "thiago@senai.com",
    password: "12345"
}

export class LoginController{
    login =  async () => {
        return user
    }
}