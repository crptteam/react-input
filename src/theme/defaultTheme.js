export default {
  Input: {
    Placeholder: {
      fontWeight: 200,
      main: {
        color: "#abadb6"
      },
      error: {
        color: "#abadb6"
      },
      disabled: {
        color: "#abadb6"
      },
      normal: {
        fontSize: "16px",
        height: "24px",
        top: "19px"
      },
      focused: {
        top: "11px",
        fontSize: "14px",
        height: "14px"
      }
    },

    InputWrap: {
      main: {
        background: "#FFFFFF",
        border: "1px solid #ABADB5",
        cursor: "normal"
      },
      disabled: {
        background: "#f7f9f9",
        border: "1px solid #ABADB5",
        cursor: "not-allowed"
      },
      error: {
        background: "#FFEBEB",
        border: "1px solid #FF3C21",
        cursor: "normal"
      },
      height: "64px",
      borderRadius: "2px",
      paddingLeft: "16px",
      paddingRight: "16px"
    },
    InputElem: {
      main: {
        color: "#212C42",
        placeholderColor: "#ACADB5",
        cursor: "text"
      },
      disabled: {
        color: "#abadb6",
        placeholderColor: "#ACADB5",
        cursor: "not-allowed"
      },
      error: {
        color: "#212C42",
        placeholderColor: "#ACADB5",
        cursor: "text"
      },
      height: "24px",
      fontSize: "16px",
      fontWeight: 200,
      background: "rgba(0,0,0,0)"
    }
  }
};
