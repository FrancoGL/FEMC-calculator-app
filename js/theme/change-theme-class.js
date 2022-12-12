const $body = document.getElementsByTagName("body")[0];

// Change Theme class
const changeThemeClass = (newTheme, oldThemeOne, oldThemeTwo) => {
  // Check if class already exists
  if (!$body.classList.contains(newTheme)) {
    // Remove other classes
    $body.classList.remove(oldThemeOne, oldThemeTwo);
    // Add class
    $body.classList.add(newTheme);
  }
};
export default changeThemeClass;
