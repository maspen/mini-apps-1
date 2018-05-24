class App extends React.Component {
	constructor(props, context) {
    super(props, context);

    this.handleClickNext = this.handleClickNext.bind(this);
    this.returnToHomepage = this.returnToHomepage.bind(this);
    this.transition = this.transition.bind(this);
    this.nextPage = this.nextPage.bind(this);

    this.state = {
      currentPage: 0
		};
  }

  transition(id) {
  	if(id === 0) {
  		return ( 
  			<div><Header />
  			<button onClick={this.handleClickNext}>Checkout</button></div> );
  	} else if (id === 1) {
  		return ( 
  			<div><Header />
  			<UserInformation changePage={this.nextPage.bind(this)} /></div> );
  	} else if (id === 2) {
  		return (
				<div><Header />
				<ShiptTo changePage={this.nextPage.bind(this)} /></div>
  		);
  	} else if (id === 3) {
  		return (
				<div><Header />
				<CreditCard changePage={this.nextPage.bind(this)} /></div>
  		);
  	} else if (id === 4) {
  		return (
				<div><Header />
				<Confirmation backToHomepage={this.returnToHomepage.bind(this)} /></div>
  		);  		
  	}
  };

  handleClickNext(event) {
  	event.preventDefault();

  	this.nextPage();
  };

  nextPage() {
  	var nextState = this.state.currentPage + 1;
  	this.setState({currentPage: nextState});
  }

  returnToHomepage() {
  	this.setState({currentPage: 0});
  }

  render() {
  	console.log('render currentPage', this.state.currentPage);
  	return this.transition(this.state.currentPage);
  };
};

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Multistep Checkout Experience</h1>
         </div>
      );
   }
}

class UserInformation extends React.Component {
	constructor(props, context) {
  	super(props, context);

  	this.handleFormSubmit = this.handleFormSubmit.bind(this);
  	this.handleChangeName = this.handleChangeName.bind(this);
  	this.handleChangeEmail = this.handleChangeEmail.bind(this);
  	this.handleChangePass = this.handleChangePass.bind(this);
  	this.post = this.post.bind(this);

  	this.state = {
  		name: '',
  		email: '',
  		password: ''
  	};
  }

  handleFormSubmit(event) {
  	event.preventDefault();

  	// call App to increment state for page transition
  	this.props.changePage();

  	this.post();
  }

  post() {
		var thisState = this.state;
		console.log('post state', JSON.stringify(thisState));

		var url = 'http://localhost:3000/user';
		var fetched = fetch(url, {
			method: 'POST',
			body: JSON.stringify(thisState),
			headers: {
		    'Content-Type': 'application/json'
		  }
		})
		.then(response => {
			console.log('response.statusText', response.statusText);

			return response.json()
		})
		.catch(error => {
			console.log('error,txt', error);
		})
		.then(data => {
			console.log('data', data);
		})
	}

  handleChangeName(event) {
		this.setState({name: event.target.value});
  }
  handleChangeEmail(event) {
  	this.setState({email: event.target.value});
  }
  handleChangePass(event) {
  	this.setState({password: event.target.value});
  }

  render() {
  	return (
  		<form onSubmit={this.handleFormSubmit}>
			  <div>
			    <label>Name:</label>
			    <input type="text" onChange={this.handleChangeName}></input>
			  </div>
			  <div>
			    <label>E-mail:</label>
			    <input type="text" onChange={this.handleChangeEmail}></input>
			  </div>
			  <div>
			    <label>Password:</label>
			    <input type="text" onChange={this.handleChangePass}></input>
			  </div>
			  <div>
			  	<input type="submit" value="Next"></input>
			  </div>
			</form>
  	);
  }
};

class ShiptTo extends React.Component {
	constructor(props, context) {
  	super(props, context);

  	this.handleFormSubmit = this.handleFormSubmit.bind(this);
  	this.handleChangeLine1 = this.handleChangeLine1.bind(this);
  	this.handleChangeLine2 = this.handleChangeLine2.bind(this);
  	this.handleChangeCity = this.handleChangeCity.bind(this);
  	this.handleChangeSate = this.handleChangeSate.bind(this);
  	this.handleChangeZip = this.handleChangeZip.bind(this);
  	this.handleChangePhone = this.handleChangePhone.bind(this);

  	this.state = {
  		line1: '',
  		line2: '',
  		city: '',
  		state: '',
  		zip: '',
  		phone: ''
  	};
  }

