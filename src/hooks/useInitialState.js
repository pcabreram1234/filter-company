import companies from "../utility/companies.json";

const useInitialState = () => {
  fetch(
    "https://challenges-asset-files.s3.us-east-2.amazonaws.com/jobMadrid/companies.json",
    { method: "GET", headers: { Accept: "text/html" } }
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      error;
    });
};

export default useInitialState;
