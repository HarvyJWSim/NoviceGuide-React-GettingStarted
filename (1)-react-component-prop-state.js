const Subheading = (props) =>
{
	return (
  	<h3>{props.title}</h3>
  );
};

class SubheadingWithState extends React.Component
{
	state = { numOfDay: 99 };

  handleClickEvent = () =>
	{
		this.setState((prevState) => ({ numOfDay: prevState.numOfDay - 1 }));
  };

	render()
  {
  	return (
      <h3 onClick={this.handleClickEvent}>
        Counting down {this.state.numOfDay} days to Annabelle's birthday
      </h3>
    );
  }
}

ReactDOM.render(<SubheadingWithState/>, mountNode);
