import FacebookSSO from "./FacebookSSO";
import GoogleSSO from "./GoogleSSO";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Submit from "./Submit";

// only client components are exported from module
// to avoid errors with server components as exported members
export default { FacebookSSO, GoogleSSO, SignIn, SignUp, Submit };
