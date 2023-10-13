export interface Venta {
    id: number;
    estado: string;
    usuario: string;
    ganancia: Number;
    fecha: Date;
}

export const MockVentas: Venta[] = [
    {
        "id": 1,
        "estado": "Completada",
        "usuario": "Ivan Duque",
        "ganancia": 2500,
        "fecha":  new Date(2022,4,10)
    },
    {
        "id": 2,
        "estado": "En proceso",
        "usuario": "Gustavo Petro",
        "ganancia": 10000,
        "fecha":  new Date(2023,6,19)
    },
    {
        "id": 3,
        "estado": "Cancelada",
        "usuario": "Rodolfo Hernandez",
        "ganancia": 5000,
        "fecha":  new Date(2022,7,12)
    },
    {
        "id": 4,
        "estado": "Completada",
        "usuario": "Alvaro Uribe",
        "ganancia": 7500,
        "fecha":  new Date(2021,2,4)
    },
    {
        "id": 5,
        "estado": "Cancelada",
        "usuario": "Alvaro Uribe",
        "ganancia": 50000,
        "fecha":  new Date(2020,1,25)
    }
]