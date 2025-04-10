import { useState } from "react";
import { Button } from "react-bootstrap";

interface CustomButtonProps {
  label: string;
  buttonSize?: "sm" | "lg";
  disabled: boolean;
  type: "button" | "submit" | "reset" | undefined;
  handleClick?: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  buttonSize = "sm",
  disabled,
  type = "button",
  handleClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? "#53b3b7" : "#53b3b7",
    borderColor: isHovered ? "#53b3b7" : "#53b3b7",
    minWidth: 150,
  };

  const onClickHandler = () => {
    if (handleClick) {
      handleClick();
    }
  };

  return (
    <Button
      size={buttonSize}
      style={buttonStyle}
      disabled={disabled}
      type={type}
      onClick={onClickHandler}
      onMouseEnter={() => setIsHovered(true)} // Cambia el estado cuando se pasa el ratón
      onMouseLeave={() => setIsHovered(false)} // Vuelve al estado original cuando se deja de pasar el ratón
    >
      {label}
    </Button>
  );
};
