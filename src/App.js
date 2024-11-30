import logo from './logo.svg';
import './App.css';
import { type } from '@testing-library/user-event/dist/type';
import React, { Children } from 'react';
import Quotes from './Components/quotes';
import Button from './Components/quotes';
import Counter from './Components/Counter';
import LifecycleCounter from './Components/LifeCycleExample/LifeCycle';
import LoginControls from './Components/ConditionalRendering/LoginControls';
import ReadMails from './Components/ConditionalRendering/ReadMail';
import AccounBalance from './Components/ConditionalRendering/AccountAlert';

function App() {

  // const Button = ({lebel, click}) => {
  //   return <button onClick={click}>{lebel}</button>
  // }
  const user = {
    name: 'Anushka Jain',
    ppo: 20000000
  }

  // react act as a object
  const el1 = (
    <h1 className='josh'>I can do it and I will</h1>
  )
  const el = React.createElement(
    'h1',
    { className: 'josh' },
    'I can do it and I will'
  )
  const el2 = {
    type: 'h1',
    props: {
      className: 'josh',
      Children: 'please give me some shine'
    }

  }

  const mail = ['selected', 'coding round', 'interview round', 'offer letter']
  function formatName(user) {
    if (user) {
      return (
        <>
          Hello {user.name} {user.ppo}
        </>
      )
    }
    else {
      return (
        <p>No user found</p>
      )
    }

  }

  return (
    <div className="App">
      {/* <Button lebel={'click me'} click={() => alert('you clicked')} /> */}
      <h1>{formatName()}</h1>


      {/* ---------------- Components with props and state-------------------*/}

      {/* <Quotes name= {'Anushka'}/> */}
      {/* <p>{count}</p> */}
      {/* <Button mssg = "Be happy Anushka "/> */}

      {/* <Counter /> */}

      {/* Lifecycle */}

      {/* <LifecycleCounter /> */}



      {/* conditional rendering */}
      <LoginControls />
      <ReadMails mail = {mail}/>
      <AccounBalance />

    </div>
  );
}

export default App;
