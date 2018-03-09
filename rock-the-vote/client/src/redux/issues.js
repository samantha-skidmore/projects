// rock-the-vote/client/src/redux/issues.js 

import axios from "axios";
const issuesUrl = "http://localhost:8080/issues/";


const issuesReducer = (state = { data: [], loading: true }, action) => {
    switch (action.type) {
        case "ADD_ISSUE":
            return { 
                ...state, 
                loading: false,
                // data: action.data
                data: [...state.data, action.inputs]
            };

        case "GET_ISSUES":
            return {
                // ...prevIssues,
                loading: false,
                data: action.issues,
            }

        // case "DELETE_ISSUE":
        //     return {
        //         // ...prevIssues,
        //         loading: false,
        //         data: prevIssues.data.filter((issue) => {
        //             return issue._id !== action.id
        //         }
        //     )
        // }

        case "UPDATED_ISSUE":
        const newData = state.data;
        for (let i = 0; i < newData.length; i++) {
            if(action.updatedIssue._id === newData[i]._id) {
                newData[i] = Object.assign(newData[i], action.updatedIssue);
            }
        }
            return {
                // ...prevIssues,
                ...state,
                data: newData
            }
            default:
                return state;

        //         data: prevIssues.data.map((issue) => {
        //             if (issue._id===action.id){
        //                 return action.updatedIssue;
        //             } else {
        //                 return issue;
        //             }
        //         })
        //     }
        // default: return prevIssues;
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
                    type: "ADD_ISSUE",
                    inputs: response.data,
                    // loading: true
                })
            })
            .catch((err) => {
                console.error(err);
                return err;
            })
    }
}

export const getIssues = (issues) => {
    return (dispatch) => {
        axios.get(issuesUrl)
            .then(response => {
                console.log(response.data);
                dispatch({
                    type: "GET_ISSUES",
                    issues: response.data,
                    loading: true
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

