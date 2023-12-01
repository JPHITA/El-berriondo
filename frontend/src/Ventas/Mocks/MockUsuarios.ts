export interface Usuarios{
    Email: string;
    Password: string;
    privilege: boolean;
}

export const MockUsuarios: Usuarios[]= [
    {
        Email: "admin@gmail.com",
        Password: "admin",
        privilege: true,
    },
    {
        Email: "User@gmail.com",
        Password: "user",
        privilege: false,
    }
]