let presentData = [
	{	count: 1,
  	name: "Mashed potatoes",
  	country: "Aus"
  },
	{	count: 2,
  	name: "Purple potatoes",
  	country: "Can"
  },
];

const Present = (props) => {
	return (
    <div>
      <h4>
        Received presents {props.count} : {props.name}
      </h4>
      <h5>
        Country of origin: {props.country}
      </h5>
      <h3>
      Thanks
      </h3>
    </div>
  );
};

const PresentList = (props) => {
	return (
  	<div>
    	{props.data.map(present => <Present {...present} />)}
    </div>
  );
};

ReactDOM.render(<PresentList data={presentData} />, mountNode);
