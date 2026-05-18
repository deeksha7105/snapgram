import {Outlet, Navigate} from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false; // Replace with actual authentication logic
  return (
    isAuthenticated ? (
      <Navigate to="/login" />
    ) : (
        <>
          <section>
            <Outlet/>
          </section>
        </>
    )
  )
}

export default AuthLayout