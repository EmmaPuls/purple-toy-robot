import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { FC } from "react";
import { GlobalTheme } from "theme";
import { errorPageStyles } from "./ErrorBoundary.style";

type ErrorPageProps = {
  title: string;
  body: string;
  themed?: boolean;
};

const ErrorPage: FC<ErrorPageProps> = ({ title, body, themed = false }) => {
  const theme = useTheme() as GlobalTheme;
  const styles = errorPageStyles(theme);

  return (
    <div className={css(styles.page)}>
      <div className={css(styles.container)}>
        <h1 className={css(styles.header)}>{title}</h1>
        <p className={css(styles.body)}>{body}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
