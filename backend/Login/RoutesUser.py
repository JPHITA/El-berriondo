
class handlers:

    def handleRegister(self,Nombre, Documento, Direccion, Email, Password, ConfirmPassword, Telefono):

        if db.query(SQL1, Nombre):
            return 1
        elif db.query(SQL2, Documento):
            return 2
        elif db.query(SQL3, Email):
            return 3
        if Password != ConfirmPassword:
            return 4
        else:
            self.setUsuario(Nombre, Documento, Direccion, Email, Password, Telefono)
            return 0


    def handleLogin(self):