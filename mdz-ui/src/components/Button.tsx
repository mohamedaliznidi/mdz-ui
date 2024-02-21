import { Button } from 'react-aria-components';

interface ButtonProps {
  onClick?: () => void;
  color?: "primary" | "secondary" | "default";
  variant?: "solid" | "outline";
  children: React.ReactNode;
}

const getStyleFromProps = (color: ButtonProps['color'], variant: ButtonProps['variant']) => {

  if (variant === 'solid') {
    return `bg-${color}-9
    text-${color}-1
    border-transparent
    hover:bg-${color}-10
    hover:border-${color}-5
    focus:ring-${color}-7
    focus:outline-${color}-7`;
  } else if (variant === 'outline') {
    return `bg-primary-3 border-4 border-indigo-600`;
  } else if (variant === 'link') {
    return `bg-${color}-600`;

  }
}


export const MDZButton: React.FC<ButtonProps> = ({ onClick, color = 'default', variant = 'solid', children }) => {
  const buttonClasses = getStyleFromProps(color, variant);
console.log(buttonClasses)
  return (
    <Button onPress={onClick} className={buttonClasses}>
      {children}
    </Button>
  );
};