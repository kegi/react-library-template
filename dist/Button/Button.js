import { jsx as _jsx } from "react/jsx-runtime";
const Button = ({ onClick, backgroundColor, children, }) => (_jsx("button", Object.assign({ onClick: onClick, style: { backgroundColor } }, { children: children }), void 0));
export default Button;
