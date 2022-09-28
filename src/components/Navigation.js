import { Component } from 'inferno';

export class SiteNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <div>
        SiteNavigation is at: { this.state.counter }
      </div>
    )
  }
}