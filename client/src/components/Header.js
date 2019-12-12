import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

class Header extends React.Component{
    render(){
        return(
            <div className="ui tabular menu">
              <Link to="/" className="active item">TODO</Link>
              <div className="right menu">
                <div>
                    <GoogleAuth />
                </div>
              </div>
          </div>  
        )
    }
}

export default Header;