import { useRouteError } from "react-router-dom"

function Error() {
  const error = useRouteError();
  return (
    <div>
      <h1>OPP'S !!!</h1>
      <p>Page not found.</p>
      <h3>{error.status} : {error.statusText}</h3>
    </div>
  )
}

export default Error
