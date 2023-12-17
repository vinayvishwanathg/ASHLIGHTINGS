#!/bin/bash

# Update package lists
sudo apt update

# Install Node.js and npm
sudo apt install nodejs npm

# Verify installation
node -v
npm -v
