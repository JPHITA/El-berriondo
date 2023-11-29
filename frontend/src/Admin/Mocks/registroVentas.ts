// ELIMINAR ARCHIVO
export interface Venta {
    id: number;
    id_usuario: number;
    estado: string;
    fecha_registro: Date;
}

export const MockVentas: Venta[] = [
    {
        "id": 1,
        "id_usuario": 2,
        "estado": "Completada",
        "fecha_registro":  new Date(2022,4,10)
    },
    {
        "id": 2,
        "id_usuario": 2,
        "estado": "En proceso",
        "fecha_registro":  new Date(2023,6,19)
    },
    {
        "id": 3,
        "id_usuario": 2,
        "estado": "Cancelada",
        "fecha_registro":  new Date(2022,7,12)
    },
    {
        "id": 4,
        "id_usuario": 2,
        "estado": "Completada",
        "fecha_registro":  new Date(2021,2,4)
    },
    {
        "id": 5,
        "id_usuario": 2,
        "estado": "Cancelada",
        "fecha_registro":  new Date(2020,1,25)
    }
]