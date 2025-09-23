# a6-jmn-full 12/09/2025-21/09/2025

# Rutas
/home → HomeComponent
users → UsersListComponent
/users/:id → UserViewComponent
/newuser → FormComponent
/edituser/:id → FormComponent
** → C404Component

# Componentes
c404
nav
footer

# Pages *La actividad pide todo publico
UserList (paginacion)
UserView
UserForm (crear y modificar)
userDelete (modal)

# Utilidades
logo
iconos

# Interfaces
IUser
IApiResponse
IError

# Servicios
users

# Servicio
UserService (user.service.ts)
Métodos para interactuar con la API de usuarios:
    getAll(pageNumber)
    getById(_id)
    insert(user)
    update(_id, user)
    delete(_id)


# Estilos
Uso de Bootstrap para layout y componentes.
Toasts para mensajes de éxito/error (ngx-sonner).