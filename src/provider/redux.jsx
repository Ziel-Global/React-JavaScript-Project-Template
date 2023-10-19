import PropTypes from "prop-types";
import store from "../store";
import { Provider } from "react-redux";

const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

ReduxProvider.propTypes = {
  children: PropTypes.any,
};

export default ReduxProvider;
