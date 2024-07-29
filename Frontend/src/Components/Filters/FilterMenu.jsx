
import './FilterMenu.css';
import { Dropdown } from 'react-bootstrap';

const FilterMenu = () => {
  return (
    <Dropdown className="filter-menu">
      <Dropdown.Toggle  id="dropdown-basic">
        Filter
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#" className="menu-item active" id="menu-item-0">Most Popular</Dropdown.Item>
        <Dropdown.Item href="#" className="menu-item" id="menu-item-1">Best Rating</Dropdown.Item>
        <Dropdown.Item href="#" className="menu-item" id="menu-item-2">Newest</Dropdown.Item>
        <Dropdown.Item href="#" className="menu-item" id="menu-item-3">Price: Low to High</Dropdown.Item>
        <Dropdown.Item href="#" className="menu-item" id="menu-item-4">Price: High to Low</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FilterMenu;
