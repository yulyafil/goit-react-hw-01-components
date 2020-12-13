import './Section.css';
import PropTypes from 'prop-types';
function Section({ title, children}) {
    return (
        <div className="Section">
            {<h2> {title} </h2>}
            {children}
        </div>
    );
}  
   
Section.prototype = {
    title: PropTypes.string,
};

export default Section;