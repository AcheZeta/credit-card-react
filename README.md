# ⚛️💳 Credit Card Frontend Challenge

## 📌 Index

- [About](#About) ℹ️
- [Goals](#Goals) 📝
- [Plans](#Plans) 📅
- [Thoughts & Details](#Thoughts-&-Details) 📁
- [Deploy](#Deploy) 🚀
- [About Me](#About-Me) 👩‍💻
- [Scripts & Test](#Scripts-&-Test) ✏️

## 📝 About & Challenge

This is an thecnical test for Front End Developers.
I don't have limited time to finish it.  
You can find the original repository [here](https://github.com/Creditas/mx_challenge_frontend)

### 🧑‍🎨 Layout

- What to do?
  - Re-create it similar card component.
  - Layout the whole form from scratch.
- How?
  - You can use whatever you want.
  - Use a methodology to name your classnames.

### 🧑‍🔧 Functionality

- What to do?
  - While the user is typing the card info, change it in the card layout.
  - Stand out ( in the card layout ) the info that the user is typing.
  - Detect the the financial entity with the first digits of the card number.
- How to do it?
  - Use React and some state manager.
  - Make it like components, we are also checking the file structure.

### 🤩 Extra Point

A good programmer always tests his code, so give it a chance to test your components.

## Goals 📝

For this challenge:

- I create a React App Project using _create-react-app_
- I Use Eslint [Eslint Airbnb](https://github.com/airbnb/javascript).
- I Use React Hooks ⚓
- I use styled-components to style the application.

## How?. 📅

- I decided to use `create-react-app` because in another test I set up a greenfield project using react, webpack, babel, Eslint and redux, but using create-react-app gave me more time to work on the functionality especially because my time was Limited by my work.

### Thoughts & Details 📁

I really enjoyed this project, for this project files I analyze the challenge and divided it into parts.

First, I created the folder for components and container.

Then, I created the files for each component: [Card.jsx](https://github.com/AcheZeta/credit-card-react/blob/develop/src/components/Card.jsx), [Container.jsx](https://github.com/AcheZeta/credit-card-react/blob/develop/src/components/Card.jsx) and [Form.jsx](https://github.com/AcheZeta/credit-card-react/blob/develop/src/components/Card.jsx).

In containers Folders: [app.jsx](https://github.com/AcheZeta/credit-card-react/blob/develop/src/containers/App.jsx)


### The State 
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

