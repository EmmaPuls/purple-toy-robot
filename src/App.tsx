import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import CommandCenter from "features/CommandCenter";
import TableTop from "features/TableTop";
import { FC } from "react";
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
        <div className={css(styles.container)}>
          <TableTop />
          <CommandCenter />
        </div>
      </div>
    </div>
  );
};

export default App;
