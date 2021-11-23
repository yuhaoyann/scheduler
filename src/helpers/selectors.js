export function getAppointmentsForDay(state, day) {
  if(state.days[0]) {
    const selectedDay = state.days.filter(Day => Day.name === day)[0];
    if(selectedDay) {
      let appointments = selectedDay.appointments.map((id) => {
        return state.appointments[id]
      })
      return appointments;
    }
  }
  return [];
}