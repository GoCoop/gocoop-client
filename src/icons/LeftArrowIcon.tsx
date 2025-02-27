type Props = {
  className?: string;
  width: number;
  height: number;
  strokeColor?: string;
  strokeWidth?: number;
}

export default function LeftArrowIcon({
  className = '',
  width = 24,
  height = 24,
  strokeColor = '#000000',
  strokeWidth = 1.5
}: Props) {
  return (
    <svg 
      width={width} 
      height={height}
      viewBox="0 0 24 24" 
      strokeWidth="1.5" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      color="#000000"
    >
      <path 
        d="M21 12L3 12M3 12L11.5 3.5M3 12L11.5 20.5" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeLinecap="round" 
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}