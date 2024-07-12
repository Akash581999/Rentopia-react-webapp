import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../actions/themeActions";

const ThemeSwitch = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <form
        id="mode-switch"
        name="mode-switch"
        className={`form-check form-switch text-${theme} mt-2 mx-3`}
      >
        <input
          onClick={handleThemeToggle}
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          name="flexSwitchCheckDefault"
        />
        <label
          className="form-check-label text-wrap text-secondary"
          htmlFor="flexSwitchCheckDefault"
        >
          {theme === "light" ? (
            <i className="fas fa-sun-o text-warning fs-4"></i>
          ) : (
            <i className="fas fa-moon-o text-secondary fs-4"></i>
          )}
        </label>
      </form>
    </>
  );
};

export default ThemeSwitch;
