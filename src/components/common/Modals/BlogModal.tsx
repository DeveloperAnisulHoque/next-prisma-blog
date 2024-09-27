import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { FaPlug, FaPlus } from "react-icons/fa";

export function BlogModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="flex gap-2 items-center">
          {" "}
          <FaPlus />
          Create
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Blog</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-6">
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="name">Text</Label>
            <Input
              type="text"
              id="name"
              placeholder="Type  text"
              className="focus-visible:ring-slate-300"
            />
          </div>{" "}
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Publish</Label>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
