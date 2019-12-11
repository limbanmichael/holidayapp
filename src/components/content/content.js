import React, { Component } from 'react';
import './content.css';
import holiday from '../../data/holiday';
import days from '../../data/day';
import months from '../../data/months';

export default class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedHolidayYear: ''
        };
        this.selectedHolidayYear = null;
        this.holidaySel = null;
    }

    componentDidMount() {
        // const selHoliday = holiday;
        // const year = this.props.match.params.year;
        // this.setState({ selectedHolidayYear: selHoliday[year] }, () => {
        //     console.log('componentDidMount');
        // });
    }

    componentDidUpdate(prevProps) {
        // console.log(prevProps, 'componentDidUpdate');
        this.selectedHolidayYear = this.props.selectedYear;
    }
    
    toggleCard = id => {
        this.setState({triggerRender: !this.state.triggerRender})
        this.holidaySel.map(h => {
            if (h.id === id) {
                h.showDetails = !h.showDetails
                console.log(h);
                console.log(this.state);
            }
            return h;
        });
    };
    

    render() {
        let selHoliday;
        const propMonths = this.props.selectedMonth.toLowerCase();
        if (propMonths === 'all' || propMonths === '0') {
            selHoliday = holiday[this.props.selectedYear];
            this.holidaySel = selHoliday;
        } else {
            selHoliday = holiday[this.props.selectedYear].filter(h => this.props.selectedMonth === h.month);
            this.holidaySel = selHoliday;
        }

        return (
            <div className="contentParent">
                {this.holidaySel ?
                    this.holidaySel.map((h) =>
                        <div 
                            className="holiday-card" 
                            key={h.name + h.month}
                            onClick={(e) => this.toggleCard(h.id)}
                        >
                            {!h.showDetails?
                                <div className="date">
                                    <p className="date-text">{months[h.month] + ' ' + h.date}</p>
                                    <p className="day-text">{days[h.day]}</p>
                                </div>
                            : ''}
                            {!h.showDetails ?
                                <div className="name-type">
                                    <div className="name">{h.name}</div>
                                    <div className="type">{h.type}</div>
                                </div>
                            : ''}
                        </div>
                    ) : ''}
            </div>
        )
    };
}