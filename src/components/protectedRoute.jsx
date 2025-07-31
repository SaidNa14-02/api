import { Children, useState } from "react"
import { Navigate } from "react-router"
function ProtectedRoute(children){
    const [user, setUser] = useState(undefined)

    if(user === undefined) return <p>Cargando...</p>
    return user ? children : <Navigate to="/login"></Navigate>
}

export default ProtectedRoute