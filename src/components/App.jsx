import { Component } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import { Container } from './FeedbackOptions.styled';
export class App extends Component {
   state = {
    good: 0,
    neutral: 0,
    bad: 0,
   };
   

  
  updateState = nameFeedback => {
   this.setState(oldData => {
      let obj = { ...oldData }; 
      obj[nameFeedback] = oldData[nameFeedback] + 1;
      return obj; 
    });
  }
 
  countTotalFeedback = () => {
      const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  
  countPositiveFeedbackPercentage = () => {
      const { good, neutral, bad } = this.state;
    return Math.floor((good / (good + neutral + bad)) * 100);
  }
  render() {
      const { good, neutral, bad } = this.state;
    return (
      <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.updateState} />
      </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ?( <Notification message="There is no feedback yet..."/>) : 
       <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
          }
           </Section>
        </Container>
   )
}
}

