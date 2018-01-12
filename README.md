# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```

## Workflow
1) ComponentDidMount calls fetchPosts action when component first renders
2) fetchPosts() has type FETCH_POSTS and uses axios to retrieve list of posts from API and returns in payload
3) reducer_posts reducer detects FETCH_POSTS, and returns dictionary object of the payload for easier data retrieval and saves object to posts state
4) mapStateToProps function converts posts state to props for use in PostIndex
5) PostIndex calls renderPosts() which takes object of posts, uses lodash to map through objects and render to page
