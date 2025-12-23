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

const generateNextId = (currentId: string): string => {
  const match = currentId.match(/STUD(\d+)/);
  if (!match) return "STUD001";
  const nextNum = parseInt(match[1]) + 1;
  return `STUD${String(nextNum).padStart(3, "0")}`;
};

const initialState: StudentState = {
  students: [],
  idCounter: "STUD001",
  selectedStudent: null,
};

const studentReducer = (
  state: StudentState = initialState,
  action: AnyAction
): StudentState => {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: [
          ...state.students,
          { ...action.payload, id: state.idCounter },
        ],
        idCounter: generateNextId(state.idCounter),
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
