export function EntryForm() {
  return (
    <>
      <div>
        <div>
          <div>
            <h1 id="formH1">New Entry</h1>
          </div>
        </div>
        <form id="entryForm">
          <div>
            <div>
              <img src={''} alt="images" />
            </div>
            <div>
              <label>
                Title:
                <input type="text" required name="title" />
              </label>
              <label>
                Photo URL:
                <input type="text" required name="photoUrl" />
              </label>
            </div>
          </div>
          <div>
            <div>
              <label>
                Notes:
                <textarea
                  required
                  name="message"
                  cols={30}
                  rows={10}></textarea>
              </label>
            </div>
          </div>
          <div>
            <div>
              <button>Delete Entry</button>
              <button>Save</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
