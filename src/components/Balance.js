import React, { useState } from "react";

export default function Balance({ balance }) {
  return (
    <div className="balance">
      <h3>Your Balance</h3>
      <p>${balance}</p>
    </div>
  );
}
