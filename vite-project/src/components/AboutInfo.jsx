const AboutInfo = () => {
  return (
    <div className="aboutInfo">
      <h1>About</h1>
      <p>
        To-do is a app in which you can add tasks, delete tasks, change the
        order of the list and check a task when it's done. It has an easy
        intuitive UI that will save your list between each use.
      </p>
      <ul className="infoList">
        <h3>Features:</h3>
        <li className="AboutListItem">
          <h4>Add Tasks:</h4>
        </li>
        <li className="AboutListItem">
          <h4>Delete Tasks:</h4>
        </li>
        <li className="AboutListItem">
          <h4>Change list order:</h4>
        </li>
        <li className="AboutListItem">
          <h4>Check task:</h4>
        </li>
      </ul>
    </div>
  );
};

export default AboutInfo;
