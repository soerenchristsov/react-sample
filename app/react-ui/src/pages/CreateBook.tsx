import { useForm } from "react-hook-form";

async function createBookInBackend(book: any) {
  await fetch("/odata/v4/admin/Books", {
    method: "POST",
    body: JSON.stringify(book),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function CreateBook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitForm(data: any) {
    console.log("data", data);
    const { title } = data;

    const book = {
      title: title,
      author_ID: 101,
    };
    createBookInBackend(book);
  }

  return (
    <div style={{ maxWidth: "420px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "32px", textAlign: "left" }}>Create Book</h1>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="card"
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <label htmlFor="title">Title</label>
          <input {...register("title", { required: true })} />
          {errors.title && (
            <span className="error-message">This field is required</span>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <label htmlFor="price">Price</label>
          <input {...register("price", { min: 0, max: 100 })} />
          {errors.price && (
            <span className="error-message">Please enter a valid price</span>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <label htmlFor="author">Author</label>
          <input {...register("author")}></input>
        </div>

        <label
          htmlFor="checkbox"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <input type="checkbox" {...register("checkbox")} />
          Checkbox
        </label>

        <select {...register("select")}>
          <option>Test</option>
          <option>Test2</option>
        </select>

        <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
