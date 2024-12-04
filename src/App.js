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
import { people } from './Components/List & Keys/database';
import { getImageUrl } from './Components/List & Keys/imageUrl';
import FormComponent from './Components/Hooks/UseState/FormComponent';
import CounterHooks from './Components/Hooks/UseState/CounterHooks';
import SocialMedia from './Components/Hooks/UseEffect/SocialMedia';
import SetWindowSize from './Components/Hooks/UseEffect/SetWindowSize';
import DoubleNumber from './Components/Hooks/UseMemo/DoubleNumber';
import NameChange from './Components/Hooks/UseRef/NameChange';
import FocusText from './Components/Hooks/UseRef/Focus';


function App() {

  // const Button = ({lebel, click}) => {
  //   return <button onClick={click}>{lebel}</button>
  // }


  // -------------------------use list and keys---------------------
  const lstItems = people.map(p =>

    <li key={p.id}>
      <img src={getImageUrl(p)} alt={p.name} />
      <p>
        <b>{p.name}</b>
        {' ' + p.profession + '' + p.accomplishment}
      </p>
    </li>

  )

  // ---------------------------------------------
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

  const num = [1, 2, 3, 4, 5, 6];
  const number = num.map((n) => <li>{n}</li>);

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



      {/*---------------------- conditional rendering */}
      <LoginControls />
      <ReadMails mail={mail} />
      <AccounBalance />

      {/*---------------------- list and keys */}
      {/* <ul>
        {number}
      </ul>

      <ul>{lstItems}</ul> */}


      {/*------------------- hooks */}
      {/* <FormComponent />
      <CounterHooks /> */}

      {/* <SocialMedia /> */}
      <SetWindowSize />

      <DoubleNumber />

      <NameChange />
      <FocusText />


    </div>
  );
}

export default App;
