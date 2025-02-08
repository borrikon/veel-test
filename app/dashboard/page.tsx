import { logout } from "@/lib/actions";

import { Button } from "@/components/ui/button";
import UserCard from "@/components/user-card";
import { IoLogOutOutline } from "react-icons/io5";

async function Dashboard() {
  return (
    <section className="flex flex-col gap-4 pt-60 h-full">
      <h1 className="text-3xl text-center font-bold">Home page!</h1>
      <UserCard
        action={
          <Button size="lg" className="mx-auto" onClick={logout}>
            <IoLogOutOutline />
            Logout
          </Button>
        }
      />
    </section>
  );
}

export default Dashboard;
