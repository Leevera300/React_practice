import Fruit from "./Fruit";
export default function Fruits() {
  //const fruits = ["Appele", "Banana", "Mango", "Organe", "Pineapple"];
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎", soldout: true },
    { name: "Mango", price: 7, emoji: "🥭", soldout: false },
    { name: "Banana", price: 2, emoji: "🍌", soldout: true },
    { name: "Orange", price: 5, emoji: "🍊", soldout: false },
    { name: "Pineapple", price: 8, emoji: "🍍", soldout: true },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          //   <li key={fruit.name}>
          //     {fruit.emoji} {fruit.name} ${fruit.price}
          //   </li>
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
