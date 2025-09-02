import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addUser } from "@/redux/feature/user/userSlice";
import type { Iuser } from "@/type";
import { DialogClose } from "@radix-ui/react-dialog";
import React from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";

const AddUserModal = () => {
  const form = useForm();
  const dispatch = useDispatch()
  const onSubmit :SubmitHandler<FieldValues> = (data) => { // aikhane data te Iuser er id missing tobu o error dicche nah keno ?SubmitHandler<FieldValues> keno use korlam kii bujacche aita dara??
dispatch(addUser(data)) //error ta kii dicche ?
    // console.log(data);
  };


  return (
    <div>
      {" "}
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button>Add User</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add User</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              {" "}
              {/*... from keno korlam  */}
              <form onSubmit={form.handleSubmit(onSubmit)}>
                {/* title input */}
                <FormField
                  control={form.control} //keno korlam
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value || ""} />
                      </FormControl>
                      <FormDescription className="sr-only">
                        fill up the form
                      </FormDescription>
                      {/* sr only kii kaj kore? */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <DialogFooter >
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
              </form>
            </Form>
          </DialogContent>

        </form>
      </Dialog>
    </div>
  );
};

export default AddUserModal;
