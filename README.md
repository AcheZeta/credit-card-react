# 💳 Credit Card Challenge ⚛️

## About ℹ️

This is an Front End Challenge, The application is very simple, is about filling a credit card info which reflects each value into a credit card layout as shown below.
There was no time limit for the Challenge and considerated: 

    - Re-create it similar, be careful with the details (the little animations).
    - Layout the whole form from scratch, it means, you should create your own form components what satisfy the functionality shown above.
    - You can use whatever you want (Vanilla CSS, Sass/Scss, JSS, etc.) Make it easy and comfortable for you.
    - Use a methodology to name your classnames.
    - While the user is typing the card info, change it in the card layout.
    - Stand out ( in the card layout ) the info that the user is typing.
    - Detect the the financial entity with the first digits of the card number, in this case detect VISA **( 4\*\*\* )**, MASTERCARD **( [ 51 | 52 | 53 | 54 | 55 ] \*\* )** and AMEX **( 3\*\*\* )**. 
    - Use React and some state manager.
    - Make it like components, we are also checking the file structure.

If you are interested, you can find the original repository [here](https://github.com/Creditas/mx_challenge_frontend)

## What I do 📝

For this challenge:

- I create a React App Project using `create-react-app` for better use the limited time I had
- I Use Eslint [Eslint Airbnb](https://github.com/airbnb/javascript).
- I Use React Hooks ⚓ as State Manager.
- I Use `Styled-Components` 💅 for the Styles. 

## How?. 📅

- I decided to use `create-react-app` because in another test I set up a greenfield project using react, webpack, babel, Eslint and redux, but using create-react-app gave me more time to work on the functionality especially because my time was Limited by my work.

I really enjoyed this project, for this project files I analyze the challenge and divided it into parts.

First, I created the folder for components and container.

Then, I created the files for each component: [Card.jsx](https://github.com/AcheZeta/credit-card-react/blob/develop/src/components/Card.jsx), [Container.jsx](https://github.com/AcheZeta/credit-card-react/blob/develop/src/components/Card.jsx) and [Form.jsx](https://github.com/AcheZeta/credit-card-react/blob/develop/src/components/Card.jsx).

In containers Folders: [app.jsx](https://github.com/AcheZeta/credit-card-react/blob/develop/src/containers/App.jsx)


#### The State 
I set a Initial State in Form Component
```
const [state, setState] = useState({
        cardNumber: 'XXXX XXXX XXXX',
        cardName: 'Lorem Ipsum',
        Month: 'Month',
        Year: 'Year',
        CVV: 'CVV'
    });
```

I use the form and SetState Hook to change the info in the Card.

### Thoughts & Details 📁

I really enjoyed this challenge, my biggest 'problem' was the time and some styles, but i enjoy work with react.

In the [src folder](https://github.com/AcheZeta/credit-card-react/tree/master/src) I have the components and containers.


I use `UseState` and `UseEffect` to manage the State. 
```
import { useState, useEffect } from 'react';

const [CardState, setState] = useState({
        cardNumber: '**** **** ****',
        cardName: 'Lorem Ipsum',
        Month: 'Month',
        Year: 'Year',
        CVV: 'CVV',
    });
};
```

## Deploy. 🚀

I use [Netlify](https://www.netlify.com/) to deploy.


## About Me. 👩‍💻 

- [Github project](https://github.com/AcheZeta/credit-card-react).
- [Deployed project](https://hamecreditcard.netlify.com/).
- [Portfolio](https://achezeta.github.io/portafolio/).
- [LinkedIn](https://www.linkedin.com/in/hame-elizalde/).


## Scripts & Test ✏️ 

🍴 You can make your own copy of this repository and or download
📦 Install the project dependencies with the `npm command
   install`.
🚀 To see the interface of your program in the browser, use the command
   `npm start` to start the web server and go to your LocalHost. The page will reload if you make edits.

**Testing (Not available yet)**

For testing I read [How to test React-Redux connected Components](https://www.robinwieruch.de/react-connected-component-test)

## How to contribute to this repo?

You can help me improve my skills, let me know your feedback, useful links, issues and content suggestions on <hame.elizalde@gmail.com> or in a [new Issue](https://github.com/AcheZeta/credit-card-react/issues/new).

Thanks! 

[Hameyalli](https://achezeta.github.io/portafolio/). 💌

