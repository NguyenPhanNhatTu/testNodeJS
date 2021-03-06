#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ubuntu/file/ec-2021
sudo chmod -R 777 /home/ubuntu/file/ec-2021/dist

#navigate into our working directory where we have all our github files
cd /home/ubuntu/file/ec-2021

# Build docker image
echo "build docker image..."
sudo docker build -t duynao4/dtdm-02:latest .

# Run docker container
sudo docker run -d --name dtdm-02 -p 3000:3000 duynao4/dtdm-02:latest