"use client";
import { getUserInfo } from "@/lib/actions";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";
import { useQuery } from "@tanstack/react-query";

type UserCardProps = {
  action?: React.ReactNode;
};

function UserCard({ action }: UserCardProps) {
  const { data, isLoading } = useQuery({
    queryFn: getUserInfo,
    queryKey: ["userInfo"],
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">My info:</CardTitle>
      </CardHeader>
      <CardContent>
        <Separator className="my-2" />
        <div className="flex gap-3 items-center pl-3">
          <p className="font-bold text-lg">Username:</p>
          {isLoading ? (
            <Skeleton className="w-24 h-[20px] rounded-sm" />
          ) : (
            <p className="">{data?.username}</p>
          )}
        </div>
        <Separator className="my-2" />
      </CardContent>
      <CardFooter>{action}</CardFooter>
    </Card>
  );
}

export default UserCard;
