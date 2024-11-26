Steps:

Having open vsCode and docker install, you can have 2 terminal windows, one for running backend and other frontend

1. To run the backend, change to the backend directory in one of the terminals, build the docker image and run it using these commands
   
 docker build -t paperapi .    
 docker run -p 5000:5000 paperapi

2. To run the frontend, change to the frontend directoy in the other terminal and run the following commands
   
 docker build -t paperfrontend .    
 docker run -p 8080:80 paperfrontend
