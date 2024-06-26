import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';
import clsx from 'clsx';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => {
        return clsx(css.link, isActive && css.isActive);
          }}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={({ isActive }) => {
        return clsx(css.link, isActive && css.isActive);
          }}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}