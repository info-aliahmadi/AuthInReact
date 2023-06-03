import { useHistory } from "react-router-dom";

export default function RedirectTo(path) {
  let history = useHistory();
  if (history.location.pathname !== path) history.push(path);
}
