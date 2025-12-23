import {
  ADD_STUDENT,
  DELETE_STUDENT,
  SET_EDIT_STUDENT,
  UPDATE_STUDENT,
  StudentActionTypes,
} from "./actions";
import { Student } from "../types/Student";
import { AnyAction } from "redux";

interface StudentState {
  students: Student[];
  idCounter: string;
  selectedStudent: Student | null;
}

const generateNextId = (): string => {
  return uuid();
};

const uuid = () => {
  return 'xxyxxxyxxxxx4xxxbxxxxxyxxyxxyxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

const initialState: StudentState = {
  students: [],
  idCounter: uuid(),
  selectedStudent: null,
};

const studentReducer = (
  state: StudentState = initialState,
  action: AnyAction
): StudentState => {
  switch (action.type) {
    case ADD_STUDENT:
      console.log("Present ID:", state.idCounter);
      return {
        ...state,
        students: [
          ...state.students,
          { ...action.payload, id: state.idCounter },
        ],
        idCounter: generateNextId(),
      };

    case SET_EDIT_STUDENT:
      return {
        ...state,
        selectedStudent: action.payload,
      };

    case UPDATE_STUDENT:
      return {
        ...state,
        students: state.students.map((s) =>
          s.id === action.payload.id ? action.payload : s
        ),
        selectedStudent: null, 
      };

    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter((s) => s.id !== action.payload),
      };

    default:
      return state;
  }
};

export default studentReducer;
