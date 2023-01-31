# azure-resume
Custom domain name is hosted on Cloudflare. Resume site (https) is setup with SSL certificate in Azure Front Door. This project was created on a Windows 11 laptop using Visual Studio Code.

## Software that was used for this project:
- Visual Studio Code
- Azure Functions Core Tools
- Visual Studio Code Extension: Azure Functions
- NuGet Microsoft.Azure.WebJobs.Extensions.CosmoDB
- Visual Studio Code Extension: Azure Storage
- Microsoft Azure Storage Explorer
- LucidChart

## First Steps:
- Frontend folder contains the website.
- main.js contains visitor counter code.
- Created Azure Resource Group in Azure Portal.
- Created Azure Blob Storage.
- Created Azure CosmosDB in Azure portal.
- Deployed Frontend folder to Azure Blob Storage via Azure Storage Explorer.
- Created Azure CDN.

## Second Steps:
- Backend folder contains the api
- Tested api locally after updating the JavaScript code within local index.html.
- Deployed Backend folder to Azure Blob Storage via Azure Storage Explorer.
- Built a GitHub CI/CD pipeline for easy website updating.




![azurediagram](https://user-images.githubusercontent.com/116681627/209363638-860ebe6a-7686-46fa-9c37-40581263bf8f.PNG)


