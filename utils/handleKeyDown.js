const handleKeyDown = (e, actionFunction) => {
  if (!["Enter", " "].includes(e.key)) return;
  if (e.key === " ") e.preventDefault();
  actionFunction(e);
};

export default handleKeyDown;
