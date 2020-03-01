# 💳 Credit Card Challenge 💳

## Index  

- ℹ️ [About The Project](#About)
- 📝 [What I do](#What-I-do)
- 📁 [Thoughts & Details](#Thoughts-&-Details)
- 🚀 [Deploy](#Deploy) 
- 👩‍💻[About Me](#About-Me) 

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

## What I do 📝

- I use `create-react-app` to set my project and for better use the limited time I had.
- I created the file system, assets, components, containers and hooks. The last one gave me a problem and I deleted it, but in the future I want to use that part.
- Use `Styled-Components` 💅 for the Styles. 
- Use Hooks as State Manager. 

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

In the project directory, you can run:

**`npm start`**

To Run the app in the development mode.
The page will reload if you make edits.

**Testing (Not available yet)**

For testing I read [How to test React-Redux connected Components](https://www.robinwieruch.de/react-connected-component-test)