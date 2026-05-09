import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [notifications, setNotifications] = useState([]);

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzQ4MWE0MmEzQGdlY2d1ZGxhdmFsbGVydW1pYy5pbiIsImV4cCI6MTc3ODMwODY5NSwiaWF0IjoxNzc4MzA3Nzk1LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMmI5OTkyMjAtMWEwMi00OTZhLWI2NzUtZTNmNDc3NmQxMjc1IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiZ2VldGhhc3JpIiwic3ViIjoiNTUwMGNkMTMtZTViZi00MWFmLWJhYmEtOGJhOTliMmMzZjdiIn0sImVtYWlsIjoiMjM0ODFhNDJhM0BnZWNndWRsYXZhbGxlcnVtaWMuaW4iLCJuYW1lIjoiZ2VldGhhc3JpIiwicm9sbE5vIjoiMjM0ODFhNDJhMyIsImFjY2Vzc0NvZGUiOiJlSmRDdUMiLCJjbGllbnRJRCI6IjU1MDBjZDEzLWU1YmYtNDFhZi1iYWJhLThiYTk5YjJjM2Y3YiIsImNsaWVudFNlY3JldCI6InphdFN5enBSVVNrUk15aHEifQ._aPfbpBZkSalrreI7y0OmaIE1cbZQBfFiD_9HwrP87c";

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await axios.get(
        "http://4.224.186.213/evaluation-service/notifications",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      let data = response.data.notifications;

      const priorityMap = {
        Placement: 3,
        Result: 2,
        Event: 1,
      };

      data.sort((a, b) => {
        const priorityDiff =
          priorityMap[b.Type] - priorityMap[a.Type];

        if (priorityDiff !== 0) {
          return priorityDiff;
        }

        return (
          new Date(b.Timestamp) -
          new Date(a.Timestamp)
        );
      });

      setNotifications(data.slice(0, 10));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Top 10 Notifications</h1>

      {notifications.map((item) => (
        <div
          key={item.ID}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{item.Type}</h3>
          <p>{item.Message}</p>
          <small>{item.Timestamp}</small>
        </div>
      ))}
    </div>
  );
}

export default App;