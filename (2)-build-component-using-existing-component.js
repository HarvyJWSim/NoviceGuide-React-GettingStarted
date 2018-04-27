class Give extends React.Component {	
  render() {
    return (
      <button>
        Give present
      </button>
    );
  };
}

const Outcome = (props) => {return (<h2>Annabelle says thanks</h2>)};

class GivePresent extends React.Component {
  state = { numOfPresents: 0 };
  
  addPresentCount = () => {
    this.setState((prevState) => ({
      numOfPresents: prevState.numOfPresents + 1 
    }));
  };
  
  render() {
    return (
      <div> 
        <Give />
        <Outcome />
      </div>
    )
  }
}

ReactDOM.render(<GivePresent/>, mountNode);

