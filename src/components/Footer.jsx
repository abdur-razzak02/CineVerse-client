const Footer = () => {
  return (
    <div className="bg-slate-800">
      <footer className="footer py-10 px-5 lg:px-0 lg:w-4/5 mx-auto grid grid-cols-9 gap-5">
        <aside className="col-span-9 md:col-span-3">
          <img
            src="https://i.ibb.co.com/kyMh19B/cineverse.png"
            alt="logo"
            className="w-20 mb-3"
          />
          <p className="text-2xl font-semibold font-montserrat">CineVerse Movies Ltd.</p>
          <p>
          Bringing Stories to Life with Unforgettable Cinematic Experiences Across Genres, Cultures, and Boundaries for Everyone.
          </p>
        </aside>
        <nav className="col-span-3 lg:col-span-2">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Movies</a>
          <a className="link link-hover">Drama</a>
          <a className="link link-hover">Web Series</a>
          <a className="link link-hover">Entertainment</a>
        </nav>
        <nav className="col-span-3 lg:col-span-2">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="col-span-3 lg:col-span-2">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
