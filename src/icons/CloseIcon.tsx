type Props = {
  onClick: () => void
}

export default function CloseIcon({ onClick }:Props) {
  return (
    <svg
      width="25px"
      height="25px"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#000000"
      className="sm:hidden place-self-end"
      onClick={() => onClick()}
    >
      <path
        d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}