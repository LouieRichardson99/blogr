export default function DropDownArrow({ isOpen }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="7"
      className={`my-auto ml-1.5 ${
        isOpen && "rotate-180 transform"
      } stroke-current md:text-white text-lightRed`}
    >
      <path fill="none" strokeWidth="2" d="M1 1l4 4 4-4" />
      <rect />
    </svg>
  );
}
