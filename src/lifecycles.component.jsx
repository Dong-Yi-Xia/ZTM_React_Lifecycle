import React from 'react';

class Lifecycles extends React.Component {

  //First call the Constructor. 
  //Which call the super(). Get all the React Component Methods such as lifecycles
  constructor() {
    super();
    console.log('constructor!');
  }

  //After constructor and render finish, once the basic component mount onto the page
  //componentDidMount lifecycle fires
  componentDidMount() {
    console.log('componentDidMount!');
  }

  //Any change to props/state, goes to updating phrase 
  //Rerender the component, NOT remount 
  //Just change part of the HTML 
  //componentDidUpdate get called after the update has been made to the DOM
  componentDidUpdate() {
    console.log('componentDidUpdate!');
  }


  // Unmounting phrase
  // The component is no longer showing on the page.
  // {this.state.showChild ? <Lifecycles text={this.state.text} /> : null}
  // When false, this component is off the page, therefore unmount lifecycle is called
  componentWillUnmount() {
    console.log('componentWillUnmount!');
  }


  // When props or state changes, it comes in as parameter 
  // Remember when parent state change, itself and all its chidlren gets rerendered 
  // When return true ==> rerender, 
  // When return false ==> doesn't rerender, nothing changed, componentDidUpdate not called
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate!', nextProps);
    return nextProps.text !== this.props.text;
  }



  //Second call the render method, that return the JSX, and evaluate the state and props
  render() {
    console.log('render!');
    return (
      <div className='lifecycles'>
        <h3>LIFECYCLES COMPONENT</h3>
        {this.props.text}
      </div>
    );
  }

}

export default Lifecycles;
