import { useState } from "react";

async function createBookInBackend(book) {
  const response = await fetch("/odata/v4/admin/Books", {
    method: "POST",
    body: JSON.stringify(book),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const body = await response.json();
  console.log(body);
}

export function CreateBook() {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");

  function submitForm(e) {
    e.preventDefault();
    console.log("submitting", title);

    if (title.length === 0) {
      setTitleError("Please add title");
      return;
    }

    setTitleError("");
    const book = {
      title: title,
      author_ID: 101,
    };
    createBookInBackend(book);
  }

  return (
    <div>
      <h1>Create Book</h1>
      <form
        onSubmit={submitForm}
        style={{ display: "flex", flexDirection: "column", gap: "5px" }}
      >
        <label htmlFor="title">Title</label>
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {titleError}
        <label htmlFor="author">Author</label>
        <input name="author"></input>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
