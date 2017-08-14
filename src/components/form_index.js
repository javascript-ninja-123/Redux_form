import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class FormIndex extends Component {

    render() {
        return (
            <div className="class-name">
                <Link to='/new' className='btn btn-primary'>new Post</Link>
            </div>
        );
    }
}


export default FormIndex
