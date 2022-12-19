import React from "react";
import "./Menu.css";

const tableData = [
  {
    title: "Just Java",
    desc: [
      "Regular house blend, decaffeinated coffee, or flavor of the day.",
      "Endless Cup $3.50",
    ],
  },
  {
    title: "Cafe au Lait",
    desc: [
      "House blended coffee infused into a smooth, steamed milk.",
      "Single $4.00",
      "Double $5.00",
    ],
  },
  {
    title: "Iced Cappuccino",
    desc: [
      "Sweetened espresso blended with icy-cold milk and served in a chilled glass.",
      "Single $5.00",
      "Double $6.50",
    ],
  },
];

const Menu = () => {
  const tableRow = tableData.map(({ title, desc }) => (
    <tr key={title}>
      <th>{title}</th>
      <td>
        {desc.map((val) => (
          <div key={val}>{val}</div>
        ))}
      </td>
    </tr>
  ));

  return (
    <>
      <div id="heromugs"></div>
      <h2>Coffee at JavaJam</h2>
      <p>
        Indulge in our locally roasted free-trade coffee and enjoy the aroma,
        the smooth taste, the caffeine! Join our Mug Club and get a 10% discount
        on each cup of coffee you purchase &ndash; ask the barista for details.
      </p>
      <div id="flow">
        <table>
          <tbody>{tableRow}</tbody>
        </table>
      </div>
    </>
  );
};

export default Menu;
