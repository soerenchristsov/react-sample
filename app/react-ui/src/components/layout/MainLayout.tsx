import { Outlet } from "react-router";

export function MainLayout() {
  return (
    <div>
      <div style={{ height: "20px", backgroundColor: "grey", width: "100%" }}>
        My Books
      </div>
      <Outlet />
    </div>
  );
}
