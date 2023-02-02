import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = evt => {
    this.setState(prevState => ({
      [evt.target.name]: prevState[evt.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, num) => acc + num, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() === 0
      ? 0
      : Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  // *****training code*****

  // handleFeedback = event => {
  //   const { name } = event.currentTarget;
  //   this.setState(prevState => ({
  //     [name]: prevState[name] + 1,
  //   }));
  //   this.countTotalFeedback();
  //   this.countPositiveFeedbackPercentage();
  // };

  // countTotalFeedback = () => {
  //   let total = this.state.good + this.state.neutral + this.state.bad;
  //   return total;
  // };

  // countPositiveFeedbackPercentage = () => {
  //   if (this.countTotalFeedback() === 0) {
  //     return 0;
  //   }
  //   return Math.round(
  //     ((this.state.good + this.state.neutral) / this.countTotalFeedback()) * 100
  //   );
  // };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          padding: 30,
          gap: 20,
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
