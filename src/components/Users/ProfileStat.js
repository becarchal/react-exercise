import React, {PropTypes} from 'react';

export default class ProfileStat extends React.Component{

    render(){
        const {value, label} = this.props;
        return (
            <div>
                <span>
                    <h2>{value}</h2>
                    <small>{label}</small>
                </span>
            </div>
        )
    }
}