import React    from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container mb-4'>
        <header className='blog-header py-3'>
          <div className='row flex-nowrap justify-content-between align-items-center'>
            <div className='col-4 pt-1'>
              <a className='text-muted d-none' href='#'>Subscribe</a>
            </div>
            <div className='col-4 text-center'>
              <Link className='blog-header-logo text-dark' to='/'>Little Helpers</Link>
            </div>
            <div className='col-4'></div>
          </div>
        </header>
      </div>
    )
  }
}

export default Navbar;