# Dockerized node-react-postgresql App

This project demonstrates how docker can be used to run node, postgresql, react in containers. nginx is for proxy to backend api and client side routes.

## Screenshots for the project
![recipe1](https://user-images.githubusercontent.com/21228768/50936601-99c18500-1470-11e9-8c47-187773b1385c.jpg)
![recipe2](https://user-images.githubusercontent.com/21228768/50936608-a0e89300-1470-11e9-9243-230fe7cc4cbe.jpg)
![recipe3](https://user-images.githubusercontent.com/21228768/50936650-d0979b00-1470-11e9-99e6-ec5373868f99.jpg)

## Run this dockerized demo app

Make sure docker installed on a computer
clone project folder and enter into it.
File `docker-compose.yml` is built in a way that creating images of client, server and postgres images.

## Build and run command

`Build: docker-compose.yml`   `Run: docker-compose.yml`

All the containers will be run and user can browse at
http://localhost:3000
