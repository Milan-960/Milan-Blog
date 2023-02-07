---
title: 'What is Redux?'
subtitle: 'Simply Explained! what is Redux'
date: 2023-02-7 13:10:00
category: 'React'
---

## [What is Redux? Simply Explained!](https://redux.js.org/introduction/getting-started)

#### Now let's dive in ^\_^

#### before going into what is Redux? Let's see why we needed Redux in the first place.

## [The Problem](What-is-redux#the-problem)

<p align="center">
  <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qh1c1vqoz1hna7onduta.png" />
</p>

<p>
Let’s say as a root component you have app.js file in your project, and in the component tree, the first layer contains 3 components and in the 2nd layer there are two child component of 2nd component.
</p>

<p align="center">
<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5nbhcaewzxjo4fzd8caq.png" />
</p>

Here, you have fetched the data from an API and you save it in the state of 2nd component. You can use this data state in child components by directly passing them downwards.

<p>

Now the problem occurs when the neighbor component which is 3 want to access that data state.

> So the problem is <font color="#0070f3">when multiple components that need to share and use the same state </font>

This can be solved by <font color="#0070f3">“lifting up”</font> the state to the parent component. So you can lift state from 2nd component to the app.js file. and then you can use this state in the 3rd component.

But that does not help always because in large application there are many states needed to be used in many different components, so it is not the best practice.

One way to solve this problem is <font color="#0070f3">to take state outside of the component tree and set it as centralized.</font> So that any component in the tree can access and update the state without worrying about it’s hierarchy in the tree.

This is the basic idea behind Redux: <font color="#0070f3">a single centralized place to contain the global state in your application, and specific patterns to follow when updating that state.</font>

> You can use redux to store the state and you can use it to any component without worrying about the hierarchy.

</p>

### Now let’s see how application works normally in react without redux.

<p align="center">
<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n8excbab1hwjt5a24mrm.png" />
</p>

<p>Consider this action as a trigger to update the state and when state gets changed then view updates the UI with new state.

For simple counter application, when we increment counter value then increment event goes to state and state updates new value then, view re-renders ui based on the updated state.

So let’s see what happens when you use Redux.

</p>

<p align="center">
<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xkirro5er7ctdczdly5l.png" />
</p>

<p>
In the redux there is a function called reducer.
This reducer function takes two arguments, first is the state itself, and second is the action object.

Action object can have a type of action like increment and any data that wants to modify the state.

Now based on previous state value and action type redux calculates new value for state and updates it.
These all things happens inside the redux store, you can say it as any centralized database for state management.

Then when view get new state value it re-renders the UI.

Let me show you another example of how redux works!

</p>

<p align="center">
<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y4l0u5umm0ex29hhnsrq.gif" />
</p>

As you can see here this is a simple gif which explains how redux works, you can find it on the official [redux documentation](https://redux.js.org/tutorials/essentials/part-1-overview-concepts).

<p>

Now using this UI you can either deposit or withdraw money.

when we click the deposit button, click event goes to event handler, based on event, event handler dispatches an action with the type as deposit and any details needed in the payload property.

This reducer accepts two things, state and the action object. Previous value of state is 0$ and action is for deposit, so the reducer will update the new state by depositing 10$ amount.

you can see in the UI balance, it changed from 0 to 10$.

</p>

## [Redux by definition](What-is-redux#redux-by-definition)

### It is a Predictable State Container for JS Apps.

#### <font color="#0070f3">Predictable</font> because it helps you write applications that behave consistently, and can run in different environments (client, server, and native).

#### <font color="#0070f3">Centralized</font> because of this feature, we don't need to lift state to parent components and we can use state from any component we want due to this centralized behavior.

#### <font color="#0070f3">Debuggable</font> There is an extension called Redux DevTools which is an excellent tool to debug Redux applications. Using this tool you can see when, where, why, and how your application's state changed.

#### <font color="#0070f3">Flexible</font> because it works with any UI layer, and has a large ecosystem of addons.

If you're confused about anything related to this topic feel free to ask me 😉!
