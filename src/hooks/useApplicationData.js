import { useEffect, useReducer } from "react";
import axios from "axios";

const SET_DAY = "SET_DAY";
const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const SET_INTERVIEW = "SET_INTERVIEW";
const UPDATE_SPOTS = "UPDATE_SPOTS";

function reducer(state, action) {
  switch (action.type) {
    case SET_DAY:
      return {
        ...state,
        day: action.day 
      }
    case SET_APPLICATION_DATA:
      return {
        ...state,
        days: action.days,
        appointments: action.appointments,
        interviewers: action.interviewers
      }
    case SET_INTERVIEW: {
      return {
        ...state,
        appointments: {
          ...state.appointments,
          [action.id]: {
            ...state.appointments[action.id],
            interview: action.interview,
          }
        }
      }
    }
    case UPDATE_SPOTS: {
      return {
        ...state,
        days: action.days,
      }
    }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export default function useApplicationData () {

  const [state, dispatch] = useReducer(reducer, {
    day: "",
    days: [],
    appointments: {},
    interviewers: {},
  });
  
  useEffect(() => {
    const webSocket = new WebSocket("ws://localhost:8001");
    webSocket.onmessage = function (event) {
      console.log(event.data);
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
  
  function bookInterview(id, interview) {
    return axios.put(`/api/appointments/${id}`, { interview })
    .then(
      Promise.all([
        axios.get("/api/days"),
      ]).then((all) => {
        dispatch({
          type: UPDATE_SPOTS,
          days: all[0].data,
        });
        dispatch({
          type: SET_INTERVIEW,
          id,
          interview,
        });
      })
    )
  }
  
  function cancelInterview(id) {
    return axios.delete(`/api/appointments/${id}`)
    .then(
      Promise.all([
        axios.get("/api/days"),
      ]).then((all) => {
        dispatch({
          type: UPDATE_SPOTS,
          days: all[0].data,
        });
        dispatch({
          type: SET_INTERVIEW,
          id,
          interview: null,
        });
      })
    )
  }

  return { state, setDay, bookInterview, cancelInterview };
}