function HomeHeader() {
  return (
    <header className="header">
      <img src={logo} />
      <img src={home} onClick={() => navigate('../myproject')} />
    </header>
  );
}
export default HomeHeader;
