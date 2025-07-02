// components/SmoothScrollLink.jsx
import { Link as ScrollLink } from "react-scroll";

export const SmoothScrollLink = ({ to, children, ...props }) => {
  return (
    <ScrollLink
      to={to}
      smooth={true}
      duration={500}
      offset={-80} // Adjust this based on your header height
      spy={true}
      activeClass="active"
      {...props}
    >
      {children}
    </ScrollLink>
  );
};
