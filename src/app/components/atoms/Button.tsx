interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
const Button: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
