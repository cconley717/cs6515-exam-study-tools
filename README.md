# cs6515-exam-tools

**note**: The setup guides below suggest the use of the pm2 module for process management. If you don't require process management, you can just use node to run this Express application natively without process management. Process management is useful if you're deploying this Express application on a remote server.

## Ubuntu Linux setup guide
sudo snap install node --classic --channel=20

npm install

npm install -g pm2

pm2 start server.js

## Windows setup guide
download [Node.js](https://nodejs.org/) and install it

git clone this repo with a Windows git client

open a terminal in the git cloned directory

npm install

npm install -g pm2

pm2 start server.js

## pm2 commands of interest
pm2 list

pm2 stop server

pm2 restart server

pm2 delete server

## Screenshots

![main page](docs/images/main.jpg?raw=true)
![exam 2 page](docs/images/exam2.jpg?raw=true)
![exam 3 page](docs/images/exam3.jpg?raw=true)

### RSA Solvers
![rsa page](docs/images/rsa.jpg?raw=true)

### Graph Algorithms
![graphs page](docs/images/graphs.jpg?raw=true)

### Linear Programming
![lp1 page](docs/images/lp1.jpg?raw=true)
![lp2 page](docs/images/lp2.jpg?raw=true)
![lp3 page](docs/images/lp3.jpg?raw=true)
![lp4 page](docs/images/lp4.jpg?raw=true)
