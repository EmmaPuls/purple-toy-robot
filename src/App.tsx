import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import React, { FC } from "react";
import TableTop from "TableTop";
import { GlobalTheme } from "theme";
import appStyles from "./App.style";

const App: FC = () => {
  const theme = useTheme() as GlobalTheme;
  const styles = appStyles(theme);

  return (
    <div className={css(styles.app)}>
      <header className={css(styles.header)}>
        <h1>Emma's Toy Robot</h1>
      </header>
      <div className={css(styles.body)}>
        <TableTop />
      </div>
    </div>
  );
}

export default App;
