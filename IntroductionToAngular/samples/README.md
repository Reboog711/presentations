# CEU - Introduction to Angular - Code Samples

This repo contains the code samples for Jeffry Houser's Introduction to Angular presentation.


## Prerequisites 

* [Download and install NodeJS and npm](http://www.nodejs.org)
* Install the Angular CLI by running this at your command line:

      npm install -g @angular/cli

## Introduction
### Sample 1

Sample one was done live.  To repeat it run:

    ng new

Then review the files.  To run the newly created application run:

    ng serve
    
Then load the default application in your browser at http://localhost:4200

## Components

Before running any of these samples, you'll want to install the Node dependencies.

1. Make sure you're in the `ita` directory.
2. Install the dependencies if you have not done so already.  

        npm install


You'll only need to do this once, as samples 2-6 use the same infrastructure.

### Sample 2

Sample 2 creates your first component.  The source code is in `ita/projects/sample2`

1. Run the sample

        ng serve --project=sample2

2. Load the app in your browser at http://localhost:4200

### Sample 3

Sample 3 shows how to share data between the HTML Template and TypeScript class. The source code is in `ita/projects/sample3`

1. Run the sample

        ng serve --project=sample3

2. Load the app in your browser at http://localhost:4200

### Sample 4

Sample 4 shows how to run a function in the TypeScript class based on user interaction in the HTML Template. The source code is in `ita/projects/sample4`

1. Run the sample

        ng serve --project=sample4

2. Load the app in your browser at http://localhost:4200

### Sample 5

Sample 5 shows how to create a formalized API in a component. The source code is in `ita/projects/sample5`

1. Run the sample

        ng serve --project=sample5

2. Load the app in your browser at http://localhost:4200

## Services

For this sample to run, you'll need to install the node dependencies.  You probably already did this for the component samples and do not need to do so again.


### Sample 6

Sample 6 shows how to user an Angular service to share data between multiple components. The source code is in `ita/projects/sample6`

1. Run the sample

        ng serve --project=sample6

2. Load the app in your browser at http://localhost:4200


# Need Help?

Reach out to Jeffry through his blog at https://www.jeffryhouser.com/contact.cfm
