import Link from "next/link";
import { NotFoundContainer } from "../styles/SharedStyles";

const Custom404 = () => {
  return (
    <NotFoundContainer>
      <h1>Oops! Page Not Found</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link href="/">Go Back Home</Link>
    </NotFoundContainer>
  );
};

export default Custom404;
