// rock-the-vote/client/src/redux/issues.js 

import axios from "axios";
const issuesUrl = "http://localhost:8080/issues/";


const issuesReducer = (prevIssues = { data: [], loading: true }, action) => {
    switch (action.type) {
        case "ADD_ISSUE":
            return {
                ...prevIssues,
                loading: false,
                data: action.data
            }

        case "GET_ISSUES":
            return {
                ...prevIssues,
                loading: false,
                data: action.data,
            }

        case "DELETE_ISSUE":
            return {
                ...prevIssues,
                loading: false,
                data: prevIssues.data.filter((issue) => {
                    return issue._id !== action.id
                }
            )
        }

        case "UPDATED_ISSUE":
            return {
                ...prevIssues,
                loading: false,
                data: prevIssues.data.map((issue) => {
                    if (issue._id===action.id){
                        return action.updatedIssue;
                    } else {
                        return issue;
                    }
                })
            }
        default: return prevIssues;
    }
}

export const addIssue = (inputs) => {
    inputs.upVotes = 0;
    inputs.downVotes = 0;
    inputs.totalVotes = 0;
    return (dispatch) => {
        axios.post(issuesUrl, inputs)
            .then((response) => {
                dispatch({
                    type: "ADD_ISSUES",
                    data: response.data,
                    // loading: true
                })
            })
            .catch((err) => {
                console.error(err);
                return err;
            })
    }
}

export const getIssues = (inputs) => {
    return (dispatch) => {
        axios.get(issuesUrl)
            .then(response => {
                dispatch({
                    type: "GET_ISSUES",
                    data: response.data,
                    // loading: true
                })
            })
            .catch((err) => {
                console.error(err);
                return err;
            })
    }
}

// export const deleteIssue = (id) => {
//         return (dispatch) => {
//             axios.delete(issuesUrl + id, id)
//                 .then((response) => {
//                     dispatch({
//                         type: "DELETE_ISSUE",
//                         id
//                     })
//                 })
//             .catch ((err) => {
//                 console.error(err);
//                 return err;
//             })
//     }
// }

export const updatedIssue = (updatedIssue) => {
    return (dispatch) => {
        axios.put(issuesUrl + "/" + updatedIssue._id, updatedIssue) 
            .then(response => {
                dispatch({
                    type: "UPDATED_ISSUE",
                    data: response.data,
                });
            })
            .catch((err) => {
                console.error(err);
                return err;
            })
    }
}
export default issuesReducer;

