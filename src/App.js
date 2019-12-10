import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Content from './components/content/content';
import Filter from './components/filter/filter';
import year from './data/year';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Year: [],
      monthAndYear: [],
      selectedYear: '2019',
      selectedMonth: 'ALL'
    };
  }
  
  componentDidMount() {
    this.setState({ monthAndYear: year }, () => {
      // console.log(this.state.Year, ' new data');
    });
    const newData = year.Year.map(y => {
      if (y === '2019') {
        return { selected: true, name: y}
      } else {
        return { selected: false, name: y };
      }
    });
    this.setState({ Year: newData }, () => {
      // console.log(this.state.Year, ' new data');
    });
  }

  setYear = (e) => {
    this.setState({ selectedYear: e.target.value }, () => {
      console.log(e, ' set year');
    });
  }

  setMonth = e => {
    this.setState({ selectedMonth: e.target.value }, () => {
      console.log(this.state, ' set month');
    });
  }

  updateRoute = () => {
    const history = useHistory();
    history.push(`/details/2019/All`);
  }

  render() {
    return (
      <div className="App">
        <br />
        <Router>
          <div className="filter-container">
            <Filter
              setYear={this.setYear}
              setMonth={this.setMonth}
              month={this.state.monthAndYear.Month}
              year={this.state.monthAndYear.Year} />

            {/* <div className="search-parent">
              <NavLink to={`/details/${this.state.selectedYear}/${this.state.selectedMonth}`} className="nav-link"> Search </NavLink>
            </div> */}
          </div>
          <Content
            updateRoute={this.updateRoute}
            selectedMonth={this.state.selectedMonth}
            selectedYear={this.state.selectedYear} />
          <Switch>
            {/* <Route 
              path="/details/:year?/:month?" 
              render={(props) => <Content 
                                    {...props} 
                                    updateRoute={this.updateRoute}
                                    selectedMonth={this.state.selectedMonth}
                                    selectedYear={this.state.selectedYear} />}
            ></Route> */}
            {/* <Route path="/details/:year?/:month?" component={Content}></Route> */}
          </Switch>
        </Router>
      </div>
    );
  }
}
