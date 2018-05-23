class App extends React.Component {
	constructor(props, context) {
    super(props, context);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.state = {
      currentPage: 0
		};
  }

	render() {
	  return (
	    <div>
	        <Header/>
	    </div>
	    if({this.state.currentPage === 0}) {
	      <UserInformation/>
	    } else if ({this.state.currentPage === 1}) {
	    	<UserInformation/>
	    }
	  );
	}
}

// 0
class Checkout extends React.Component {
	constructor(props, context) {
    super(props, context);
  }
}

class CheckoutBtn extends React.Component {
	constructor(props, context) {
  	super(props, context);
  	this.checkoutClick = this.checkoutClick.bind(this);
  	this.state = {};
  }

  checkoutClick() {
  	console.log('checkout clicked');

  	// TODO: transition to UserInformation
  }

  render() {
  	return (
  		<button type={this.props.behavior} onClick={this.checkoutClick}>Checkout</button>
  	);
  }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Multistep Checkout Experience</h1>
         </div>
      );
   }
}

// 1
class UserInformation extends React.Component {
	constructor(props, context) {
  	super(props, context);

  	this.handleFormSubmit = this.handleFormSubmit.bind(this);
  	this.handleChangeName = this.handleChangeName.bind(this);
  	this.handleChangeEmail = this.handleChangeEmail.bind(this);
  	this.handleChangePass = this.handleChangePass.bind(this);

  	this.state = {
  		name: '',
  		email: '',
  		password: ''
  	};
  }

  handleFormSubmit(event) {
  	event.preventDefault();

  	// TODO: persiste to db
  	// TODO: transition to ShiptTo
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
}

// 2
class ShiptTo extends React.Component {

}

// 3
class CreditCard extends React.Component {

}

// 4
class Confirmation extends React.Component {

}

ReactDOM.render(<App />, document.getElementById('app'));

