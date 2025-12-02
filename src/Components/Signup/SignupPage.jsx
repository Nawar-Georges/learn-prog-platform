import "../../Stylesheets/Signup.css";
import SignupForm from "./SignupForm";
import Button from "../Button.jsx";
import pic1 from "../../assets/imgs/Google.png";
import pic2 from "../../assets/imgs/LinkedIn.png";
import pic3 from "../../assets/imgs/Github.png";
export default function LoginPage() {
    return (
        <div className="signup-container">
            <h1>Create Account</h1>
            <SignupForm />
            <p>_______________OR_______________</p>
            <Button with="Google" photo={pic1} />
            <br />
            <Button with="LinkedIn" photo={pic2} />
            <br />
            <Button with="Github" photo={pic3} />
            <br />
        </div>

    );
}
