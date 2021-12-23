import React, { useEffect } from "react";
import "components/Appointment/styles.scss";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";
import useVisualMode from "hooks/useVisualMode";


  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const CONFIRM = "CONFIRM";
  const DELETING = "DELETING";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment (props) {
  
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  )

  useEffect(() => {
    props.interview && mode === EMPTY && transition(SHOW);
    props.interview === null && mode === SHOW && transition(EMPTY);
   }, [transition, mode, props.interview]);

  function save (name, interviewer) {
    if (name && interviewer) {
      const interview = {
        student: name,
        interviewer
      }
      
      transition(SAVING);
  
      props.bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(err => transition(ERROR_SAVE, true))
    }
  }

  function confirmDeleting () {
    transition(DELETING, true);
    
    props.cancelInterview(props.id)
    .then(() => transition(EMPTY))
    .catch(err => transition(ERROR_DELETE, true))
  }
  
  return (
    <article className="appointment" data-testid="appointment">
      <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && props.interview && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(CREATE)}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          interviewer={props.interview && props.interview.interviewer.id}
          student={props.interview && props.interview.student}
          onCancel={back}
          onSave={save}
        />
      )}
      {mode === SAVING && <Status message={SAVING} />}
      {mode === DELETING && <Status message={DELETING} />}
      {mode === CONFIRM && (
        <Confirm
          message={"Are you sure you would like to delete?"}
          onCancel={back}
          onConfirm={confirmDeleting}
        />)}
      {mode === ERROR_SAVE && 
        <Error 
          message="Create appointment failed, error connecting to server"
          onClose={back}
        />
      }
      {mode === ERROR_DELETE && 
        <Error 
          message="Delete appointment failed, error connecting to server"
          onClose={back}
        />
      }
    </article>
  )
}