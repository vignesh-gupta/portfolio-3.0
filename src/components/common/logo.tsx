"use client";

type LogoProps = {
  className?: string;
  height: number;
  width: number;
};

const Logo = ({ className, height, width }: LogoProps) => {
  return (
    <svg
      width={height}
      height={width}
      viewBox={`0 0 92 60`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <path
        d="M0 0H14.0063V5.7732H6.06723V54.2268H14.0063V60H0V0Z"
        fill="hsl(var(--foreground))"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.7897 14.4007C57.2272 10.6886 52.3223 8.83249 46.075 8.83249C42.0994 8.83249 38.5886 9.73323 35.5424 11.5347C32.4962 13.2816 30.1212 15.7655 28.4173 18.9863C27.5541 20.6406 26.9164 22.429 26.5042 24.3515H18.1493L14.0063 33.4806H26.1476C26.4952 36.3109 27.2776 38.8765 28.4948 41.1774C30.2502 44.3437 32.7027 46.8003 35.8521 48.5472C39.0532 50.2941 42.7964 51.1675 47.0818 51.1675C50.3861 51.1675 53.5098 50.567 56.4527 49.366C59.3957 48.165 61.8739 46.4727 63.8875 44.2891L58.1565 38.0658C56.9174 39.2668 55.3427 40.2221 53.4323 40.9318C51.522 41.5869 49.5342 41.9144 47.469 41.9144C44.4228 41.9144 41.8929 41.1501 39.8793 39.6216C37.9175 38.0931 36.7558 36.0461 36.3943 33.4806H74.7714L77.9937 24.3515H65.7016C64.9768 20.3355 63.3395 17.0185 60.7897 14.4007ZM55.905 24.3515C55.4549 22.6178 54.5791 21.1843 53.2774 20.0509C51.522 18.5223 49.2244 17.7581 46.3848 17.7581C43.6483 17.7581 41.4024 18.5223 39.647 20.0509C38.3761 21.1503 37.4786 22.5839 36.9546 24.3515H55.905Z"
        fill="hsl(var(--foreground))"
      />
      <path
        d="M77.9937 0H92V60H77.9937V54.2268H85.9328V5.7732H77.9937V0Z"
        fill="hsl(var(--foreground))"
      />
    </svg>
  );
};

export default Logo;