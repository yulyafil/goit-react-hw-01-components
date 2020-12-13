import PropTypes from 'prop-types';
import './Statistics.css'

const Statistics = ({ title, stats }) => {
    const defaultTitle = '';
    return (
        <div className="Statistisc">
            <h2 className="Title">{title ?? defaultTitle} </h2>

            <ul className="Statlist">
                {stats.map(stat => (
                  <li className="Item" key={stat.id}>
                    <span className="Label">{stat.label}</span>
                    <span className="Percentage">{stat.percentage}%</span>
                </li>  
                ))
                 }
                
            </ul>
        </div>
        
    );
};

Statistics.prototype = {
    title: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,

}



export default Statistics;