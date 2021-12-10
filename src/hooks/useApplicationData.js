import { useState, useEffect } from "react";
import axios from "axios";


export default function useApplicationData () {
  const [state, setState] = useState({
    day: "",
    days: [],
    appointments: {},
    interviewers: {},
  });
  
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState(prev => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }))
    })
  }, [])
  
  const setDay = day => setState({ ...state, day });
  
  function bookInterview(id, interview) {
    return axios.put(`/api/appointments/${id}`, { interview })
    .then(
      Promise.all([
        axios.get("/api/days"),
        axios.get("/api/appointments"),
        axios.get("/api/interviewers"),
      ]).then((all) => {
        setState(prev => ({
          ...prev,
          days: all[0].data.map((day) => {
            day.spots = 0;
            for (let appointment of day.appointments) {
              if (!all[1].data[appointment].interview) {
                day.spots ++;
              }
            }
            return day;
          }),
          appointments: all[1].data,
          interviewers: all[2].data,
        }))
      })
    )
  }
  
  function cancelInterview(id) {
    return axios.delete(`/api/appointments/${id}`)
    .then(
      Promise.all([
        axios.get("/api/days"),
        axios.get("/api/appointments"),
        axios.get("/api/interviewers"),
      ]).then((all) => {
        setState(prev => ({
          ...prev,
          days: all[0].data.map((day) => {
            day.spots = 0;
            for (let appointment of day.appointments) {
              if (!all[1].data[appointment].interview) {
                day.spots ++;
              }
            }
            return day;
          }),
          appointments: all[1].data,
          interviewers: all[2].data,
        }))
      })
    )
  }

  return { state, setDay, bookInterview, cancelInterview };
}