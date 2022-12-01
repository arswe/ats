import Wrapper from '../assets/wrappers/BigSidebar';
import Logo from '../components/Logo';
import { useAppContext } from '../context/appContext';
import NavLinks from './NavLinks';

const BigSidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div className={showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'}>
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
