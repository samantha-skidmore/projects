// freedom-cars-vets/client/src/redux/questions.js 

import axios from "axios";
const questionUrl = "http://localhost:8080/question/";

const questionReducer = (state = { data: [], loading: true }, action) => {
    switch (action.type) {
        case "GET_QUESTIONS":
            return {
                data: action.question,
                loading: false
            };
        case "ADD_QUESTION":
            return {
                ...state,
                data: [...state.data, action.newQuestion]
            };
        case "UPDATE_QUESTION":
            let newData = state.data;
            for (let i = 0; i < newData.length; i++) {
                if (action.updatedQuestion._id === newData[i]._id) {
                    newData[i] = Object.assign(newData[i], action.updatedQuestion);
                }
            }
            return {
                ...state,
                data: newData
            };

        case "DELETE_QUESTION":
            return {
                ...state,
                data: action.data.filter((question) => {
                    return question._id !== action.id
                }
                )
            }
        default:
            return state;
    }
}

export function getQuestions() {
    return function (dispatch) {
        axios.get(questionUrl)
            .then(response => {
                dispatch({
                    type: "GET_QUESTIONS",
                    questions: response.data
                });
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export function addQuestion(newQuestion) {
    newQuestion.upvotes = 0;
    newQuestion.downvotes = 0;
    newQuestion.totalVotes = 0;
    return function (dispatch) {
        axios.post(questionUrl, newQuestion)
            .then(response => {
                dispatch({
                    type: "ADD_QUESTION",
                    newQuestion: response.data
                })
            })
            .catch(err => {
                console.error(err);
            });
    }
}

export function updateQuestion(updatedQuestion) {
    return function (dispatch) {
        axios.put(questionUrl + "/" + updatedQuestion._id, updatedQuestion)
            .then(response => {
                dispatch({
                    type: "UPDATE_QUESTION",
                    updatedQuestion: response.data
                });
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export function deleteQuestion(id) {
    return (dispatch) => {
        axios.delete(questionUrl + id, id)
            .then((response) => {
                dispatch({
                    type: "DELETE_QUESTION",
                    id
                })
            })
            .catch((err) => {
                console.error(err);
                return err;
            })
    }
}


export default questionReducer;