# El berriondo ecommerce

#### Integrantes:
- Juan Nicolas Piedrahita Salas
- David Andres Cano Gonzalez
- Marcos David Carrillo Builes

## Instrucciones para correr el trabajo en modo desarrollo

### con docker
Se abre una consola en el directorio raiz del proyecto y se ejecuta el comando `docker compose up`, automaticamente todo se configura y se puede ingresar a la aplicacion en `localhost:5173`

### sin docker
Se abre una consola en el directorio `frontend` y se ejecuta los comandos

```bash
npm install
npm run dev
```

Se abre otra consola en el directorio `backend` y se ejecuta los comandos

```bash
python -m venv venv # opcional crear un entorno virtual
source venv/Scripts/activate # opcional activar el entorno virtual
pip install -r requirements.txt
flask run --host=0.0.0.0 --port=3000 --debug
```

**La base de datos corre en postgresql 16, es necesario correr el archivo `ddl.sql`, y para ver la aplicacion con datos ya listos, correr una unica vez el archivo `mocks.sql`, a continuacion la configuracion de la base de datos**

```
USER = "admin"
PASSWORD = "adminps"
PORT = "5432"
DATABASE = "ElBerriondo"
```

---
usuarios para entrar a la aplicacion

Email: "admin@admin.com"

Contraseña: "admin"

Email: "user@user.com"

Contraseña: "user"

--

**por defecto el front del proyecto corre en el puerto 5173**