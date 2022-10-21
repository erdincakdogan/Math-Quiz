import UnderLine from "../atoms/UnderLine";
const Header = ({ type, children }) => {
  return (
    <div className={type}>
      {children}
      <UnderLine />
    </div>
  );
};

export default Header;
