import React, { Component } from 'react';
import './content.css';
import holiday from '../../data/holiday';
import days from '../../data/day';

export default class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedHolidayYear: ''
        };
        this.selectedHolidayYear = null;
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
    

    render() {
        let selHoliday;
        if (this.props.selectedMonth.toLowerCase() === 'all') {
            selHoliday = holiday[this.props.selectedYear];
        } else {
            selHoliday = holiday[this.props.selectedYear].filter(h => this.props.selectedMonth === h.month);
        }
        console.log(days);

        return (
            <div className="contentParent">
                {selHoliday ?
                    selHoliday.map((h) =>
                        <div className="holiday-card" key={h.name + h.month}>
                            <div className="date">
                                <p className="date-text">{h.month + ' ' + h.date}</p>
                                <p className="day-text">{days[h.day]}</p>
                            </div>
                            <div className="name-type">
                                <div className="name">{h.name}</div>
                                <div className="type">{h.type}</div>
                            </div>
                        </div>
                    ) : ''}
            </div>
        )
    };
}