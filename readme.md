# Angular Project Solution

This repository is designed to help you solve complex Angular projects alongside their libraries and build each of them separately. Each Angular project within this repository will have its own compile/build, and each library will undergo its individual compilation process.

## Overview

This repository is a comprehensive resource for tackling intricate Angular projects and mastering the build process for each angular project.The Angular project is structured with multiple libraries, each serving a specific purpose.This individualized build process in Angular libraries allows developers to optimize and bundle specific features independently, promoting modularization and efficient resource utilization. Additionally, the prescribed execution order ensures seamless integration and reliable functionality when incorporating multiple libraries within a larger Angular application.

## Project Features

- **Modular Structure:** Each Angular project and library is organized in a modular structure, promoting maintainability and scalability.
  
- **Isolated Builds:** Every Angular project and library has its own build process, ensuring independence and clarity in development.

- **Isolated Libraries:** Every Angular library has its own build process its own execution order, ensuring independence and clarity in development.


## Getting Started

Follow these steps to get started with the Angular Project Solution Repository:

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- [Angular CLI](https://angular.io/cli) installed globally (`npm install -g @angular/cli`)

### Installation

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/theend7/angular_project_solution .git
    ```

2. Navigate to the project directory:
    ```bash
    cd angular_project_solution 
    ```

3. Install dependencies for the entire repository:
    ```bash
    npm install
    ```

### Project Descriptions

Explore each project and library in their respective directories. Refer to the individual `README.md` files within each directory for detailed project descriptions, features, and build instructions.

## Library Dependencies Patern (This is just an example for now, every library will be explained in detail and its own execution order)
1. **library1**: This is the foundational library and must be executed first. It sets up essential configurations and provides core functionalities.

2. **library2**: Depends on `library1`. It utilizes functionalities provided by `library1` and extends them. This library should execute after `library1` has finished its initialization.

3. **library3**: Depends on both `library1` and `library2`. It requires functionalities from both libraries and must wait for both to complete before executing.

4. **... (Additional Libraries)**: Libraries further down the line may have dependencies on previously mentioned libraries and should follow a similar pattern.

## Notes

- Make sure to check the documentation of each project for any specific requirements or additional notes.


