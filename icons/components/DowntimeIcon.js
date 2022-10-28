const React = require("react");

function DowntimeIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36.53 40",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M17.43 40c.28 0 .55-.15.7-.4.22-.39.09-.88-.29-1.1L1.62 29.13V10.87l16.21-9.36c.39-.22.52-.72.29-1.1a.805.805 0 0 0-1.1-.3L0 9.94v20.12l17.02 9.83c.13.07.27.11.4.11Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.43 6.31c-.45 0-.81.36-.81.81v12.42l-6.3 3.64c-.39.22-.52.72-.29 1.1a.8.8 0 0 0 1.1.29l6.71-3.87s.05-.05.08-.07c.04-.03.09-.07.12-.11.03-.04.06-.08.09-.13.03-.04.05-.09.07-.14.02-.05.03-.11.03-.16 0-.03.02-.06.02-.1V7.12c0-.45-.36-.81-.81-.81ZM35.72 19.19h-1.68c-.45 0-.81.36-.81.81s.36.81.81.81h1.68c.45 0 .81-.36.81-.81s-.36-.81-.81-.81ZM32.19 29.46l1.45.84c.13.07.27.11.4.11.28 0 .55-.15.7-.4.22-.39.09-.88-.29-1.1L33 28.07a.803.803 0 0 0-1.1.3c-.22.39-.09.88.29 1.1ZM25.87 36.24a.8.8 0 0 0 1.1.29c.39-.22.52-.72.3-1.1l-.84-1.45a.805.805 0 1 0-1.4.8l.84 1.45ZM25.34 6.31c.13.07.27.11.4.11.28 0 .55-.15.7-.4l.84-1.45c.22-.39.09-.88-.3-1.1a.803.803 0 0 0-1.1.3l-.84 1.45c-.22.39-.09.88.3 1.1ZM32.6 12.05c.14 0 .28-.04.4-.11l1.45-.84a.805.805 0 1 0-.8-1.4l-1.45.84a.8.8 0 0 0 .4 1.5Z"
  }));
}

const ForwardRef = React.forwardRef(DowntimeIcon);
module.exports = ForwardRef;