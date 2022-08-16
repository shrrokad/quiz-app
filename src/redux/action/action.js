export const ADD = (item) => {
    return{
        type:"ADD_USERDATA",
        payload:item
    }
}

export const SENDDATA = (item) => {
    return{
        type:"QESTIONDATA",
        data:item,
        isHttpsAction : true,
        url:"/quizdata",
        method: "POST"
    }
}

export const ADD_ANSWER = (item) => {
    // console.log(item, "----->item");
    return{
        type:"ADD_ANSWER",
        payload:item
    }
}
export const UPDATE_ANSWER = (item) => {
    return{
        type:"UPDATE_ANSWER",
        payload:item
    }
}