import { Outlet } from "react-router-dom";
import ErrorNotification from "./components/ErrorNotification";
import { useContext, useEffect } from "react";
import { ErrorContext } from "./context/errors";

export default function () {
  const { error, setError } = useContext(ErrorContext);

  useEffect(() => {
    const timeout = setTimeout(
      () => setError((error) => ({ message: null, show: false })),
      3000
    );

    return () => clearTimeout(timeout);
  }, [error]);

  return (
    <main>
      <ErrorNotification message={error.message} show={error.show} />
      <Outlet />
    </main>
  );
}
