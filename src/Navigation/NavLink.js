import React from 'react';
import { Link} from 'react-router-dom';

import Contents from '../Components/Pops/Entry/Contents';

// import Ebook from '../UIComponents/Ebook/ebook';

import './NavLink.css';

const NavLink = () => {
 
  return (
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/members">Member</Link>
      </li>
      <li>
        <Link to="/library">Library</Link>
      </li>
      <li>
        <Contents id="myform" />
      </li>
      <li>
        {/* <Button name="Open book" clickHandle={handleClick} type="normal" />
        <Modal
          name="Ebook"
          onOpen= {open}
          onClose={() => setOpen(false)}
        >
          <Ebook />
        </Modal> */}
      </li>
    </ul>
  )
}

export default NavLink;
