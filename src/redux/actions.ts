import { Student } from "../types/Student";

export const ADD_STUDENT = "ADD_STUDENT";
export const EDIT_STUDENT = "EDIT_STUDENT";
export const DELETE_STUDENT = "DELETE_STUDENT";
export const SET_EDIT_STUDENT = "SET_EDIT_STUDENT";
export const UPDATE_STUDENT = "UPDATE_STUDENT";


export interface AddStudentAction {
  type: typeof ADD_STUDENT;
  payload: Student;
}

export interface EditStudentAction {
  type: typeof EDIT_STUDENT;
  payload: Student;
}

export interface DeleteStudentAction {
  type: typeof DELETE_STUDENT;
  payload: number;
}

export interface SetEditStudentAction {
  type: typeof SET_EDIT_STUDENT;
  payload: Student;
}

export interface UpdateStudentAction {
  type: typeof UPDATE_STUDENT;
  payload: Student;
}

export type StudentActionTypes =
  | AddStudentAction
  | EditStudentAction
  | DeleteStudentAction
  | SetEditStudentAction
  | UpdateStudentAction;
