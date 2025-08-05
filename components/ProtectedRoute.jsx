import { useState } from "react";

function ProtectedRoute(children) {
  // Verificar que existe un usuario autentificado, si hay un usuario se muestra el componente
  // caso contrario redirecciona al login
  const [user, setUser] = useState(undefined);

  if (user === undefined) return <p>Cargando...</p>;
  return user ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
