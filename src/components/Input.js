import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import InputWrap from "../styled/InputWrap";
import InputContentWrap from "../styled/InputContentWrap";
import InputElem from "../styled/InputElem";
import Placeholder from "../styled/Placeholder";
import RightIconWrap from "../styled/RightIconWrap";

import defaultTheme from "../theme/defaultTheme";

class Input extends Component {
  input;

  constructor(props) {
    super(props);

    const value = this.props.defaultValue || "";

    this.state = {
      isFocused: !!value.length,
      value
    };

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  componentDidMount() {
    this.setState({
      isFocused: this.input.value && this.input.value.length
    });
    this.props.onRef && this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef && this.props.onRef(undefined);
  }

  onKeyPress(e) {
    if (e.charCode === 13 || e.keyCode === 13 || e.key == "Enter") {
      this.props.onUpdate && this.props.onUpdate(this.state.value);
    }
  }

  clear() {
    this.setState({
      value: ""
    });
    this.props.onUpdate && this.props.onUpdate("");
    this.props.onChange && this.props.onChange("");
  }

  onFocus(e) {
    this.setState({
      isFocused: true
    });

    this.props.onFocus && this.props.onFocus(this.state.value);
  }

  onBlur(e) {
    if (!this.state.value.length) {
      this.setState({
        isFocused: false
      });
    }

    this.props.onUpdate && this.props.onUpdate(this.state.value);
    this.props.onBlur && this.props.onBlur(this.state.value);
  }

  onChange(e) {
    this.props.onChange && this.props.onChange(e.target.value);

    const value = e.target.value;

    this.setState({
      value
    });
  }

  render() {
    const {
      value,
      type,
      disabled,
      rightIcon,
      name,
      onChange,
      onBlur,
      onFocus,
      ...otherProps
    } = this.props;

    const rIcon = rightIcon ? <RightIconWrap>{rightIcon}</RightIconWrap> : null;

    return (
      <InputWrap disabled={disabled} {...otherProps} component="Input">
        <Placeholder
          focused={this.state.isFocused}
          disabled={disabled}
          isError={this.props.isError}
          theme={this.props.theme}
        >
          {this.props.placeholder}
        </Placeholder>
        <InputContentWrap>
          <InputElem
            onFocus={this.onFocus}
            onChange={this.onChange}
            onBlur={this.onBlur}
            onKeyPress={this.onKeyPress}
            value={this.state.value ? this.state.value : ""}
            disabled={disabled}
            type={type}
            name={name}
            innerRef={el => (this.input = el)}
            theme={this.props.theme}
            component="Input"
          />

          {rIcon}
        </InputContentWrap>
      </InputWrap>
    );
  }
}

Input.propTypes = {
  theme: PropTypes.object,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.any,
  defaultValue: PropTypes.string,
  isError: PropTypes.bool,
  onUpdate: PropTypes.func,
  rightIcon: PropTypes.any
};

Input.defaultProps = {
  disabled: false,
  placeholder: "",
  defaultValue: "",
  isError: false,
  theme: defaultTheme
};

Input.displayName = "Input";

export default withTheme(Input);
