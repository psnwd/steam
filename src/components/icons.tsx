type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  Facebook: (props: IconProps) => (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Facebook F">
        <path
          id="Vector"
          d="M20.5037 11.25H17.5V8.75005C17.5 7.46005 17.605 6.64755 19.4537 6.64755H20.5387C21.2287 6.64755 21.7887 6.08755 21.7887 5.39755V3.83005C21.7887 3.1763 21.2875 2.61755 20.635 2.5738C19.88 2.52255 19.1237 2.4988 18.3662 2.50005C14.975 2.50005 12.5 4.5713 12.5 8.3738V11.25H10C9.31 11.25 8.75 11.81 8.75 12.5V15C8.75 15.69 9.31 16.25 10 16.25L12.5 16.2488V26.25C12.5 26.9401 13.06 27.5 13.75 27.5H16.25C16.94 27.5 17.5 26.9401 17.5 26.25V16.2463L20.2175 16.245C20.8525 16.245 21.3862 15.7688 21.4587 15.1375L21.745 12.6425C21.8312 11.9013 21.2512 11.25 20.5037 11.25Z"
          fill="#76808C"
        />
      </g>
    </svg>
  ),
  TwitterX: (props: IconProps) => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="TwitterX">
        <path
          id="Vector"
          d="M5.13831 3.5C4.38348 3.5 3.94102 4.35023 4.37269 4.96973L11.359 14.9548L4.34534 23.1533C3.89151 23.683 4.26747 24.5 4.96514 24.5H5.73988C6.08171 24.5 6.40688 24.35 6.62855 24.0898L12.7399 16.9303L17.3405 23.5042C17.778 24.1272 18.4916 24.5 19.2522 24.5H23.1419C23.8967 24.5 24.3392 23.6509 23.9075 23.0326L16.5361 12.4824L23.2171 4.65527C23.6044 4.20027 23.2812 3.5 22.6839 3.5H21.6972C21.3566 3.5 21.0325 3.64888 20.8108 3.90788L15.1621 10.5114L10.9603 4.49805C10.5239 3.87271 9.81147 3.5 9.04847 3.5H5.13831Z"
          fill="#76808C"
        />
      </g>
    </svg>
  ),
}
