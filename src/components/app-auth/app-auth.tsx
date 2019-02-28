import { Component, Prop, State, Element, Listen } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

declare const OktaAuth: any;

@Component({
  tag: 'app-auth',
  styleUrl: 'app-auth.css'
})

export class AppAuth {

  @State() authClient: any;
  @Element() host: HTMLElement;
  @Prop() history: RouterHistory;

  constructor() {
    this.authClient = new OktaAuth({
      clientId: '0oabnp8y4Zdm6rCxg356',
      url: 'https://dev-344130.okta.com',
      issuer: 'default'
    });
  }

  login() {
    let inputs = this.host.querySelectorAll('input');
    let user = {
      username: inputs[0].value,
      password: inputs[1].value
    };

    return this.authClient.signIn(user)
      .then(res => {
        if (res.status === 'SUCCESS') {
          return this.authClient.token
            .getWithoutPrompt({
              responseType: 'id_token',
              scopes: ['openid', 'profile', 'email'],
              sessionToken: res.sessionToken,
              redirectUri: 'http://localhost:3333'
            })
            .then(token => {
              localStorage.setItem(
                'okta_id_token',
                JSON.stringify(token)
              );
              this.history.push('/profile', {});
            });
        } else {
          throw `Unable to handle ${res.status} status code`;
        }
      })
      .fail(function(err) {
        console.error(err);
      });
  }

  render() {
    return (
      <form class="app-auth">
        <div class="form-item">
          <label>
            Username:
            <input type="text" name="username" autocomplete="username" />
          </label>
        </div>
        <div class="form-item">
          <label>
            Password:
            <input
              type="password"
              name="password"
              autocomplete="current-password"
            />
          </label>
        </div>
        <div class="form-actions">
          <button type="button" onClick={() => this.login()}>
            Login
          </button>
        </div>
      </form>
    );
  }

  componentWillLoad() {
    let idToken = localStorage.getItem('okta_id_token');
    if (idToken) {
      this.history.push('/profile', {});
    }
  }

  @Listen('keydown.enter')
  handleEnter() {
    this.login();
  }
}


