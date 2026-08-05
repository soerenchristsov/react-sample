import { useForm } from "react-hook-form";

async function createBookInBackend(book) {
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

  function submitForm(data) {
    console.log("data", data);
    const { title } = data;

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
        onSubmit={handleSubmit(submitForm)}
        style={{ display: "flex", flexDirection: "column", gap: "5px" }}
      >
        <label htmlFor="title">Title</label>
        <input {...register("title", { required: true })} />
        {errors.title && <span>This field is required</span>}

        <label htmlFor="price">Price</label>
        <input {...register("price", { min: 0, max: 100 })} />
        {errors.price && <span>Please enter a valid price</span>}

        <label htmlFor="author">Author</label>
        <input {...register("author")}></input>

        <label htmlFor="checkbox">Checkbox</label>
        <input type="checkbox" {...register("checkbox")} />

        <select {...register("select")}>
          <option>Test</option>
          <option>Test2</option>
        </select>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
