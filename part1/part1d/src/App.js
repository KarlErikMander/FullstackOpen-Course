import React, { useState } from 'react'

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
)

const Header = (props) => {
  return (
    <h1>{props.header}</h1>
  );
};

const Statistics = (props) => {
    const {good,neutral,bad} = props
    if(good + neutral + bad == 0){
        return <p>No feedback given</p>
    }
    return (
        <div>
            <StatisticLine text={"good"} value={good}/>
            <StatisticLine text={"neutral"} value={neutral}/>
            <StatisticLine text={"bad"} value={bad}/>
            <StatisticLine text={"all"} value={good + neutral + bad}/>
            <StatisticLine text={"average"} value={(good + (-1 * bad))/(good + neutral + bad)}/>
            <StatisticLine text={"positive"} value={(100 * good)/(good + neutral + bad)}/>
        </div>
    )
}

const StatisticLine = (props) => {
    const {text, value} = props;
    return (
        <p>{text} {value}</p>
    )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodButtonClick = () => setGood(good + 1);
  const handleNeutralButtonClick = () => setNeutral(neutral + 1);
  const handleBadButtonClick = () => setBad(bad + 1);

  return (
      <div>
          <Header header={"give feedback"}/>
          <Button handleClick={handleGoodButtonClick} text='Good' />
          <Button handleClick={handleNeutralButtonClick} text='Neutral' />
          <Button handleClick={handleBadButtonClick} text='Bad' />
          <Header header={"Statistics"}/>
          <Statistics good={good} neutral={neutral} bad={bad}/>

      </div>
  )
}


export default App;
