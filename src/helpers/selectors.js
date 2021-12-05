export function getAppointmentsForDay(state, day) {
  if(state.days[0]) {
    const selectedDay = state.days.filter(Day => Day.name === day)[0];
    if(selectedDay) {
      const appointments = selectedDay.appointments.map((id) => {
        return state.appointments[id]
      })
      return appointments;
    }
  }
  return [];
}

export function getInterviewersForDay(state, day) {
  if(state.days[0]) {
    const selectedDay = state.days.filter(Day => Day.name === day)[0];
    if(selectedDay) {
      const Interviewers = selectedDay.interviewers.map((id) => {
        return state.interviewers[id]
      })
      return Interviewers;
    }
  }
  return [];
}

export function getInterview(state, interview) {
  if (interview) {
    return {...interview, interviewer: state.interviewers[interview.interviewer]}
  }
  return null;
}