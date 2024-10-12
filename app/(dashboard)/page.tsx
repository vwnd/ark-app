import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusCircleIcon, UserIcon } from "lucide-react";
import moment from "moment";
import Link from "next/link";

const projects: {
  id: string;
  name: string;
  updatedAt: Date;
  numberOfMembers: number;
  status: "Active" | "Inactive";
}[] = [
  {
    id: "1",
    name: "Brodway Av. 276",
    updatedAt: new Date("2024-09-22"),
    numberOfMembers: 5,
    status: "Active",
  },
  {
    id: "2",
    name: "Grove St. 123",
    updatedAt: new Date("2024-07-10"),
    numberOfMembers: 5,
    status: "Inactive",
  },
  {
    id: "3",
    name: "Main St. 456",
    updatedAt: new Date("2023-11-15"),
    numberOfMembers: 3,
    status: "Active",
  },
  {
    id: "4",
    name: "Elm St. 789",
    updatedAt: new Date("2024-12-01"),
    numberOfMembers: 4,
    status: "Inactive",
  },
  {
    id: "5",
    name: "Oak St. 101",
    updatedAt: new Date("2022-01-20"),
    numberOfMembers: 6,
    status: "Active",
  },
  {
    id: "6",
    name: "Pine St. 202",
    updatedAt: new Date("2022-02-10"),
    numberOfMembers: 2,
    status: "Inactive",
  },
];

export default function ProjectsPage() {
  return (
    <section>
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>Projects</CardTitle>
              <CardDescription>
                Here are the projects you are working on.
              </CardDescription>
            </div>
            <Button>
              <PlusCircleIcon className="mr-2 h-4 w-4" />
              Create Project
            </Button>
          </div>
        </CardHeader>

        <CardContent className="grid grid-cols-3 gap-4">
          {projects.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <Card key={project.name} className="flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{project.name}</CardTitle>
                    </div>
                    <Badge variant="secondary">{project.status}</Badge>
                  </div>
                </CardHeader>
                <CardFooter>
                  <div className="flex w-full justify-between">
                    <p className="text-sm text-muted-foreground ">
                      Updated {moment(project.updatedAt).fromNow()}
                    </p>
                    <div className="flex text-sm text-muted-foreground items-center">
                      <UserIcon className="mr-2 h-4 w-4" />
                      <span>{project.numberOfMembers}</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
