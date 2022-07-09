## Kitchen Dashboard

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/10378707-ef3ccd1d-f201-491e-b7ab-2bacb5f3d5df?action=collection%2Ffork&collection-url=entityId%3D10378707-ef3ccd1d-f201-491e-b7ab-2bacb5f3d5df%26entityType%3Dcollection%26workspaceId%3De9f2300d-a2fd-4e7b-9584-808f0c0f7bae)

### Overview

This Project helps maintain an inventory of all food items purchased, tracking their location (within the kitchen, could
be a named cupboard, the refrigerator, etc.,), nutritional information (including calories, carbohydrates, proteins,
etc.,), and ownership, within a single kitchen.

This repository contains the backend for the project, build using Express on Node. The frontend is available at [github.com/L4TTiCe/kitchen-dashboard](https://github.com/L4TTiCe/kitchen-dashboard).

### How to Run?

This project uses Docker to help with setting up the project in different platforms. To have a running instance of the bundled application and a mongoDB instance for the application use, Run the following command:
 
 ```bash
 docker-compose up
 ```
 
 If you already have npm setup in your machine, you can use the following shortcut:
  ```npm
npm run docker
# Which is shortcut for
# "docker-compose up --build --remove-orphans --force-recreate"
 ```
