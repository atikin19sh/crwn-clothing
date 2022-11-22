import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { selectCurrentUser } from "../../store/user/user.selector";

import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      <AuthenticationContainer>
        <SignInForm />
        <SignUpForm />
      </AuthenticationContainer>
      {!!currentUser && <Navigate replace to="/" />}
    </>
  );
};

export default Authentication;
