const accordionData=[
    {
        title:"What is the correct way to conditionally render an element in React ?",
        ans:"The correct way to conditionally render an element in React is { condition && <Element /> }.The && operator allows you to conditionally render an element based on a condition.If the condition is true, the element will be rendered;if the condition is false, the element will not be rendered."
    },

    {
        title:"What is the correct way to conditionally render a component with props in React ?",
        ans:"The correct way to conditionally render a component with props in React is { condition && <MyComponent prop1={value1} prop2={value2} /> }.The && operator allows you to conditionally render a component based on a condition.If the condition is true, the component will be rendered with the specified props; if the condition is false, the component will not be rendered.You can pass the component with the props as the right - hand operand of the && operator."
    },
    {
        title:"What is the correct way to conditionally render a component with props in React ?",
        ans:"The correct way to conditionally render a component with props in React is { condition && <MyComponent prop1={value1} prop2={value2} /> }.The && operator allows you to conditionally render a component based on a condition.If the condition is true, the component will be rendered with the specified props; if the condition is false, the component will not be rendered.You can pass the component with the props as the right - hand operand of the && operator."
    },
    {
        title:"Can you use JavaScript expressions in JSX ?",
        ans:"You can use JavaScript expressions in JSX by wrapping them in curly braces.This allows you to insert dynamic values into your JSX code."
    },
    {
        title:"What is the purpose of the componentDidMount method in a class component in React ?",
        ans:"The purpose of the componentDidMount method in a class component in React is to perform actions after the component is mounted.It is called once after the component is mounted and is used to trigger side effects or to make API calls."
    },
    {
        title:"Can you use the useReducer hook with an object as the second argument in React ?",
        ans:"You cannot use the useReducer hook with an object as the second argument in React because the second argument must be a function. The useReducer hook expects a reducer function as the second argument, which takes the current state and an action as arguments and returns the new state."
    },
    {
        title:"What is the correct way to conditionally render a component with state in React ?",
        ans:"The correct way to conditionally render a component with state in React is { condition && <MyComponent state={this.state} /> }.The && operator allows you to conditionally render a component based on a condition.If the condition is true, the component will be rendered with the specified state; if the condition is false, the component will not be rendered.You can pass the component with the state as the right - hand operand of the && operator.You can access the component's state using the this.state object."
    },
]
export default accordionData;