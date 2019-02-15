import React from "react";
import { render } from "react-dom";
import { hasOnlyDigits } from "../../src/utils";
import _ from "lodash";
import Input from "../../src";

const theme = {
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

const Bordered = props => {
  return (
    <div
      style={{ padding: "4px", border: "1px solid lightgray", margin: "4px" }}
    >
      {props.children}
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme,
      isError: false,
      isDisabled: false,
      value: ''
    };
  }

  onChange(e, path) {
    const newTheme = _.set(this.state.theme, path, e.target.value);

    this.setState({
      theme: newTheme
    });

    console.log("newTheme", newTheme);
  }

  onCheckboxChange(e, path) {
    this.setState({
      [path]: e.target.checked
    });
  }

  render() {
    const { Input: { Placeholder, InputWrap, InputElem } } = this.state.theme;

    return (
      <div>
        <h1>react-input theme Demo</h1>

        <div>
          <h2>Placeholder</h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Bordered>
              <h3>fontWeight</h3>
              <input
                type="number"
                name="fontWeight"
                value={Placeholder.fontWeight}
                onChange={e => this.onChange(e, "Input.Placeholder.fontWeight")}
              />
            </Bordered>
            <Bordered>
              <h3>main</h3>
              color:{" "}
              <input
                type="text"
                name="color"
                value={Placeholder.main.color}
                onChange={e => this.onChange(e, "Input.Placeholder.main.color")}
              />
            </Bordered>
            <Bordered>
              <h3>error</h3>
              color:{" "}
              <input
                type="text"
                name="color"
                value={Placeholder.error.color}
                onChange={e =>
                  this.onChange(e, "Input.Placeholder.error.color")
                }
              />
            </Bordered>
            <Bordered>
              <h3>disabled</h3>
              color:{" "}
              <input
                type="text"
                name="color"
                value={Placeholder.disabled.color}
                onChange={e =>
                  this.onChange(e, "Input.Placeholder.disabled.color")
                }
              />
            </Bordered>
            <Bordered>
              <h3>normal</h3>
              fontSize:{" "}
              <input
                type="text"
                name="fontSize"
                value={Placeholder.normal.fontSize}
                onChange={e =>
                  this.onChange(e, "Input.Placeholder.normal.fontSize")
                }
              />
              height:{" "}
              <input
                type="text"
                name="height"
                value={Placeholder.normal.height}
                onChange={e =>
                  this.onChange(e, "Input.Placeholder.normal.height")
                }
              />
              top:{" "}
              <input
                type="text"
                name="top"
                value={Placeholder.normal.top}
                onChange={e => this.onChange(e, "Input.Placeholder.normal.top")}
              />
            </Bordered>
            <Bordered>
              <h3>focused</h3>
              fontSize:{" "}
              <input
                type="text"
                name="fontSize"
                value={Placeholder.focused.fontSize}
                onChange={e =>
                  this.onChange(e, "Input.Placeholder.focused.fontSize")
                }
              />
              height:{" "}
              <input
                type="text"
                name="height"
                value={Placeholder.focused.height}
                onChange={e =>
                  this.onChange(e, "Input.Placeholder.focused.height")
                }
              />
              top:{" "}
              <input
                type="text"
                name="top"
                value={Placeholder.focused.top}
                onChange={e =>
                  this.onChange(e, "Input.Placeholder.focused.top")
                }
              />
            </Bordered>
          </div>
        </div>

        <div>
          <h2>InputWrap</h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Bordered>
              <h3>height</h3>
              <input
                type="text"
                name="height"
                value={InputWrap.height}
                onChange={e => this.onChange(e, "Input.InputWrap.height")}
              />
            </Bordered>
            <Bordered>
              <h3>borderRadius</h3>
              <input
                type="text"
                name="borderRadius"
                value={InputWrap.borderRadius}
                onChange={e => this.onChange(e, "Input.InputWrap.borderRadius")}
              />
            </Bordered>
            <Bordered>
              <h3>paddingLeft</h3>
              <input
                type="text"
                name="paddingLeft"
                value={InputWrap.paddingLeft}
                onChange={e => this.onChange(e, "Input.InputWrap.paddingLeft")}
              />
            </Bordered>
            <Bordered>
              <h3>paddingRight</h3>
              <input
                type="text"
                name="paddingRight"
                value={InputWrap.paddingRight}
                onChange={e => this.onChange(e, "Input.InputWrap.paddingRight")}
              />
            </Bordered>
            <Bordered>
              <h3>main</h3>
              background:{" "}
              <input
                type="text"
                name="background"
                value={InputWrap.main.background}
                onChange={e =>
                  this.onChange(e, "Input.InputWrap.main.background")
                }
              />
              border:{" "}
              <input
                type="text"
                name="border"
                value={InputWrap.main.border}
                onChange={e => this.onChange(e, "Input.InputWrap.main.border")}
              />
              cursor:{" "}
              <input
                type="text"
                name="cursor"
                value={InputWrap.main.cursor}
                onChange={e => this.onChange(e, "Input.InputWrap.main.cursor")}
              />
            </Bordered>
            <Bordered>
              <h3>disabled</h3>
              background:{" "}
              <input
                type="text"
                name="background"
                value={InputWrap.disabled.background}
                onChange={e =>
                  this.onChange(e, "Input.InputWrap.disabled.background")
                }
              />
              border:{" "}
              <input
                type="text"
                name="border"
                value={InputWrap.disabled.border}
                onChange={e =>
                  this.onChange(e, "Input.InputWrap.disabled.border")
                }
              />
              cursor:{" "}
              <input
                type="text"
                name="cursor"
                value={InputWrap.disabled.cursor}
                onChange={e =>
                  this.onChange(e, "Input.InputWrap.disabled.cursor")
                }
              />
            </Bordered>
            <Bordered>
              <h3>error</h3>
              background:{" "}
              <input
                type="text"
                name="background"
                value={InputWrap.error.background}
                onChange={e =>
                  this.onChange(e, "Input.InputWrap.error.background")
                }
              />
              border:{" "}
              <input
                type="text"
                name="border"
                value={InputWrap.error.border}
                onChange={e => this.onChange(e, "Input.InputWrap.error.border")}
              />
              cursor:{" "}
              <input
                type="text"
                name="cursor"
                value={InputWrap.error.cursor}
                onChange={e => this.onChange(e, "Input.InputWrap.error.cursor")}
              />
            </Bordered>
          </div>
        </div>

        <div>
          <h2>InputElem</h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Bordered>
              <h3>height</h3>
              <input
                type="text"
                name="height"
                value={InputElem.height}
                onChange={e => this.onChange(e, "Input.InputElem.height")}
              />
            </Bordered>
            <Bordered>
              <h3>fontSize</h3>
              <input
                type="text"
                name="fontSize"
                value={InputElem.fontSize}
                onChange={e => this.onChange(e, "Input.InputElem.fontSize")}
              />
            </Bordered>
            <Bordered>
              <h3>fontWeight</h3>
              <input
                type="text"
                name="fontWeight"
                value={InputElem.fontWeight}
                onChange={e => this.onChange(e, "Input.InputElem.fontWeight")}
              />
            </Bordered>
            <Bordered>
              <h3>background</h3>
              <input
                type="text"
                name="background"
                value={InputElem.background}
                onChange={e => this.onChange(e, "Input.InputElem.background")}
              />
            </Bordered>
            <Bordered>
              <h3>main</h3>
              color:{" "}
              <input
                type="text"
                name="background"
                value={InputElem.main.color}
                onChange={e => this.onChange(e, "Input.InputElem.main.color")}
              />
              placeholderColor:{" "}
              <input
                type="text"
                name="placeholderColor"
                value={InputElem.main.placeholderColor}
                onChange={e =>
                  this.onChange(e, "Input.InputElem.main.placeholderColor")
                }
              />
              cursor:{" "}
              <input
                type="text"
                name="cursor"
                value={InputElem.main.cursor}
                onChange={e => this.onChange(e, "Input.InputElem.main.cursor")}
              />
            </Bordered>
            <Bordered>
              <h3>disabled</h3>
              color:{" "}
              <input
                type="text"
                name="background"
                value={InputElem.disabled.color}
                onChange={e =>
                  this.onChange(e, "Input.InputElem.disabled.color")
                }
              />
              placeholderColor:{" "}
              <input
                type="text"
                name="placeholderColor"
                value={InputElem.disabled.placeholderColor}
                onChange={e =>
                  this.onChange(e, "Input.InputElem.disabled.placeholderColor")
                }
              />
              cursor:{" "}
              <input
                type="text"
                name="cursor"
                value={InputElem.disabled.cursor}
                onChange={e =>
                  this.onChange(e, "Input.InputElem.disabled.cursor")
                }
              />
            </Bordered>
            <Bordered>
              <h3>error</h3>
              color:{" "}
              <input
                type="text"
                name="background"
                value={InputElem.error.color}
                onChange={e => this.onChange(e, "Input.InputElem.error.color")}
              />
              placeholderColor:{" "}
              <input
                type="text"
                name="placeholderColor"
                value={InputElem.error.placeholderColor}
                onChange={e =>
                  this.onChange(e, "Input.InputElem.error.placeholderColor")
                }
              />
              cursor:{" "}
              <input
                type="text"
                name="cursor"
                value={InputElem.error.cursor}
                onChange={e => this.onChange(e, "Input.InputElem.error.cursor")}
              />
            </Bordered>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Bordered>
            isError: <input
              type="checkbox"
              checked={this.state.isError}
              onChange={e => this.onCheckboxChange(e, "isError")}
            />
          </Bordered>
          <Bordered>
            isDisabled: <input
              type="checkbox"
              checked={this.state.isDisabled}
              onChange={e => this.onCheckboxChange(e, "isDisabled")}
            />
          </Bordered>
        </div>

        <h1>react-input Demo</h1>
        <Input
          isError={this.state.isError}
          disabled={this.state.isDisabled}
          theme={theme}
          mask={'9999-9999-9999-9999'}
          onFocus={e=>{
            console.log('on focus',e);
          }}
          placeholder="Очень длинный плейсхолдер, который должен весь влезать в инпут"
        />
        <Input
          isError={this.state.isError}
          disabled={this.state.isDisabled}
          theme={theme}
          placeholder="Короткий плейсхолдер"
        />

        <div>
          <pre>{JSON.stringify(this.state.theme, null, 4)}</pre>
        </div>
      </div>
    );
  }
}

render(<App />, document.querySelector("#demo"));
