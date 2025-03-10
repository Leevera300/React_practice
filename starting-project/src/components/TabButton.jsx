export default function TabButton({ children, isSelected, ...props }) {
  console.log("TabButton Component executing");
  // function handleClick(){
  //     console.log("Button clicked");
  // }

  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
