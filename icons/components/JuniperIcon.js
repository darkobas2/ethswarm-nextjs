const React = require("react");
function JuniperIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("rect", {
    width: 24,
    height: 24,
    rx: 4,
    fill: "url(#pattern0_4058_1593)"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "pattern0_4058_1593",
    patternContentUnits: "objectBoundingBox",
    width: 1,
    height: 1
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#image0_4058_1593",
    transform: "scale(0.0416667)"
  })), /*#__PURE__*/React.createElement("image", {
    id: "image0_4058_1593",
    width: 24,
    height: 24,
    xlinkHref: "data:image/png;base64,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LmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjYgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA2LTEyVDIxOjQ0OjM4KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wNi0xMlQyMTo0NToxNCswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0wNi0xMlQyMTo0NToxNCswMjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJEaXNwbGF5IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmU4MTZlZTFlLTY5YmYtNDE5YS1hOGJkLWMwZmYzMWI1YzQxMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDplODE2ZWUxZS02OWJmLTQxOWEtYThiZC1jMGZmMzFiNWM0MTIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplODE2ZWUxZS02OWJmLTQxOWEtYThiZC1jMGZmMzFiNWM0MTIiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmU4MTZlZTFlLTY5YmYtNDE5YS1hOGJkLWMwZmYzMWI1YzQxMiIgc3RFdnQ6d2hlbj0iMjAyNC0wNi0xMlQyMTo0NDozOCswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjYgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GgTx+gAAA3BJREFUSMedlmlIVFEUx29Ni9Fii2kWQUXWUJaF0KcWIag+BH1IKM2KcrIIszKnKR3FdqsPFVQWVNCClKXmfGilUKKCMCgpCUWNCB3NHH1v9u3fuffNqNOMNtOBM2877/+7c+659zwm/fK0k4Nc5t7b4ZFtZsgA5KZak/ziTKP8sbxddtq9sscDuceoxIXhXLOd0Y/kuwC9DJcTwipyPiOb3UcWu0t+D6Vr38DS7RLPeJz/nX+4FACgkcPc7cWdjA/YwW5DO64C+ngD8mOqkUnXJUnPYfxmg8OO/wNwe3O9FRvZNWgnVKBwmgEFsdXQx1WjMNZA90txY+t7EWc2eSMHWHoBhw14uO8TjfgOdBOroCeIPs4ADaXq4orXMLW5xD91OxWnOQsf0EPBHMCtMreeRAkSXYVdJH4ppQZOB/qsoc4onNsQkEAA994BkMfaL0ildF1cVQMXiXt94p3fZaij8oTz8yEgwQA/xG4FVZQXtZdb0NVi6RM3tkhYFl+I8Wy7cH7O7w0CCQ3wQ/hEcrNKyvHnNwnJsflCOEmlE87Pk6fmo61JClXCgwP6vIuqyw10NNqQEHMAI1galqqOIlGlFc4hY9k2JE/Lh7HZl67OSADkDnrPQQMs2lWJSSwTanaoD+CHMLYJmg03lH9sQmQAXl22XmUOrha/wmSCLByWFwCZyfZiSZwObT+ohp2RAozKIvTQTpG19hamsz1YOLwfsEh1GDFMg5Wzj8PaTcVhjQDgF7f1uLEu8SxGsS0iJQPF1SyXUpSKCwXPRKzU5Q0PwCtJyakbaxaUCPHFJPi3uIomPi+9TMQ6zGFOsn/klt8urFafRhTbSuL9I+eg+STOodq0+yLW6wyzTP3iUqcdKQknMVqMPFB8HjsoRn5kW7ki7gq5jYfeKpQFY8fKOSdIPCMg5wPF9TsfKZPvHLRHSEENh5upzY7ls45hDKUllDhPS5GmUsS6HUM2oOB+8PVtB5Km6DDOtx0MFE9gBzCSpePY7seKODWeno4IG071zU+i5GbwheMDLB6hw1y2X6TlVLahX9wYYcPh5cXtZVkDotlOkSIuzFfucLYZ53KeiOcuW9h9ORjAezK3d0+bsV59XgCWxxbjwZU6cd9p+WdaggCBny2dHlmmI/9scVg9cmu9JJtNbnFtNXllEo/os+UPxz5h6aqptugAAAAASUVORK5CYII="
  })));
}
const ForwardRef = React.forwardRef(JuniperIcon);
module.exports = ForwardRef;