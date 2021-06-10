import Logo from "../svgIcons/Logo";

export default function Footer() {
  return (
    <div className="bg-footerDarkBlue text-gray-300 rounded-tr-veryLarge">
      <div className="grid grid-cols-4 max-w-6xl mx-auto py-16">
        <div className="ml-10">
          <Logo />
        </div>
        <div>
          <p className="text-white font-semibold">Product</p>
          <ul className="mt-4">
            <li className="mb-1">
              <a className="hover:underline" href="/">
                Overview
              </a>
            </li>
            <li className="mb-1">
              <a className="hover:underline" href="/">
                Pricing
              </a>
            </li>
            <li className="mb-1">
              <a className="hover:underline" href="/">
                Marketplace
              </a>
            </li>
            <li className="mb-1">
              <a className="hover:underline" href="/">
                Features
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/">
                Integrations
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold">Company</p>
          <ul className="mt-4">
            <li className="mb-1">
              <a className="hover:underline" href="/">
                About
              </a>
            </li>
            <li className="mb-1">
              <a className="hover:underline" href="/">
                Team
              </a>
            </li>
            <li className="mb-1">
              <a className="hover:underline" href="/">
                Blog
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold">Connect</p>
          <ul className="mt-4">
            <li className="mb-1">
              <a className="hover:underline" href="/">
                Contact
              </a>
            </li>
            <li className="mb-1">
              <a className="hover:underline" href="/">
                Newsletter
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
