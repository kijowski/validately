# Validately.com code challenge.
Create a world time zone converter.

## Requirements:
- Initial page should have two time zones, 1 for the users current time zone and one for GMT time
- The user should be able to add new time zones to the list of time zones and show the current time in each zone
- The user should be able to enter any time for each of the listed time zones and it will automatically update what that time is in the other time zones visible on the page.
- Implement your solution in pure Javascript or ReactJS. At Validately we primarily use the ReactJS view framework. Avoid JQuery.

## Testing
Please include test cases for the core of your solution. There are many unit testing tools out there for Javascript and ReactJS.

# Solution
During the implementation I've tried to keep my solution small and simple. Both project infrastructure and application logic are pretty straightforward and they are described in more details in following sections. 

## Project infrastructure
Below you can find a few points describing technical and infrastructural side of my solution: 
- It is using industry standard tools and libraries.
- It is based on ReactJS library and it is written in JavaScript. 
- Project structure and dependencies are managed with npm.
- Babel transpiler is used to leverage some features of ECMAScript 2015. 
- Testing is done with Mocha, Chai and Enzyme libraries.
- Bundling and minification is done with Webpack.
- Interactive development setting leverages webpack-dev-server.

## Application logic
Application logic is splitted into 3 main components:
#### AnalogClock
This is a stateless functional component. It is responsible for displaying simple representation of analog clock.

Sample usage:
```javascript
<AnalogClock hour=13 minute=45/>
```
#### TimeDisplay
Second component is a little more complicated than AnalogClock, but it's still simple nevertheless. It is responsible for displaying data about the timezone that it's describing and it handles actions that user can perform on it. Actions are handled by invoking callbacks specified as a component props - in that way TimeDisplay can be as well stateless.

Sample usage:
```javascript
var time = moment.utc();
<TimeDisplay
    index = 1
    offset='Canada/Yukon'
    time= {time}
    setNewUtcDate={callback_for_setting_new_date}
    removeTimeZone={callback_for_removing_timezone}
    />
``` 
#### App
App component is the main component of the application. It is responsible for keeping state of currently set time and selected timezones. ```javascript
var time = moment.utc();

Sample usage:
```javascript
<App/>
```  