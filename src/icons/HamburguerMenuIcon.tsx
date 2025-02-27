type Props = {
  onClick: () => void
}

export default function HamburguerMenuIcon({ onClick }: Props) {
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
        d="M3 5H21"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3 12H21"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3 19H21"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}