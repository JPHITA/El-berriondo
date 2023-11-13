-- Postgresql

-- tabla usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    fecha_registro TIMESTAMP NOT NULL
);

-- tabla productos
CREATE TABLE IF NOT EXISTS productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    precio DECIMAL NOT NULL,
    urlimg TEXT NOT NULL,
    stock INTEGER NOT NULL,
    descripcion_corta VARCHAR(50) NOT NULL,
    descripcion_larga TEXT NOT NULL,
    fecha_registro TIMESTAMP NOT NULL
);

-- tabla categorias
CREATE TABLE IF NOT EXISTS categorias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    fecha_registro TIMESTAMP NOT NULL
);

-- tabla catagorias_productos
CREATE TABLE IF NOT EXISTS categorias_productos (
    id SERIAL PRIMARY KEY,
    id_categoria INTEGER NOT NULL REFERENCES categorias(id),
    id_producto INTEGER NOT NULL REFERENCES productos(id)
);

-- tabla ventas
CREATE TABLE IF NOT EXISTS ventas (
    id SERIAL PRIMARY KEY,
    id_usuario INTEGER NOT NULL REFERENCES usuarios(id),
    fecha_registro TIMESTAMP NOT NULL
);

-- tabla ventas_productos
CREATE TABLE IF NOT EXISTS ventas_productos (
    id SERIAL PRIMARY KEY,
    id_venta INTEGER NOT NULL REFERENCES ventas(id),
    id_producto INTEGER NOT NULL REFERENCES productos(id),
    cantidad INTEGER NOT NULL,
    precio DECIMAL NOT NULL
);
