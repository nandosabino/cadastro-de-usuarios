import PropTypes from "prop-types";

import { Button } from "./styles";

function DefaultButton({ children, theme, hasHover = false, ...props }) {
  return (
    <Button {...props} theme={theme} $hasHover={hasHover}>
      {children}
    </Button>
  );
}

DefaultButton.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
  hasHover: PropTypes.bool,
};

export default DefaultButton;
