/*import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadEventsAsync } from "./users.thunks";

const EventsPage = () => {
  const dispatch = useDispatch();

  // Make sure default fallback object is safe
  const { events = [], isLoading, errorMessage } = useSelector(
    (state) => state.events || {}
  );

  useEffect(() => {
    dispatch(loadEventsAsync());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {errorMessage && <p>Error: {errorMessage}</p>}
      {events?.length === 0 && !isLoading && <p>No events found.</p>}

      {events?.map((event, i) => (
        <section key={i}>
          <h3>{event.ptitle}</h3>
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>File</th>
              </tr>
            </thead>
            <tbody>
              {event.a?.map((item, j) => (
                <tr key={j}>
                  <td>{item.aname}</td>
                  <td>{item.aname}</td>
                  <td>
                    {item.avalue ? (
                      <a
                        href={item.avalue}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                </tr>
              )) || (
                <tr>
                  <td colSpan="3">No details found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      ))}
    </div>
  );
};

export default EventsPage; */
