const GlassButton = ({ children, ...props }) => {
  return (
    <button className="glass-button" {...props}>
      {children}
    </button>
  );
};

export default GlassButton;
