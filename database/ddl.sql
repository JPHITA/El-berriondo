-- Postgresql

-- tabla usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(50),
    fecha_registro TIMESTAMP
);

-- tabla productos
CREATE TABLE IF NOT EXISTS productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    precio DECIMAL,
    urlimg TEXT,
    stock INTEGER,
    descripcion_corta VARCHAR(50),
    descripcion_larga TEXT,
    fecha_registro TIMESTAMP,
    activo BOOLEAN DEFAULT true
);

-- tabla categorias
CREATE TABLE IF NOT EXISTS categorias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    fecha_registro TIMESTAMP
);

-- tabla catagorias_productos
CREATE TABLE IF NOT EXISTS categorias_productos (
    id SERIAL PRIMARY KEY,
    id_categoria INTEGER REFERENCES categorias(id),
    id_producto INTEGER REFERENCES productos(id)
);

-- tabla ventas
CREATE TABLE IF NOT EXISTS ventas (
    id SERIAL PRIMARY KEY,
    id_usuario INTEGER REFERENCES usuarios(id),
    estado VARCHAR(50),
    fecha_registro TIMESTAMP
);

-- tabla ventas_productos
CREATE TABLE IF NOT EXISTS ventas_productos (
    id SERIAL PRIMARY KEY,
    id_venta INTEGER REFERENCES ventas(id),
    id_producto INTEGER REFERENCES productos(id),
    cantidad INTEGER,
    precio DECIMAL
);
