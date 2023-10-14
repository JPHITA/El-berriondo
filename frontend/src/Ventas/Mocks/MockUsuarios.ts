export interface Usuarios{
    Email: string;
    Password: string;
    Privilege: boolean;
}

export const MockUsuarios: Usuarios[]= [
    {
        Email: "admin@gmail.com",
        Password: "admin",
        Privilege: true,
    },
    {
        Email: "User@gmail.com",
        Password: "user",
        Privilege: false,
    }
]