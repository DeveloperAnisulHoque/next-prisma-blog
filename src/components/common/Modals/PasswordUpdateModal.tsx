import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function PasswordUpdateModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Update password</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle> Update Password</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="password">Current Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Type  current password"
              className="focus-visible:ring-slate-300"
            />
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Type  password"
              className="focus-visible:ring-slate-300"
            />
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="confirmPass">Confirm Password</Label>
            <Input
              type="password"
              id="confirmPass"
              placeholder="Type confirm password"
              className="focus-visible:ring-slate-300"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save Password</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
