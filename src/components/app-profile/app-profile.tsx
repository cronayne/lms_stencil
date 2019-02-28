import { Component, Prop, State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true
})
export class AppProfile {
  @Prop() history: RouterHistory;
  @State() user: AppUser;
  @Prop({ context: 'isServer' }) private isServer: boolean;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  render() {
    if (this.user) {
    let keys = Object.keys(this.user);
    return <div class="app-profile">
        <h2>User Claims</h2>
        <ul>
          {keys.map(key => <li><span>{key}</span>: {this.user[key]}</li>)}
        </ul>
        <button onClick={this.logout}>
          Logout
        </button>
      </div>;
    }
  }

  componentWillLoad() {
    if (!this.isServer) {
      let token = JSON.parse(localStorage.getItem('okta_id_token'));
      if (token) {
        this.user = token.claims;
      } else {
        this.history.push('/login', {});
      }
    }
  }

  logout() {
    if (!this.isServer) {
      localStorage.removeItem('okta_id_token');
      location.reload();
    }
  }
}
