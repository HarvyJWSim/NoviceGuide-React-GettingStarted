class Give extends React.Component {	
	givePresent = () => {
  	this.props.onClickFunction(this.props.presentCount);
  };
  
  render() {
  	return (
    	<button onClick={this.givePresent}>
      	Give {this.props.presentCount} present
      </button>
    );
  };
}

const Outcome = (props) => {return (<h2>Annabelle says thanks receiving {props.numOfPresents} presents</h2>)};

class PresentCeremony extends React.Component {
	state = { numOfPresents: 0 };
  
  addPresentCount = (presentCount) => {
  	this.setState((prevState) => ({
    	numOfPresents: prevState.numOfPresents + presentCount 
    }));
  };
  
  render() {
  	return (
    	<div> 
      	<Give presentCount={1} onClickFunction={this.addPresentCount}/>
        <Give presentCount={2} onClickFunction={this.addPresentCount}/>
        <Outcome numOfPresents={this.state.numOfPresents}/>
      </div>
    )
  }
}

ReactDOM.render(<PresentCeremony/>, mountNode);









