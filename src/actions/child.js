import axios from "axios";

export const getChild = () => {
  return dispatch => {
    dispatch({
      type: "GET_CHILD_NAME",
    });
    const url = "https://hrtaskapi.dhwaniris.in/index.php/api/beneficiary/get-child-profile"
    const headers = {
      'token': `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQ3IiwidW5pcXVlX3VzZXJfaWQiOiIxMTg4IiwibmFtZSI6IkJhcm1lciBTb3V0aCBDb29yZGluYXRvciIsInVzZXJuYW1lIjoiMjA0MCIsIm1vYmlsZSI6Ijk5OTk5OTk5OTkiLCJsZXZlbF9pZCI6IjUiLCJwYXNzd29yZF9yZXNldF90b2tlbiI6bnVsbCwiZW1haWwiOiJhYmNuZ0BnbWFpbC5jb20iLCJhdXRoX2tleSI6ImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlIiwic3RhdHVzIjoiMSIsImNyZWF0ZWRfYXQiOiIwMDAwLTAwLTAwIDAwOjAwOjAwIiwidXBkYXRlZF9hdCI6IjIwMTktMTEtMDYgMDc6MTg6MDQiLCJjaGFuZ2VkX3Bhc3N3b3JkX29uY2UiOm51bGwsInVzZXJfZXJyb3JfZnJlcXVlbmN5XzEiOm51bGwsInVzZXJfZXJyb3JfZnJlcXVlbmN5XzIiOiIxOCIsInVzZXJfbGV2ZWwiOiJDbHVzdGVyIFN1cGVydmlzb3IiLCJsb2dpbl9pZCI6M30.ak3OSYopsW211SvJnzH4nNLvcj9Z4B16fR329fZbHeA`,
      
    }
  
    axios
      .get(url,{headers})
      .then(response => {
        dispatch({
          type: "GET_CHILD_SUCCESS",
          data: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: "GET_CHILD_ERROR",
          error
        });
      });
  };
};

