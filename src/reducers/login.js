export default class Login extends React.Component {

  constructor() {
    this.state = {
      user: ‘’,
      password: ‘’
    };
  }


  login(e) {
    e.preventDefault();

    Auth.login(this.state.user, this.state.password)
      .catch(function(err) {
        console.log(“Virhe sisäänkirjautumisessa”, err);
      });
  }

  render() {
    return (
        <form role=“form”>
        <div className=“form-group”>
          <input type=“text” valueLink={this.linkState(‘user’)}placeholder=“Käyttäjätunnus” />
          <input type=“password” valueLink={this.linkState(‘password’)} placeholder=“Salasana” />
        </div>
        <button type=“submit” onClick={this.login.bind(this)}>Lähetä</button>
      </form>
    </div>
    );
  }
}
