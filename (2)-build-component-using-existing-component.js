class Give extends React.Component {	
  render() {
    return (
      <button onClick={this.props.onClickFunction}>
        Give present
      </button>
    );
  };
}

const Outcome = (props) => {return (<h2>Annabelle says thanks receiving {props.numOfPresents} presents</h2>)};

class PresentCeremony extends React.Component {
  state = { numOfPresents: 0 };
  
  addPresentCount = () => {
    this.setState((prevState) => ({
      numOfPresents: prevState.numOfPresents + 1 
    }));
  };
  
  render() {
    return (
      <div> 
        <Give onClickFunction={this.addPresentCount}/>
        <Outcome numOfPresents={this.state.numOfPresents}/>
      </div>
    )
  }
}

ReactDOM.render(<PresentCeremony/>, mountNode);


