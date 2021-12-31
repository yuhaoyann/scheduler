import { useEffect, useReducer } from "react";
import axios from "axios";
import reducer, {
  SET_DAY,
  SET_APPLICATION_DATA,
  // eslint-disable-next-line no-unused-vars
  SET_INTERVIEW,
  UPDATE_SPOTS
} from "reducers/application";

export default function useApplicationData () {

  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });
  
  useEffect(() => {
    const webSocketURL = process.env.REACT_APP_WEBSOCKET_URL;
    const webSocket = new WebSocket(webSocketURL);
    // for testing use below
    // const webSocket = new WebSocket("ws://localhost:8001");
    webSocket.onmessage = function (event) {
      dispatch({
        ...JSON.parse(event.data)
      })
    }

    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      dispatch({
        type: SET_APPLICATION_DATA,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      })
    })
  }, [])
  
  const setDay = day => dispatch({
    type: SET_DAY,
    day
  });
  
  function bookInterview(id, interview, add = true) {
    return axios.put(`/api/appointments/${id}`, { interview })
    .then(() => {
      if (add) {        
        let days = state.days;
        days.map(day => {
          if (day.appointments.includes(id)) {
            day.spots --;
          }
          return day;
        })
        dispatch({
          type: UPDATE_SPOTS,
          days
        })
      }
    })
  }
  
  function cancelInterview(id) {
    return axios.delete(`/api/appointments/${id}`)
    .then(() => {
      let days = state.days;
      days.map(day => {
        if (day.appointments.includes(id)) {
          day.spots ++;
        }
        return day;
      })
      dispatch({
        type: UPDATE_SPOTS,
        days
      })
    })
  }

  return { state, setDay, bookInterview, cancelInterview };
}