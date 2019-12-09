import React, { Component } from 'react';
import './content.css';
import holiday from '../../data/holiday';

export default class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedHolidayYear: ''
        };
        this.selectedHolidayYear = null;
    }

    componentDidMount() {
        const selHoliday = holiday;
        const year = this.props.match.params.year;
        this.setState({ selectedHolidayYear: selHoliday[year] }, () => {
            // console.log('componentDidMount');
        });
        // this.props.updateRoute();
    }

    componentDidUpdate(prevProps) {
        // console.log(prevProps, 'componentDidUpdate');
        this.selectedHolidayYear = this.props.selectedYear;
    }
    

    render() {
        const selHoliday = holiday[this.props.selectedYear];
        console.log(this.props, ' from render');

        return (
            <div className="contentParent">
                {selHoliday ?
                    selHoliday.map((h) =>
                        <div className="holiday-card" key={h.name + h.month}>
                            <div className="date">
                                <p className="date-text">{h.month + ' ' + h.date}</p>
                                <p className="day-text">{h.day}</p>
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