import home from 'images/home.svg';
import logo from 'images/logo.svg';
import { useNavigate } from 'react-router-dom';

function HomeHeader() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <img src={logo} />
      <img src={home} onClick={() => navigate('/myproject')} />
    </header>
  );
}
export default HomeHeader;
