window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
});


const localFunctionApi = 'http://localhost:7071/api/GetVisitorCount';
const functionApiUrl = 'https://azuregetvisitorcounter.azurewebsites.net/api/GetVisitorCount?code=1Ji4jGb14lXv95jtVoGPawvDnzb40aSs5tNc-cOOm2haAzFuQv1gtg==';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API",response);
        count = response.Count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error) {
        console.log("error",error);
    });
    return count;
}