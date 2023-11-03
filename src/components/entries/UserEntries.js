import { useContext, useEffect, useState } from "react";
import { useHttpClient } from "../../hooks/http-hook";
import { AuthContext } from "../../context/auth-context";
import { REACT_APP_BACKEND_URL } from "../../constants/env";
import ErrorModal from "../UI/ErrorModal";
import LoadingSpinner from "../UI/LoadingSpinner";
import Timers from "./Timers";
import "./UserEntry.css";

const UserEntries = () => {
  const [loadedEntries, setLoadedEntries] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          `${REACT_APP_BACKEND_URL}/entries`,
          "GET",
          null,
          {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          }
        );

        setLoadedEntries(responseData.entries);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);

  let hasEntries = false;
  let latestEntryDate;
  if (loadedEntries && loadedEntries.length > 0) {
    hasEntries = true;
    latestEntryDate = loadedEntries[loadedEntries.length - 1].updatedAt;
  }
console.log(hasEntries)
  return (
    <>
      {hasEntries && (
        <div className="time-counter">
          <Timers callQueuedTime={latestEntryDate} />
        </div>
      )}

      {!hasEntries && (
        <div className="time-counter">
         <p>00:00:00:00</p> 
        </div>
      )}

      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedEntries && (
        <p>
          {loadedEntries.map((entry) => (
            <div>
              <p>{entry.type}</p>
              <p>{entry.amount}</p>
              <p>{entry.price}</p>
            </div>
          ))}
        </p>
      )}
    </>
  );
};

export default UserEntries;
