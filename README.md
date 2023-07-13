<img src="https://github.com/vishalkrishnads/openinapp/assets/50231856/cf748cf3-8faa-4caa-a5e9-76bd3b4760f2" alt="OpenInApp" width="250" align="right">

# `openinapp`🔼
> This is just a submission of a task assigned to me by [OpenInApp](https://openinapp.com) as part of evaluating candidates for an internship position. It is an implementation of the Figma design found [here](https://www.figma.com/file/gKLhBDaTmdNDzHjsvqFMmC/Front-End-Developer-Task). It's written with [Next.js](https://nextjs.org) & hosted on [Vercel](https://vercel.com).

## Table Of Contents

* [How To View](#how-to-view)
* [About the API](#about-the-api)
    * [Algorithms](#algorithms)
* [Build From Source](#build-from-source)
   * [Prerequisites](#prerequisites)
   * [Instructions](#instructions)
* [Contributing](#contributing)

## How To View
This section details how to view the app, if the behaviour seems confusing to you. Since the assignment only requires a basic authentication system, the app doesn't implement a full blown one and hence may behave differenly to your everyday app. Here's how you can view it:
1. Open the app by clicking [here](https://openinapp-red.vercel.app/).
2. Click the SIgn In wth Google button and choose a Google account you'd like to use.
3. Once authenticated, you'll be taken to the dashboard. This dashboard fetches some JSON from an API and renders the details in the specified manner. If you see your profile image on the top right corner, it means you have been authenticated successfully.
4. You can hit Ctrl + R or refresh to get new data from the API. Each time, it returns different values so that the charts & UI change.
5. Once done, you can simply click your profile image to log out and go back to the login page.
6. You can also load the app again by clicking [here](https://openinapp-red.vercel.app/). Once you sign in, the previously used account will be signed out automatically.

## About the API
The API is a random value generator that is specific for the dashboard only. It is currently open with no access tokens required whatsoever. You can get a response by simply clicking [here](https://selseus.com/refresh) or opening [`https://selseus.com/refresh`](https://selseus.com/refresh) in your browser. The full code for it is available in [this gist](https://gist.github.com/vishalkrishnads/82d5a1fd879ce9386bcc576cdb0e04c8). Given below is an example response returned by it.

  ```json
  {
    "cards": [
            1617714,
            1651,
            9786,
            863
        ],
        "schedule": [
            {
                "activity": "Checking on operations",
                "timePeriod": "09:00-10:00",
                "place": "Warehouse"
            },
            {
                "activity": "Marketing campaign planning",
                "timePeriod": "09:30-11:00",
                "place": "Marketing Agency"
            }
        ],
        "pie": {
            "basic_tees": 17,
            "short_pants": 47,
            "super_hoodies": 36
        },
        "chart": {
            "labels": [
                "",
                "Week 1",
                "Week 2",
                "Week 3",
                "Week 4",
                ""
            ],
            "data1": [
                94.13950835619688,
                18.30458559473702,
                111.78743846546601,
                221.1815867028024,
                33.742000087578546,
                465.94298759003146
            ],
            "data2": [
                395.3083262696545,
                390.8978593409446,
                112.80728772541903,
                273.79634925212247,
                66.02810755841544,
                466.03555956945274
            ]
        }
  }
  ```

### Algorithms
There isn't much to detail about the alogrithms in the API. It simply makes sure that the values returned are always optimal for the UI to render properly, as per the design. The constraints are:
* **Pie Chart**: Only three values together adding up to 100 would be rrturned at all times. this is to make sure the Pie chart renders properly
* **Line Chart**: Two datasets with 6 values each would be returned at all times. Each set will contain at least one value above 450 & one below 100. This is to make sure that proper waves are formed in the graph at all times.
* **Schedule**: Two values from a predefined set of schedule values would be returned. These are written for this app.
* **Cards**: Only the values for the cards would be returned. The app pieces together stuff like the color, description, icons, etc.

## Build From Source
Follow these instructions to get the project up and running on your local machine.

### Prerequisites
1. Node.js
   
    > Node.js is a JavaScript runtime. Get it [here](https://nodejs.org/en).
3. Git
   
    > Git is a Version Control System used across the industry. Get it [here](https://git-scm.com/downloads).

### Instructions
1. Clone this repository
    
    ```bash
    git clone https://github.com/vishalkrishnads/openinapp.git
    ```

2. Change the working directory

    ```bash
    cd openinapp/
    ```

3. Install all dependencies

    ```bash
    npm install
    ```

4. Start the server

    ```bash
    npm run dev
    ```

Done! The app should be up and running by now on [port 3000](http://localhost:3000). You can get started by editing `/app/page.js`.

## Contributing
Since this is the submission of an assignment, the code might be evaluated. As such, this repository is not accepting any contributions as of now. In order to maintain the authenticity of submission, the last commit will be on 13th of July, 2023 and no changes would be made afterwards, until the evaluation is complete.
