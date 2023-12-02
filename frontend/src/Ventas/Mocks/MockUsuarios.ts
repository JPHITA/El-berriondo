export interface Usuarios{
    Email: string;
    Password: string;
    privilege: boolean;
}

export const MockUsuarios: Usuarios[]= [
    {
        Email: "admin@admin.com",
        Password: "admin",
        privilege: true,
    },
    {
        Email: "user@user.com",
        Password: "user",
        privilege: false,
    }
]