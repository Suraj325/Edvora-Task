import axios from "axios";
import React, { useState, createContext, useContext, useEffect } from "react";

const ApiContext = createContext();

export const useApi = () => useContext(ApiContext);

function ApiProvider({ children }) {
  const [user, setUser] = useState({});
  const [ride, setRide] = useState([]);
  const [filters, setFilters] = useState({ state: "", city: "" });
  const [status, setStatus] = useState("");

  const url = "https://assessment.api.vweb.app/rides";

  const headers = {
    "Content-Type": "application/json",
  };

  useEffect(() => {
    const getData = async () => {
      const responseUser = await axios.get(
        "https://assessment.api.vweb.app/user"
      );
      const responseRide = await axios.get(url, { headers });
      setUser(responseUser.data);
      setRide(responseRide.data);
    };
    getData().catch(console.error);
  }, []);

  function upcomingRides() {
    const date = new Date();
    const now = date.getTime();

    return ride.filter((obj) => {
      const filterState = filters.state
        ? obj.state === filters.state
        : !filters.state;
      const filterCity = filters.city
        ? obj.city === filters.city
        : !filters.city;
      const dt = new Date(obj.date);
      let d = new Date(
        Date.UTC(
          dt.getFullYear(),
          dt.getMonth(),
          dt.getDate(),
          dt.getHours(),
          dt.getMinutes(),
          dt.getSeconds(),
          dt.getMilliseconds()
        )
      );
      return d.getTime() >= now && filterState && filterCity;
    });
  }

  function pastRides() {
    const date = new Date();
    const now = date.getTime();

    return ride.filter((obj) => {
      const filterState = filters.state
        ? obj.state === filters.state
        : !filters.state;
      const filterCity = filters.city
        ? obj.city === filters.city
        : !filters.city;
      const dt = new Date(obj.date);
      let d = new Date(
        Date.UTC(
          dt.getFullYear(),
          dt.getMonth(),
          dt.getDate(),
          dt.getHours(),
          dt.getMinutes(),
          dt.getSeconds(),
          dt.getMilliseconds()
        )
      );
      return d.getTime() < now && filterState && filterCity;
    });
  }

  function allRides() {
    return ride.filter((obj) => {
      const filterState = filters.state
        ? obj.state === filters.state
        : !filters.state;
      const filterCity = filters.city
        ? obj.city === filters.city
        : !filters.city;

      return filterState && filterCity;
    });
  }

  const getRides = () => {
    switch (status) {
      case "upcoming":
        return upcomingRides();

      case "past":
        return pastRides();

      default:
        return allRides();
    }
  };

  const handleStatus = (state) => {
    setStatus(state);
  };
  const handleFilters = (obj) => {
    setFilters(obj);
  };

  const value = {
    handleStatus,
    handleFilters,
    upcomingRides,
    pastRides,
    getRides,
    filters,
    status,
    ride,
    user,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}

export default ApiProvider;
