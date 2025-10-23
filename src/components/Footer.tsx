const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-8">
      <div className="container-center">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">Fendi ClubGG</h3>
            <p className="text-gray-300">מועדון הפוקר המוביל בישראל</p>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <p className="text-gray-400">
              © {currentYear} Fendi ClubGG. כל הזכויות שמורות.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
