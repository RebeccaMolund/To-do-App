const AboutInfo = () => {
  return (
    <div className="aboutInfo">
      <h1 className="mainHeader">About✔️</h1>
      <p>
        To-do is a app in which you can add tasks, delete tasks, change the
        order of the list and check a task when it's done. It has an easy
        intuitive UI that will save your list between each use.
      </p>
      <ul className="infoList">
        <li className="aboutListItem">
          <h4>Add Tasks:</h4>
          <p>
            Write you task in the input box and press button "add" to add it to
            you list of ucompleted tasks.
          </p>
        </li>
        <li className="aboutListItem">
          <h4>Delete Tasks:</h4>
          <p>
            When you want to delete a task, just press the button with an "X"
            next to the task you want to delete.
          </p>
        </li>
        <li className="aboutListItem">
          <h4>Change list order:</h4>
          <p>
            To change the list order you can simply click on the button with a
            hand pointing up or down.
          </p>
        </li>
        <li className="aboutListItem">
          <h4>Check task:</h4>
          <p>
            To check a task you just need to click the text of the task. The
            task will then be removed from the Uncompleted tasks-list and added
            to the Completed tasks-list.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default AboutInfo;
