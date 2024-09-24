export default function Fruit({ name, price, emoji, soldout }) {
  return (
    <>
      <li>
        {emoji} {name} ${price} {soldout ? "soldOut" : ""}
      </li>
      {/* {price > 5 ? (
        <li>
          {emoji} {name} ${price}
        </li>
      ) : (
        ""
      )} */}
    </>
  );
}
