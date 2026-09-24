import { useQuery } from "@tanstack/react-query";
import "./CurrentUser.css";

type User = {
  firstname: string;
  lastname: string;
  email: string;
  name: string;
  displayName: string;
  scopes: string[];
};

async function fetchCurrentUser(): Promise<User> {
  const response = await fetch("/user-api/currentUser");

  if (!response.ok) {
    throw new Error(`Failed to load current user (${response.status})`);
  }

  return response.json();
}

// Scopes every logged-in user gets from XSUAA; they say nothing about app roles.
const TECHNICAL_SCOPES = ["openid", "user_attributes", "uaa.user"];

// App scopes arrive qualified with the xsappname, e.g. "backend-org-space!t123.admin".
function toRoleNames(scopes: string[] = []) {
  return scopes
    .filter((scope) => !TECHNICAL_SCOPES.includes(scope))
    .map((scope) => scope.slice(scope.lastIndexOf(".") + 1));
}

function useCurrentUser() {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: fetchCurrentUser,
    staleTime: Infinity,
    retry: false,
  });
}

export function CurrentUser() {
  const { data: user } = useCurrentUser();

  if (!user) {
    return null;
  }

  const fullName = `${user.firstname} ${user.lastname}`.trim() || user.name;
  const initials =
    `${user.firstname?.[0] ?? ""}${user.lastname?.[0] ?? ""}`.toUpperCase() ||
    user.name[0]?.toUpperCase();
  const roles = toRoleNames(user.scopes);

  return (
    <div className="current-user" title={user.displayName}>
      <span className="current-user-avatar">{initials}</span>
      <span className="current-user-name">{fullName}</span>
      {roles.map((role) => (
        <span key={role} className="current-user-role">
          {role}
        </span>
      ))}
    </div>
  );
}
