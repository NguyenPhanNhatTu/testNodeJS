cd /home/ubuntu/file/ec-2021

# Install yarn dependencies
yarn

# Build docker image
sudo docker build -t duynao4/dtdm-02 .

# Run docker container
sudo docker run -d --name dtdm-02 -p 3000:3000 duynao4/ec-b010:latest