export const CarIcon = ({ color = "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <defs>
      <style>
        {`.cls-1{fill:none;stroke:${color};stroke-miterlimit:10;stroke-width:1.91px;}`}
      </style>
    </defs>
    <circle className="cls-1" cx="6.27" cy="20.59" r="1.91" />
    <circle className="cls-1" cx="16.77" cy="20.59" r="1.91" />
    <line className="cls-1" x1="14.86" y1="20.59" x2="8.18" y2="20.59" />
    <path
      className="cls-1"
      d="M18.68,20.59H22.5V16.43A1.91,1.91,0,0,0,21,14.56l-2.32-.47a2.21,2.21,0,0,1-.51-.18,1.88,1.88,0,0,1-.82-.83l-.17-.35a4.78,4.78,0,0,0-4.27-2.64H9.16a5.69,5.69,0,0,0-5.27,3.57,1.91,1.91,0,0,1-1.77,1.2H1.5v5.73H4.36"
    />
    <line className="cls-1" x1="18.13" y1="13.91" x2="10.09" y2="13.91" />
    <path
      className="cls-1"
      d="M18.68,1.5h1A2.86,2.86,0,0,1,22.5,4.36v0a2.86,2.86,0,0,1-2.86,2.86h-1a1.91,1.91,0,0,1-1.91-1.91V3.41A1.91,1.91,0,0,1,18.68,1.5Z"
    />
    <line className="cls-1" x1="7.23" y1="4.36" x2="16.77" y2="4.36" />
    <line className="cls-1" x1="9.14" y1="6.27" x2="9.14" y2="4.36" />
    <line className="cls-1" x1="12" y1="6.27" x2="12" y2="4.36" />
  </svg>
);
