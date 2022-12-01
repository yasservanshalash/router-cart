import React from "react";

export default function CartItem(props) {
  return <div>
    <table>
      <tr>
      <td>ID</td>
      <td>{props.name}</td>
      <td>Image</td>
      <td>2</td>
      <td>{props.price}</td>
      </tr>
    </table>
  </div>;
}