  handleFormSubmit(event) {
  	event.preventDefault();

  	// call App to increment state for page transition
  	console.log('this.props ', this.props);
  	this.props.changePage();

  	// TODO: persiste to db
  	// TODO: transition to ShiptTo
	}

	handleChangeLine1(event) {
		this.setState({line1: event.target.value});
	}
	handleChangeLine2(event) {
		this.setState({line2: event.target.value});
	}
	handleChangeCity(event) {
		this.setState({city: event.target.value});
	}
	handleChangeSate(event) {
		this.setState({state: event.target.value});
	}
	handleChangeZip(event) {
		this.setState({zip: event.target.value});
	}
	handleChangePhone(event) {
		this.setState({phone: event.target.value});
	}

  render() {
  	return (
  		<form onSubmit={this.handleFormSubmit}>
			  <div>
			    <label>Line 1:</label>
			    <input type="text" onChange={this.handleChangeLine1}></input>
			  </div>
			  <div>
			    <label>Line 2:</label>
			    <input type="text" onChange={this.handleChangeLine2}></input>
			  </div>
			  <div>
			    <label>City:</label>
			    <input type="text" onChange={this.handleChangeCity}></input>
			  </div>
			  <div>
			    <label>State:</label>
			    <input type="text" onChange={this.handleChangeSate}></input>
			  </div>
			  <div>
			    <label>Zip:</label>
			    <input type="text" onChange={this.handleChangeZip}></input>
			  </div>
			  <div>
			    <label>Phone:</label>
			    <input type="text" onChange={this.handleChangePhone}></input>
			  </div>			  		  
			  <div>
			  	<input type="submit" value="Next"></input>
			  </div>
			</form>
  	);
  }
};

class CreditCard extends React.Component {
	constructor(props, context) {
  	super(props, context);

  	this.handleFormSubmit = this.handleFormSubmit.bind(this);
  	this.handleChangeCCNumber = this.handleChangeCCNumber.bind(this);
  	this.handleChangeExpirty = this.handleChangeExpirty.bind(this);
  	this.handleChangeCVV = this.handleChangeCVV.bind(this);
  	this.handleChangeZip = this. handleChangeZip.bind(this);

  	this.state = {
  		ccNum: '',
  		expiry: '',
  		cvv: '',
  		zip: ''
  	}
  }

  handleFormSubmit(event) {
  	event.preventDefault();

  	// call App to increment state for page transition
  	console.log('this.props ', this.props);
  	this.props.changePage();

  	// TODO: persiste to db
  	// TODO: transition to ShiptTo
	}

	handleChangeCCNumber(event) {
		this.setState({ccNum: event.target.value });
	}
	handleChangeExpirty(event) {
		this.setState({expiry: event.target.value });
	}
	handleChangeCVV(event) {
		this.setState({cvv: event.target.value });
	}
	handleChangeZip(event) {
		this.setState({zip: event.target.value });
	}

  render() {
  	return (
  		<form onSubmit={this.handleFormSubmit}>
			  <div>
			    <label>Credit Card Number:</label>
			    <input type="text" onChange={this.handleChangeCCNumber}></input>
			  </div>
			  <div>
			    <label>Excpiration Date:</label>
			    <input type="text" onChange={this.handleChangeExpirty}></input>
			  </div>
			  <div>
			    <label>CVV code:</label>
			    <input type="text" onChange={this.handleChangeCVV}></input>
			  </div>
			  <div>
			    <label>Zip:</label>
			    <input type="text" onChange={this.handleChangeZip}></input>
			  </div>
			  <div>
			  	<input type="submit" value="Next"></input>
			  </div>
			</form>  		
  	);
  }
};

class Confirmation extends React.Component {
	constructor(props, context) {
  	super(props, context);
  }

  purchaseClicked(event) {
  	event.preventDefault();

  	this.props.backToHomepage();
  }

/* ! 'Purchase button', when clicked returns to homepage

The final step is a confirmation page which summarizes the data 
collected in the prior three steps. This page contains a Purchase button 
that completes the purchase. When the purchase is complete, the user is 
returned to the homepage.
*/
};

ReactDOM.render(<App />, document.getElementById('app'));