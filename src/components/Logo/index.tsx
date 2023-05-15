type Props = {
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  size?: string;
};

const Logo = ({
  fill = "currentColor",
  stroke = "transparent",
  strokeWidth = 0,
  size = "4rem",
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 522 557.4"
      width={size}
      height={size}
    >
      <path
        d="m426.93 505-28.29 28.29-56.56-56.57-70.72 70.68-14.14-14.14a120.2 120.2 0 0 1-13-154.39l-44.78-44.78A120 120 0 0 1 45.09 151.42L186.51 10l28.29 28.28L73.37 179.71a80 80 0 0 0 97.21 125.49l-68.92-68.93 120.21-120.2c66.28-66.29 174.13-66.29 240.41 0s66.29 174.13 0 240.41l-91.92 91.93Zm-84.85-84.85L434 328.2a130 130 0 0 0-183.85-183.85l-91.92 91.92 42.42 42.43 91.93-91.92a70 70 0 1 1 99 99l-91.93 91.92ZM273.15 489l40.64-40.63-40.64-40.64a80.3 80.3 0 0 0 0 81.27Zm-1.79-139.63 91.93-91.92a30 30 0 1 0-42.43-42.43L228.94 307Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default Logo;
