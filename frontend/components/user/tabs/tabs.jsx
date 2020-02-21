import React from 'react';
import AboutTabContainer from './about_tab_container';
import SpotTabContainer from './spot_tab_container';
import ReviewTab from './review_tab_container';

class Headers extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const selected = this.props.selectedPane;
    const headers = this.props.panes.map((pane, index) => {
      const title = pane.title;
      const klass = index === selected ? 'active' : '';

      return (
        <li
          key={index}
          className={klass}
          onClick={() => this.props.onTabChosen(index)}>
          {title}{' '}
        </li>
      );
    });
    return (
      <ul className='tab-header'>
        {headers}
      </ul>

    );
 }
}

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPane: 0
    };
    this.selectTab = this.selectTab.bind(this);
    this.panes = [
      { title: 'About', content: <AboutTabContainer user={this.props.user}/> },
      { title: 'My Spot', content: <SpotTabContainer user={this.props.user}/> },
      { title: 'Reviews', content: <ReviewTab user={this.props.user}/> }
    ];

  }

  selectTab(num) {
    this.setState({selectedPane: num});
  }

  render() {
    const pane = this.panes[this.state.selectedPane];

    return (
      <div>
        <div className='tabs'>
          <Headers
            selectedPane={this.state.selectedPane}
            onTabChosen={this.selectTab}
            panes={this.panes}>
          </Headers>
          <div className='tab-content'>
            <article>
              {pane.content}
            </article>
          </div>
        </div>
      </div>
    );
  }
}
