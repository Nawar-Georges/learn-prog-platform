import LoginForm from "./LoginForm";
import Button from "../Button";
import pic1 from "../../assets/imgs/Google.png"
import pic2 from "../../assets/imgs/LinkedIn.png"
import pic3 from "../../assets/imgs/Github.png"
import '../../Stylesheets/Login.css'
export default function LoginPage() {
  return (
    <div className="login-container">
      <h1>Welcome Back</h1>
      <LoginForm />
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
