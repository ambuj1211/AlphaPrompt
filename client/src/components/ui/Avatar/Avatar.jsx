const Avatar = ({ src, alt = "User avatar", fallback = "U", className = "" }) => {
  return src ? (
    <img className={`h-10 w-10 rounded-full object-cover ${className}`} src={src} alt={alt} />
  ) : (
    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white ${className}`}>
      {fallback.slice(0, 1).toUpperCase()}
    </span>
  );
};

export default Avatar;
