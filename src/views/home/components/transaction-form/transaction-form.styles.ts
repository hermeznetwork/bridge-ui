import { createUseStyles } from "react-jss";

import { Theme } from "src/styles/theme";

const useTransactionFormStyles = createUseStyles((theme: Theme) => ({
  form: {
    margin: [theme.spacing(5), 0],
  },
  card: {
    padding: [theme.spacing(2), theme.spacing(3)],
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: theme.spacing(0.5),
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  chainSelector: {
    padding: [theme.spacing(0.75), theme.spacing(1.25)],
    marginLeft: -theme.spacing(1.25),
    marginTop: theme.spacing(0.5),
    marginBottom: -theme.spacing(0.75),
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    gap: 8,
    border: "none",
    background: "none",
  },
  chainSelectorButton: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.grey.light,
    },
  },
  middleRow: {
    padding: [theme.spacing(2), 0, 0],
    marginTop: theme.spacing(1.25),
    borderTop: `1px solid ${theme.palette.grey.light}`,
  },
  tokenSelector: {
    display: "flex",
    gap: theme.spacing(1),
    padding: [theme.spacing(1.75), theme.spacing(1)],
    backgroundColor: theme.palette.grey.light,
    borderRadius: 8,
    border: "none",
    [theme.breakpoints.upSm]: {
      padding: [theme.spacing(1.5), theme.spacing(2)],
      gap: theme.spacing(2),
    },
  },
  icons: {
    width: "20px",
    height: "20px",
    [theme.breakpoints.upSm]: {
      width: "24px",
      height: "24px",
    },
  },
  arrowRow: {
    display: "flex",
    justifyContent: "center",
    margin: [theme.spacing(1), 0],
    [theme.breakpoints.upSm]: {
      margin: [theme.spacing(2), 0],
    },
  },
  arrowDownIcon: {
    backgroundColor: theme.palette.grey.main,
    borderRadius: "50%",
    display: "flex",
    [theme.breakpoints.upSm]: {
      padding: theme.spacing(0.5),
    },
  },
  button: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(2),
    margin: [theme.spacing(5), "auto"],
  },
}));

export default useTransactionFormStyles;
