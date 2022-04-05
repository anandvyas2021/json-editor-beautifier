import React from "react";
import "./styles.css";

const inputData = {
  "614095f6283d0000b2004998": {
    mobile_recharge: {
      mobile_recharge_vendors: "d",
      "mobile recharge_gateways": "d",
      "mobile recharge_orders": "d",
    },
    bharat_bill_pay: { bharat_bill_pay_vendors: "d" },
    layout: {
      layout_icons: "d",
      layout_avatars: "d",
      home_page_slider: "d",
    },
    mega_brand: {
      categories: "d",
      featured_brands: "d",
      listed_brands: "d",
      provider_brands: "d",
      orders: "d",
    },
    bsw: {
      categories: "d",
      featured_brands: "d",
      listed_brands: "d",
      provider_brands: "d",
      orders: "d",
    },
  },
};

const Editor = () => {
  const formatHandler = () => {
    const inputArea = document.querySelector(".input-area");
    const outputArea = document.querySelector(".output-area");
    const errorLog = document.querySelector(".errorlog");

    try {
      let formatted = JSON.stringify(JSON.parse(inputArea.value), null, 4);
      outputArea.value = formatted;
      errorLog.textContent = "";
      errorLog.classList.remove("error");
    } catch (error) {
      outputArea.value = "";
      errorLog.textContent = "Insert valid JSON data";
      errorLog.classList.add("error");
    }
  };

  const minifyHandler = () => {
    const inputArea = document.querySelector(".input-area");
    const outputArea = document.querySelector(".output-area");
    const errorLog = document.querySelector(".errorlog");

    try {
      let formatted = JSON.stringify(JSON.parse(inputArea.value), null, 4);
      let minified = JSON.stringify(inputArea.value);
      outputArea.value = minified;
      errorLog.textContent = "";
      errorLog.classList.remove("error");
    } catch (error) {
      outputArea.value = "";
      errorLog.textContent = "Insert valid JSON data";
      errorLog.classList.add("error");
    }
  };

  return (
    <div className="container">
      <textarea
        className="text-areas input-area"
//         defaultValue={JSON.stringify(inputData, null, 4)}
      >
      </textarea>
      <div className="controls">
        <p className="errorlog"></p>
        <button
          type="button"
          className="controls-btn btn-format"
          onClick={formatHandler}
        >
          Format
        </button>
        <button
          type="button"
          className="controls-btn btn-minify"
          onClick={minifyHandler}
        >
          Minify
        </button>
      </div>

      <textarea readOnly className="text-areas output-area"></textarea>
    </div>
  );
};

export default Editor;
