import { useContext, useEffect, useState } from "react";
import { useHttpClient } from "../../hooks/http-hook";
import { AuthContext } from "../../context/auth-context";
import { REACT_APP_BACKEND_URL } from "../../constants/env";
import ErrorModal from "../UI/ErrorModal";
import LoadingSpinner from "../UI/LoadingSpinner";
import Timers from "./Timers";
import "./UserEntry.css";
import { getTotalValuesFromEntries } from "../../util/helpers";
import EntryDetails from "./EntryDetails";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

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
  let totalValues = [];
  if (loadedEntries && loadedEntries.length > 0) {
    hasEntries = true;
    latestEntryDate = loadedEntries[loadedEntries.length - 1].updatedAt;
    totalValues = getTotalValuesFromEntries(loadedEntries);
  }

  return (
    <>
      <section className="over-view_section">
        <div className="overview-header">
          <h1>You everview</h1>
          <div className="animated-clock">
            <img width="200" src="/images/giphy.gif" alt="clock" />
          </div>
        </div>

        {hasEntries && (
          <div>
            <div className="time-counter">
              <Timers callQueuedTime={latestEntryDate} />
            </div>
            <div className="last-entry">
              <p>
                Last entry was {new Date(latestEntryDate).getDate()}.{" "}
                {monthNames[new Date(latestEntryDate).getMonth()]}{" "}
                {new Date(latestEntryDate).getFullYear()}
              </p>
            </div>
            <div>
              <EntryDetails values={totalValues} />
            </div>
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
        {!isLoading && loadedEntries && <p></p>}
      </section>
    </>
  );
};

export default UserEntries;
