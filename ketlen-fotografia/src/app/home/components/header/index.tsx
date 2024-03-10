import Image from 'next/image';
import Logo from '../../../assets/imagens/logo.svg';
import NavBar from './components/navbar';

const Header = () => {
  return (
    <div className="flex h-60 w-full flex-col items-center justify-center gap-12 bg-gray-100 py-7">
      <Image src={Logo} alt="logo" />
      <NavBar />
    </div>
  );
};

export default Header;
