# Angular Project Solution

This repository is designed to help you solve complex Angular projects alongside their libraries and build each of them separately. Each Angular project within this repository will have its own build, and each library will undergo its individual compilation process.

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

## Library Dependencies Patern
1. **App-1**:
    - `LibCommon` is the foundational library and must be executed first. It sets up essential configurations and provides core functionalities.
    - `Lib2` depends on `LibCommon`. It utilizes functionalities provided by `LibCommon` and extends them. This library should execute after `LibCommon` has finished its initialization.
    - `Lib3` depends on `Lib2`. It utilizes functionalities provided by `Lib2` and extends them. This library should execute after `Lib2` has finished its initialization.
    - `Lib1` depends on `Lib3`. It utilizes functionalities provided by `Lib3` and extends them. This library should execute after `Lib3` has finished its initialization.
2. **App-2**:
    - `LibCommon` is the foundational library and must be executed first. It sets up essential configurations and provides core functionalities.
    - `Lib4` depends on `LibCommon`. It utilizes functionalities provided by `LibCommon` and extends them. This library should execute after `LibCommon` has finished its initialization.
    - `Lib5` depends on `Lib4`. It utilizes functionalities provided by `Lib4` and extends them. This library should execute after `Lib4` has finished its initialization.
    - `Lib1` depends on `Lib5`. It utilizes functionalities provided by `Lib5` and extends them. This library should execute after `Lib5` has finished its initialization.
    - `Lib3` depends on `Lib1`. It utilizes functionalities provided by `Lib1` and extends them. This library should execute after `Lib1` has finished its initialization.
3. **App-3**:
    - `LibCommon` is the foundational library and must be executed first. It sets up essential configurations and provides core functionalities.
    - `Lib6` depends on `LibCommon`. It utilizes functionalities provided by `LibCommon` and extends them. This library should execute after `LibCommon` has finished its initialization.
    - `Lib7` depends on `Lib6`. It utilizes functionalities provided by `Lib6` and extends them. This library should execute after `Lib6` has finished its initialization.
    - `Lib8` depends on `Lib7`. It utilizes functionalities provided by `Lib7` and extends them. This library should execute after `Lib7` has finished its initialization.
    - `Lib9` depends on `Lib8`. It utilizes functionalities provided by `Lib8` and extends them. This library should execute after `Lib8` has finished its initialization.

## Notes

- Make sure to check the documentation of each project for any specific requirements or additional notes.


