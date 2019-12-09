import React, { Component } from 'react';
import './filter.css';

export default class Filter extends Component {

    render() {

        return (
            <div className="filterParent">
                <select onChange={e => this.props.setYear(e)}>
                    {this.props.year ?
                        this.props.year.map((y) =>
                            <option key={y}>
                                {y}
                            </option>
                        )
                        : ''
                    }
                </select>
                <select className="select-month" onChange={e => this.props.setMonth(e)}>
                    {this.props.month ?
                        this.props.month.map((m) =>
                            <option key={m}>
                                {m}
                            </option>
                        )
                        : ''
                    }
                </select>
            </div>
        )
    };
}